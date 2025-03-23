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
        <div className="bg-[#07162C] text-white flex flex-col items-center justify-center p-6 sm:p-[39px] h-auto sm:h-[824px] gap-4 sm:gap-[32px] rounded-[20px]">
            <p className="text-2xl sm:text-[48px] text-center">{title}</p>
            <img
                className="w-full max-w-[200px] sm:max-w-none"
                src={imageURL}
                alt={title}
            />
            <ul className="text-lg sm:text-[40px] text-center sm:text-left">
                <li>Высота: {heigth}</li>
                <li>Ширина: {width}</li>
                <li>Длина: {length}</li>
                <li>Грузоподъемность: {capacity}</li>
                <li>Объем: {volume}</li>
            </ul>
        </div>
    );
};

export default VehicleCard;