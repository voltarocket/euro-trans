import MarketplaceForm from "./components/MarketplaceForm";
import MarketplaceHome from "./components/MarketplaceHome";
import MarketplaceFbo from "./components/MarketplaceFbo";
import MarketplaceItem from "./components/MarketplaceItem";

const MarketPlacePage: React.FC = () => {
    return (
            <>
                <MarketplaceHome />
                <MarketplaceFbo />
                <MarketplaceItem />
                <MarketplaceForm />
            </>
        )
}
export default MarketPlacePage;
