import { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalNavbar from "./components/GlobalNavbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import AcceptingCriticism from "./pages/AcceptingCriticism";
import ActiveListening from "./pages/ActiveListening";
import ArtOfQuestioning from "./pages/ArtOfQuestioning";
import EffortWithAPlan from "./pages/EffortWithAPlan";
import ExpressingHonestPraise from "./pages/ExpressingHonestPraise";
import ExpressingThroughActions from "./pages/ExpressingThroughActions";
import IssuingInvitations from "./pages/IssuingInvitations";
import LettingOthersKnowYou from "./pages/LettingOthersKnowYou";
import ReducingSocialAnxiety from "./pages/ReducingSocialAnxiety";
import RefusingManipulation from "./pages/RefusingManipulation";
import RequestingChange from "./pages/RequestingChange";
import StartingAConversation from "./pages/StartingAConversation";
import UtilizingFreeInformation from "./pages/UtilizingFreeInformation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
              
              {/* <Route path="/:pageSlug" element={<DynamicPageLoader />} /> */}
              <Route path="/accepting-criticism" element={<AcceptingCriticism />} />
              <Route path="/active-listening" element={<ActiveListening />} />
              <Route path="/art-of-questioning" element={<ArtOfQuestioning />} />
              <Route path="/effort-with-a-plan" element={<EffortWithAPlan />} />
              <Route path="/expressing-honest-praise" element={<ExpressingHonestPraise />} />
              <Route path="/expressing-through-actions" element={<ExpressingThroughActions />} />
              <Route path="/issuing-invitations" element={<IssuingInvitations />} />
              <Route path="/letting-others-know-you" element={<LettingOthersKnowYou />} />
              <Route path="/reducing-social-anxiety" element={<ReducingSocialAnxiety />} />
              <Route path="/refusing-manipulation" element={<RefusingManipulation />} />
              <Route path="/requesting-change" element={<RequestingChange />} />
              <Route path="/starting-a-conversation" element={<StartingAConversation />} />
              <Route path="/utilizing-free-information" element={<UtilizingFreeInformation />} />

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