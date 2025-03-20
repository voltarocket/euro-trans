import { BrowserRouter as Router, Routes, Route  } from "react-router"
import HomePage from "../pages/HomePage";
import MarketPlacePage from "../pages/MarketPlacePage";
import CargoPage from "../pages/CargoPage";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer"

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