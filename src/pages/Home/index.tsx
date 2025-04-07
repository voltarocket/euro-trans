import { useRef } from "react";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Stages from "./components/Stages";
import Vehicles from "./components/Vehicles";

const HomePage: React.FC = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const vehiclesRef = useRef<HTMLDivElement>(null);
    const stagesRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Home ref={homeRef} id="#home" />
            <AboutUs ref={aboutRef} id="#about" /> 
            <Vehicles ref={vehiclesRef} id="vehicles" />
            <Stages ref={stagesRef} id="stages" />
        </>
    );
};

export default HomePage;