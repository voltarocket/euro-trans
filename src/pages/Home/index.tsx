
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Stages from "./components/Stages";
import Vehicles from "./components/Vehicles";

const HomePage: React.FC = () => {
    return (
        <>
            <Home />
            <AboutUs />
            <Vehicles />
            <Stages />
        </>
     )
}
export default HomePage;
