interface CardProps {
    title: string;
    description: string;
    imageURL: string;
}

const AboutCard: React.FC<CardProps> = ({ title, description, imageURL }) => {
    return (
        <div className="bg-[#344E74] hover:scale-110 transition-all p-[29px] rounded-[20px] flex flex-col items-center justify-center gap-[20px] w-full sm:w-auto">
            <img
                className="w-[100px] h-[100px]" 
                src={imageURL}
                alt={title}
            />
            <p className="text-[36px] text-center">{title}</p>
            <p className="text-[24px] w-full sm:w-[386px] text-center">
                {description}
            </p>
        </div>
    );
};

export default AboutCard;