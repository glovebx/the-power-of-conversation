import { useState, useEffect, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
// Assuming you have a NotFound component you want to use if a page is not found
import NotFound from './pages/NotFound'; // Adjust path as needed
import LoadingFallback from './components/LoadingFallback';

// // A simple loading fallback component
// const LoadingFallback = () => <div className="w-full max-w-7xl px-4 md:px-6 mx-auto">Loading Page...</div>;

// Helper function to convert a slug (e.g., 'art-of-questioning')
// into a PascalCase component name (e.g., 'ArtOfQuestioning').
// Adjust this logic based on your actual file naming convention.
function slugToComponentName(slug: string) {
  if (!slug) return '';
  const parts = slug.split('-');
  const pascalParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
  return pascalParts.join(''); // Joins 'Art', 'Of', 'Questioning' into 'ArtOfQuestioning'
}

// Define a type for the dynamically imported module
// It can be null, or an object with a default export that is a React component
type PageModule = null | { default: React.ComponentType<any> }; // Use React.ComponentType for flexibility

// This component dynamically loads and renders a page component based on the URL slug
const DynamicPageLoader = () => {

  const { pageSlug } = useParams(); // Get the dynamic part from the URL (e.g., 'art-of-questioning')

  const [pageModule, setPageModule] = useState<PageModule>(null); // 初始化为 null
  const [isLoading, setIsLoading] = useState(true); // 控制加载状态
  const [error, setError] = useState<Error | null>(null); // 存储加载或处理错误  

  // Handle cases where slug might be unexpectedly missing (e.g., if route was just '/')
  // Although the /:pageSlug route typically won't match the root exactly unless configured specially.
  if (!pageSlug) {
    console.warn("DynamicPageLoader received no slug.");
     // If no slug is provided, you might want to render the NotFound page or redirect.
    return <NotFound />; // Render the NotFound component
  }

  // Dynamically import the component based on the slug
  // IMPORTANT: The import path here must match your file structure and naming convention.
  // We convert the slug (e.g., 'art-of-questioning') to the expected component file name (e.g., 'ArtOfQuestioning.jsx')
  const componentName = slugToComponentName(pageSlug); // e.g., 'ArtOfQuestioning'
  const componentPath = `./pages/${componentName}.tsx`; // Adjust file extension (.tsx) and base path as needed

  // 使用 useEffect 在 pageSlug 或 componentPath 改变时触发动态导入
  // 必须使用 useEffect，否则 PageComponent 的渲染无限循环
  useEffect(() => {
    // 在 slug 或 path 改变时重置状态，表示重新开始加载
    setPageModule(null);
    setIsLoading(true);
    setError(null);

    // 如果 pageSlug 为空，直接标记为错误或找不到页面（取决于你的路由设计）
    if (!pageSlug) {
        console.warn("DynamicPageLoader received no slug.");
        setError(new Error("Page slug is missing"));
        setIsLoading(false);
        return; // 停止执行导入
    }

    // 执行动态导入
    import(/* @vite-ignore */componentPath)
      .then(module => {
         // 检查导入的模块是否有效并包含默认导出的 React 组件函数
         if (module && typeof module.default === 'function') {
            setPageModule(module as PageModule); // 加载成功，存储整个模块对象
            setIsLoading(false);    // 加载完成
            setError(null);         // 清除错误状态
         } else {
            // 模块文件找到了，但默认导出不是一个有效的 React 组件
            console.error(`Module found at "${componentPath}" but default export is not a valid component.`);
            setError(new Error("Invalid component module")); // 设置错误状态
            setIsLoading(false); // 加载完成 (失败)
         }
      })
      .catch(err => {
        // 导入文件本身失败 (例如，文件不存在)
        console.error(`Failed to load component for slug "${pageSlug}" from path "${componentPath}":`, err);
        setError(err); // 设置错误状态
        setIsLoading(false); // 加载完成 (失败)
      });

      // useEffect 的清理函数 (如果导入过程有需要清理的资源，通常动态导入不需要)
      // return () => { ... cleanup ... };

  }, [pageSlug, componentPath]); // 依赖项数组：当 pageSlug 或 componentPath 改变时重新运行 effect


  // --- 根据加载状态和错误状态进行条件渲染 ---

  // 正在加载中
  if (isLoading) {
    return <LoadingFallback />; // 显示加载中提示
  }

  // 加载失败或发生错误
  if (error) {
    // 渲染 NotFound 组件，可以把错误信息传递给它
    return <NotFound />;
  }

  // 加载成功且没有错误
  // 检查模块是否成功加载并且有默认导出
  const PageComponent = pageModule?.default;

  // // Use React.lazy with a dynamic import
  // // Use .catch to handle cases where the component file does not exist or fails to load
  // const PageComponent = lazy(() =>
  //   import(componentPath)
  //     .catch((error) => {
  //       console.error(`Failed to load component for slug "${pageSlug}" from path "${componentPath}":`, error);
  //       // If the component fails to load (e.g., file not found), return the NotFound component.
  //       // React.lazy expects the Promise to resolve to an object with a 'default' export.
  //       return { default: NotFound }; // Provide your NotFound component as the default export
  //     })
  // );

  // 如果组件成功加载，渲染它
  if (PageComponent) {
    // 在这里，你不需要额外的 Suspense，因为你已经手动管理了 loading 状态
    // 只有当 PageComponent 内部再次使用 React.lazy 或 Suspense-enabled hooks 时才需要额外的 Suspense
    // 通常，包含 DynamicPageLoader 的父组件 (App.tsx) 顶层的 Suspense 已经足够
    return <PageComponent />; // 渲染加载成功的页面组件
  }

  // 理论上，如果逻辑正确，不应该走到这里 (不是加载中，没错误，但也没组件)
  // 作为最后的安全回退，也渲染 NotFound
  console.warn("DynamicPageLoader in unexpected state: not loading, no error, but no PageComponent.");
  return <NotFound />;

  // return (
  //   // Use Suspense while the dynamic import is loading
  //   // The fallback (LoadingFallback) will be shown until the component code is loaded
  //   <Suspense fallback={<LoadingFallback />}>
  //     {/* Render the dynamically imported component */}
  //     {/* You can pass any necessary props to the page component if needed */}
  //     <NotFound />
  //   </Suspense>
  // );
};

export default DynamicPageLoader;