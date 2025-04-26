import CargoCards from "./components/CargoCards";
import CargoForm from "./components/CargoForm";
import CargoText from "./components/CargoText";
import CargoHome from "./components/CargoHome";

const CargoPage: React.FC = () => {
    return (
            <>
                <section id="home">
                 <CargoHome />
                </section>
                <CargoText />
                <CargoCards />
                <section id="form">
                    <CargoForm />
                </section>
            </>
        )
}
export default CargoPage;
