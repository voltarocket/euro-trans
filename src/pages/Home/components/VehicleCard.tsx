interface VehicleCardProps {
    title: string;
    imageURL: string;
    heigth: string;
    width: string;
    length: string;
    capacity: string;
    volume: string;


}

const VehicleCard:React.FC<VehicleCardProps> = ({title, imageURL, heigth, width, length, capacity, volume}) => {
    return (
        <div className="bg-[#07162C] text-white flex flex-col items-center justify-center p-[39px] h-[824px] gap-[32px] rounded-[20px]">
            <p className="text-[48px]">{title}</p>
            <img src={imageURL} alt={title} />
            <ul className="text-[40px]">
                <li>Высота: {heigth}</li>
                <li>Ширина: {width}</li>
                <li>Длина: {length}</li>
                <li>Грузоподъемность: {capacity}</li>
                <li>Объем: {volume}</li>
            </ul>
        </div>
        )
}
export default VehicleCard;