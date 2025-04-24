import { lazy, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import { useSystemFavicon } from "../shared/lib/hooks/useSystemFavicon";

const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerHeight = document.querySelector('header')?.clientHeight || 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 0);
    }
  }, [location]);

  return null;
};

const HomePage = lazy(() => import("../pages/Home"));
const MarketPlacePage = lazy(() => import("../pages/Marketplace"));
const CargoPage = lazy(() => import("../pages/Cargo"));

const App: React.FC = () => {
  useSystemFavicon()
  
  return (
    <Router>
      <ScrollToAnchor />
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cargo" element={<CargoPage/>}/>
        <Route path="/marketplace" element={<MarketPlacePage/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;