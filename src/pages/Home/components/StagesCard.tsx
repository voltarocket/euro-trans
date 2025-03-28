import arrow from "../../../shared/assets/icons/Arrow.svg";

interface StagesProps {
    image: string;
    description: string;
}

const StagesCard: React.FC<StagesProps> = ({ image, description }) => {
    return (
        <div className="sm:flex sm:items-center md:grid md:grid-cols-2 md:grid-rows-2 w-full min-w-[258px] md:min-w-[174px]">
            <div className="flex items-center sm:hidden">
                <img
                    className="mr-4"
                    src={image}
                    alt="Этап"
                />
                <div className="text-[10px] flex-1">
                    {description}
                </div>
            </div>
            <img
                className="hidden md:block md:h-[59px] mx-auto sm:mx-0"
                src={image}
                alt="Этап"
            />
            <div className="hidden sm:flex items-center justify-center">
                <img
                    className="w-[100px]"
                    src={arrow}
                    alt="Стрелка"
                />
            </div>
            <div className="hidden sm:block col-span-1 sm:col-span-2 text-[10px] md:text-[15px] xl:text-[24px] 2xl:text-[32px] text-left justify-self-start">
                {description}
            </div>
        </div>
    );
};

export default StagesCard;