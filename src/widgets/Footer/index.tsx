import logo from "../../shared/assets/images/EuroTransLogo.png";

const Footer: React.FC = () => {
    return (
        <div className="lg:pr-[31px] lg:pl-[460px] xl:pl-[595px] pt-6 lg:pt-[32px] bg-[#E9EBEE] rounded-t-[20px] border-t-[3px] border-[#07162C] text-lg lg:text-[32px] pb-[100px] lg:pb-[87px]">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-4 lg:gap-[70px] pr-0 lg:pr-[72px]">
                <img 
                    className="h-[38px] w-[40px] md:h-[56px] md:w-[60px] lg:h-[66px] lg:w-[70px] xl:h-[84px] xl:w-[90px] lg:pt-2" 
                    src={logo} 
                    alt="Логотип" 
                />
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <p className="hidden md:flex mb-4 lg:mb-[16px] text-[40px] lg:text-[24px] xl:text-[48px] text-[#28282B] font-bold">Контакты</p>
                    <p className="text-[10px] md:text-[15px] xl:text-[24px] 2xl:text-[32px] mb-2 lg:mb-[16px]"><strong>Тел:</strong> <a href="">+7 920 370-74-90</a>, Максим</p>
                    <p className="text-[10px] md:text-[15px] xl:text-[24px] 2xl:text-[32px]"><strong>Офис компании:</strong> г. Иваново ул. Большая Воробьевская д.4</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;