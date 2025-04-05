import CargoCards from "./components/CargoCards";
import CargoForm from "./components/CargoForm";
import CargoText from "./components/CargoText";
import Home from "./components/Home";

const CargoPage: React.FC = () => {
    return (
            <>
                <Home />
                <CargoText />
                <CargoCards />
                <CargoForm />
            </>
        )
}
export default CargoPage;
