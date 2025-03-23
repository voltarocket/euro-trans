interface CardProps {
        title: string;
        description: string;
        imageURL: string;
}

const AboutCard:React.FC<CardProps> = ({title, description, imageURL}) => {
    return (
            <div className="bg-[#344E74] hover:scale-110 transition-all p-[29px] rounded-[20px] flex flex-col items-center justify-center gap-[20px]">
                <img src={imageURL} alt={title} />
                <p className="text-[36px]">{title}</p>
                <p className="text-[24px] w-[386px]">{description}</p>
            </div>
        )
}
export default AboutCard;