import { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import { ScrollToTopButton } from "../shared/components/ScrollToTopButton";
import { useSystemFavicon } from "../shared/lib/hooks/useSystemFavicon";


const HomePage = lazy(() => import("../pages/Home"));
const MarketPlacePage = lazy(() => import("../pages/Marketplace"));
const CargoPage = lazy(() => import("../pages/Cargo"));

const BlurredLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="absolute inset-0 backdrop-blur-lg bg-[#E9EBEE]" />
    <div className="relative flex flex-col items-center gap-4 text-[#07162C]">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-l-transparent border-t-transparent border-[#07162C]" />
      <p className="font-semibold tracking-wide animate-pulse">
        Подгружаем контент...
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  useSystemFavicon()
  
  return (
    <Suspense fallback={<BlurredLoader />}>
        <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cargo" element={<CargoPage/>}/>
          <Route path="/marketplace" element={<MarketPlacePage/>}/>
        </Routes>
         <footer id="contacts">
           <Footer />
         </footer>
         <ScrollToTopButton />
      </Router>
    </Suspense>
  )
}
export default App;