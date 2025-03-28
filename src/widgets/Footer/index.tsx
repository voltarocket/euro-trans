import logo from "../../shared/assets/images/EuroTransLogo.png";

const Footer: React.FC = () => {
    return (
        <div className="px-4 lg:px-[150px] pt-10 lg:pt-[104px] bg-[#E9EBEE] rounded-t-[20px] border-t-[3px] border-l-[3px] border-r-[3px] border-[#344E74] text-lg lg:text-[32px] pb-[100px]">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-8 lg:gap-[212px]">
                <img 
                    className="h-[38px] w-[40.49px] md:h-[56px] md:w-[60px] xl:h-[64.84px] xl:w-[69.09px]" 
                    src={logo} 
                    alt="Логотип" 
                />
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <p className="hidden md:flex mb-4 lg:mb-[35px] text-[40px] lg:text-[70px] text-[#28282B] font-bold">Контакты</p>
                    <p className="text-[10px] md:text-[15px] xl:text-[24px] 2xl:text-[32px] mb-2 lg:mb-[25px]"><strong>Тел:</strong> +7 920 370-74-90, Максим</p>
                    <p className="text-[10px] md:text-[15px] xl:text-[24px] 2xl:text-[32px]"><strong>Офис компании:</strong> г. Иваново ул. Большая Воробьевская д.4</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;