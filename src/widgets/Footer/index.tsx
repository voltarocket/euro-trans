import logo from "../../shared/assets/images/EuroTransLogo.png";

const Footer: React.FC = () => {
    return (
        <div className="pt-6 lg:pt-[32px] bg-[#E9EBEE] rounded-t-[20px] 
                       border-t-[3px] border-[#07162C] text-lg lg:text-[32px] 
                       pb-[100px] lg:pb-[87px]
                       px-[20px] md:px-[40px] lg:px-[60px] xl:px-0">
            <div className="xl:max-w-[1280px] xl:mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:items-start 
                              justify-center lg:justify-end xl:justify-end gap-4 lg:gap-[70px] xl:gap-[75px]">
                    <div className="min-w-[30%]"></div>
                    <img 
                        className="h-[38px] w-[40px] md:h-[56px] md:w-[60px] 
                                 lg:h-[66px] lg:w-[70px] lg:pt-2" 
                        src={logo} 
                        alt="Логотип" 
                    />
                    <div className="flex flex-col items-center lg:items-start 
                                  text-center lg:text-left">
                        <p className="hidden md:flex mb-4 lg:mb-[16px] text-[40px] 
                                    lg:text-[24px] xl:text-[36px] text-[#07162C] 
                                    font-bold">
                            Контакты
                        </p>
                        <p className="text-[10px] md:text-[15px] xl:text-[20px] 
                                    2xl:text-[32px] mb-2 lg:mb-[16px]">
                            <strong>Тел: </strong> 
                            <a className="pointer decoration-[#07162C] decoration-3 
                                       hover:underline underline-offset-3" 
                               href="">
                                +7 920 370-74-90
                            </a>, Максим
                        </p>
                        <p className="text-[10px] md:text-[15px] xl:text-[20px] 
                                    2xl:text-[32px]">
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