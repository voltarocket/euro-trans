import MarketplaceForm from "./components/MarketplaceForm";
import MarketplaceHome from "./components/MarketplaceHome";
import MarketplaceFbo from "./components/MarketplaceFbo";
import MarketplaceItem from "./components/MarketplaceItem";

const MarketPlacePage: React.FC = () => {
    return (
            <>
                <section id="home">
                    <MarketplaceHome />
                </section>
                <MarketplaceFbo />
                <MarketplaceItem />
                <section id="form">
                    <MarketplaceForm />
                </section>
            </>
        )
}
export default MarketPlacePage;
