import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router"
import Header from "../widgets/Header";
import Footer from "../widgets/Footer"

const HomePage = lazy(() => 
import ("../pages/Home"));
const MarketPlacePage = lazy(() =>
import ("../pages/Marketplace"));
const CargoPage = lazy(() =>
import ("../pages/Cargo"));

const App: React.FC = () => {
  return (
      <Router basename="/euro-trans">
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