import arrow from "../../../shared/assets/icons/Arrow.svg";

interface StagesProps {
    image: string;
    description: string;
}

const StagesCard: React.FC<StagesProps> = ({ image, description }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:gap-0">
            <img
                className="relative top-9 mx-auto sm:mx-0"
                src={image}
                alt="Этап"
            />
            <div className="hidden sm:flex items-center justify-center">
                <img
                    className="relative -left-20"
                    src={arrow}
                    alt="Стрелка"
                />
            </div>
            <div className="col-span-1 sm:col-span-2 text-[40px] text-center sm:text-left">
                {description}
            </div>
        </div>
    );
};

export default StagesCard;