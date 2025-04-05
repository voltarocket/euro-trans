import calculator from "../../../shared/assets/icons/Calculator.svg"
import phone from "../../../shared/assets/icons/Phone.svg"

const Home: React.FC = () => {

    return (
        <div className="flex flex-col md:flex-row rounded-b-[10px] overflow-hidden leading-none">
            <div className="flex flex-col pt-[88px] md:pt-[120px] lg:pt-[132px] xl:pt-[184px] 2xl:pt-[206px] px-[20px] md:pl-[40px] md:pr-0 lg:pl-[60px] pb-0 md:pb-[32px] lg:pb-[64px] bg-[#E9EBEE] w-full">
                <p className="text-start text-[20px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] 3xl:text-[72px] font-extrabold mb-[8px] md:mb-[12px]">
                    Логистические перевозки по России 
                </p>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[24px] mb-[16px] lg:mb-[56px] w-full lg:max-w-[442px]">
                    Надежная доставка грузов из Иваново в любой регион страны
                </p>
                <div className="flex flex-col gap-[16px] pb-[22px] pr-[20%]">
                    <div className="">
                        <p className="text-[12px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]">Доставка точно в срок</p>
                        <p className="text-[10px]">Координируем водителей с учетом сроков, чтобы ваш груз прибыл вовремя</p>
                    </div>
                    <div className="">
                        <p className="text-[12px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]">Поддержка 24/7</p>
                        <p className="text-[10px]">Всегда на связи для консультаций и решения любых вопросов</p>
                    </div>
                    <div className="">
                        <p className="text-[12px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]">Без комиссий за простой </p>
                        <p className="text-[10px]">Никаких дополнительных платежей за ожидание выгрузки на складе</p>
                    </div>
                </div>
                <div className="flex gap-[16px] w-full pb-[224px]  md:pb-[8px]">
                    <a
                        className="flex justify-center items-center gap-[8px] bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[8.5px] md:py-[23px] px-[16px] rounded-[10px]"
                    >
                        <span className="text-[12px] md:text-[16px] lg:text-[36px]">Заказать</span>
                        <img src={calculator} alt="" />
                    </a>
                    <a
                        className="flex justify-center items-center gap-[8px] bg-white hover:bg-[#506fa1] active:bg-white border-1 border-[#28282B] active:text-[#344E74] text-[#28282B] py-[8.5px] md:py-[23px] px-[16px] rounded-[10px]"
                    >
                        <span className="text-[12px] md:text-[16px] lg:text-[36px]">Звонок логисту</span>
                        <img src={phone} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;