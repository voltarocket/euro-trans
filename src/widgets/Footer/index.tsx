import logo from "../../shared/assets/images/EuroTransLogo.png";

const Footer: React.FC = () => {
    return (
        <div className="pt-6 lg:pt-[32px] bg-[#E9EBEE] rounded-t-[20px] 
                       border-t-[3px] border-[#07162C] text-lg 
                       pb-[132px]
                       px-[20px] md:px-[40px] lg:px-[60px] xl:px-0">
            <div className="xl:max-w-[1280px] xl:mx-auto">
                <div className="flex flex-col items-center
                              justify-center gap-4">
                    <div className="min-w-[30%]"></div>
                    <img 
                        className="h-[38px] w-[40px] md:h-[46px] md:w-[50px] xl:h-[66px] xl:w-[70px]" 
                        src={logo} 
                        alt="Логотип" 
                    />
                    <div className="flex flex-col items-center 
                                  text-center lg:text-left">
                        <p className="hidden md:flex mb-4 lg:mb-[16px] text-[32px] 
                                    lg:text-[36px] xl:text-[36px] text-[#07162C] 
                                    font-bold">
                            Контакты
                        </p>
                        <p className="text-[10px] md:text-[15px] xl:text-[20px] 
                                     mb-2 lg:mb-[16px]">
                            <strong>Тел: </strong> 
                            <a className="pointer decoration-[#07162C] decoration-3 
                                       hover:underline underline-offset-3" 
                               href="tel:+79203797490">
                                +7 (920) 379-74-90
                            </a>
                        </p>
                        <p className="text-[10px] md:text-[15px] xl:text-[20px]">
                            <strong>Офис компании: </strong> 
                            г. Иваново ул. Большая Воробьевская д.4
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;