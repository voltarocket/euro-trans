import { BrowserRouter as Router, Routes, Route  } from "react-router"
import HomePage from "../pages/HomePage";
import MarketPlacePage from "../pages/MarketPlacePage";
import CargoPage from "../pages/CargoPage";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cargo" element={<CargoPage/>}/>
          <Route path="/marketplace" element={<MarketPlacePage/>}/>
        </Routes>
      </Router>
    )
}
export default App;