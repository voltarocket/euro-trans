import CargoCards from "./components/CargoCards";
import CargoForm from "./components/CargoForm";
import CargoText from "./components/CargoText";
import CargoHome from "./components/CargoHome";

const CargoPage: React.FC = () => {
    return (
            <>
                <CargoHome />
                <CargoText />
                <CargoCards />
                <CargoForm />
            </>
        )
}
export default CargoPage;
