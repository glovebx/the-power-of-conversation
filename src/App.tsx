import { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalNavbar from "./components/GlobalNavbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import type { LazyModuleMap } from './DynamicPageLoader';
import DynamicPageLoader from "./DynamicPageLoader";

const queryClient = new QueryClient();

// --- Define lazyComponentModules using import.meta.glob ---
// This object is created by Vite's import.meta.glob feature during the build.
// It maps file paths to functions that return promises to import the modules.
const lazyComponentModules: LazyModuleMap = import.meta.glob(['./pages/*.tsx', '!**/Index.tsx', '!**/NotFound.tsx']) as LazyModuleMap; // Assert type

// --- End of Type Definitions ---

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <div className="min-h-screen bg-bento-bg">
          <GlobalNavbar />
          <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />

              <Route path="/:pageSlug" element={<DynamicPageLoader lazyModules={lazyComponentModules} />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>            
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;