import arrow from "../../../shared/assets/icons/Arrow.svg";

interface StagesProps {
    image: string;
    description: string;
    isLast?: boolean; // Добавляем новый пропс
}

const StagesCard: React.FC<StagesProps> = ({ image, description, isLast = false }) => {
    return (
        <div className="sm:flex sm:items-center md:grid md:grid-cols-2 md:grid-rows-2 w-full min-w-[258px] md:min-w-[174px]">
            <div className="flex items-center sm:hidden">
                <img
                    className="mr-4 w-[40px]"
                    src={image}
                    alt="Этап"
                />
                <div className="text-[10px] flex-1">
                    {description}
                </div>
            </div>
            <img
                className="hidden md:block md:w-[50px] xl:w-[80px] mx-auto sm:mx-0"
                src={image}
                alt="Этап"
            />
            {!isLast && (
                <div className="hidden sm:flex items-center justify-center">
                    <img
                        className="w-[100px] xl:w-[156px]"
                        src={arrow}
                        alt="Стрелка"
                    />
                </div>
            )}
            <div className="hidden sm:block col-span-1 sm:col-span-2 text-[10px] md:text-[15px] xl:text-[24px] 2xl:text-[32px] self-start text-left justify-self-start">
                {description}
            </div>
        </div>
    );
};

export default StagesCard;