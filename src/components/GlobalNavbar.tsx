
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import articleData from '@/data/articles.json';

const GlobalNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [articles, setArticles] = useState<Array<{title: string, route: string}>>([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    // Load articles from JSON file
    setArticles(articleData);
  
    // Find index of current article based on current route
    const currentIndex = articleData.findIndex(article => article.route === location.pathname);
    if (currentIndex !== -1) {
      setCurrentArticleIndex(currentIndex);
    }
  }, [location.pathname]);

  const navigateToPreviousArticle = () => {
    if (currentArticleIndex > 0) {
      const prevArticle = articles[currentArticleIndex - 1];
      navigate(prevArticle.route);
      // toast.info(`Navigating to ${prevArticle.title}`);
    } else {
      toast.info("You're at the first article already");
    }
  };

  const navigateToNextArticle = () => {
    if (currentArticleIndex < articles.length - 1) {
      const nextArticle = articles[currentArticleIndex + 1];
      navigate(nextArticle.route);
      // toast.info(`Navigating to ${nextArticle.title}`);
    } else {
      toast.info("You're at the last article already");
    }
  };

  // Find previous and next article titles
  const prevArticleTitle = currentArticleIndex > 0 ? articles[currentArticleIndex - 1]?.title : null;
  const nextArticleTitle = currentArticleIndex < articles.length - 1 ? articles[currentArticleIndex + 1]?.title : null;

  return (
    <header className="w-full max-w-7xl px-4 md:px-6 mx-auto">
      <div className="flex justify-between items-center py-3 border-y border-white/10 mb-4">
        <button 
          onClick={navigateToPreviousArticle} 
          disabled={currentArticleIndex <= 0}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:hover:bg-white/10"
        >
          <ChevronLeft className="h-5 w-5" />
          {prevArticleTitle ? prevArticleTitle : "Previous"}
        </button>
        <div className="text-white/80">
          {currentArticleIndex + 1} / {articles.length}
        </div>
        <button 
          onClick={navigateToNextArticle} 
          disabled={currentArticleIndex >= articles.length - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:hover:bg-white/10"
        >
          {nextArticleTitle ? nextArticleTitle : "Next"}
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default GlobalNavbar;