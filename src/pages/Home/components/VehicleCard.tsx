interface VehicleCardProps {
    title: string;
    imageURL: string;
    heigth: string;
    width: string;
    length: string;
    capacity: string;
    volume: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
    title,
    imageURL,
    heigth,
    width,
    length,
    capacity,
    volume,
}) => {
    return (
        <div className="bg-[#07162C] text-white flex flex-col items-center p-6 rounded-[20px] w-full max-w-[320px] h-[500px] lg:h-[374px]">
            <div className="h-[60px] flex items-center justify-center w-full">
                <p className="text-[20px] md:text-[24px] xl:text-[28px] font-extrabold text-center line-clamp-2">
                    {title}
                </p>
            </div>
            
            <div className="w-full h-[200px] flex items-center justify-center my-2">
                <img
                    className="w-full h-full object-contain max-w-full max-h-full"
                    src={imageURL}
                    alt={title}
                />
            </div>
            
            <div className="flex justify-center w-full h-[180px] overflow-y-auto mt-2 pl-5">
                <ul className="text-[14px] md:text-[16px] xl:text-[18px] space-y-2 list-none">
                    <li className="relative before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full">
                        Высота: {heigth}
                    </li>
                    <li className="relative before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full">
                        Ширина: {width}
                    </li>
                    <li className="relative before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full">
                        Длина: {length}
                    </li>
                    <li className="relative before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full">
                        Грузоподъемность: {capacity}
                    </li>
                    <li className="relative before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:bg-white before:rounded-full">
                        Объем: {volume}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default VehicleCard;