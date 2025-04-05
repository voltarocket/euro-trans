interface CardProps {
    title: string;
    description: string;
    imageURL: string;
}

const AboutCard: React.FC<CardProps> = ({ title, description, imageURL }) => {
    return (
        <div className="bg-[#344E74] hover:scale-110 transition-all py-[12px] xl:py-[32px] px-[32px] rounded-[20px] flex flex-col items-center justify-center gap-[3.71px] xl:gap-[16px] w-full sm:w-auto">
            <img
                className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[50px] xl:h-[50px]" 
                src={imageURL}
                alt={title}
            />
            <p className="text-[14px] md:text-[16px] xl:text-[24px] text-center font-bold ">{title}</p>
            <p className="text-[10px] md:text-[12px] xl:text-[16px] w-full text-center">
                {description}
            </p>
        </div>
    );
};

export default AboutCard;