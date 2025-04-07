import calculator from "../../../shared/assets/icons/Calculator.svg"
import phone from "../../../shared/assets/icons/Phone.svg"


const MarketplaceHome: React.FC = () => {

    return (
        <div className="flex flex-col md:flex-row rounded-b-[10px] overflow-hidden leading-none">
            <div className="flex flex-col pt-[88px] md:pt-[120px] lg:pt-[132px] xl:pt-[184px] 2xl:pt-[206px] px-[20px] md:pl-[40px] md:pr-0 lg:pl-[60px] pb-0 md:pb-[52px] lg:pb-[46px] xl:pb-[62px] bg-[#E9EBEE] w-full">
                <p className="text-start text-[20px] sm:text-[30px] md:text-[32px] lg:text-[36px] 2xl:text-[48px] 3xl:text-[72px] font-extrabold mb-[8px] md:mb-[12px]">
                Логистическое сопровождение на маркетплейсы 
                </p>
                <div className="flex flex-col gap-[16px] pb-[22px] xl:pb-[32px] pr-[20%]">
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]">Доставка точно в срок</p>
                        <p className="text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]">Координируем водителей с учетом сроков, чтобы ваш груз прибыл вовремя</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]">Поддержка 24/7</p>
                        <p className="text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]">Всегда на связи для консультаций и решения любых вопросов</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]">Без комиссий за простой </p>
                        <p className="text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]">Никаких дополнительных платежей за ожидание выгрузки на складе</p>
                    </div>
                </div>
                <div className="flex gap-[16px] w-full pb-[224px] md:pb-0">
                    <a
                        className="flex justify-center items-center gap-[8px] bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[8.5px] md:py-[10.5px] lg:py-[18px] px-[16px] lg:px-[30px] rounded-[10px] lg:rounded-[20px]"
                    >
                        <span className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]">Рассчитать</span>
                        <img src={calculator} alt="" />
                    </a>
                    <a
                        className="flex justify-center items-center gap-[8px] bg-white hover:bg-[#506fa1] active:bg-white border-[1px] md:border-[2px] border-[#28282B] active:text-[#344E74] text-[#28282B] py-[8.5px] md:py-[10.5px] lg:py-[18px] px-[16px] lg:px-[30px] rounded-[10px] lg:rounded-[20px]"
                    >
                        <span className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]">Звонок логисту</span>
                        <img src={phone} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MarketplaceHome;