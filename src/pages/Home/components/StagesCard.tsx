import arrow from "../../../shared/assets/icons/Arrow.svg"

interface StagesProps {
    image: string;
    description: string;
}

const StagesCard:React.FC<StagesProps> = ({image, description}) => {
return (
        <div className="grid grid-cols-2 grid-rows-2">
            <img className="relative top-9" src={image} />
            <div className="self-center"><img className="relative -left-20" src={arrow} /></div>
            <div className="col-span-2 text-[40px]">{description}</div>
        </div>
    )
}
export default StagesCard;