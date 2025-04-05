const Home: React.FC = () => {

    return (
        <div className="flex flex-col md:flex-row rounded-b-[10px] overflow-hidden">
            <div className="flex flex-col pt-[88px] md:pt-[120px] lg:pt-[132px] xl:pt-[184px] 2xl:pt-[206px] px-[20px] md:pl-[40px] md:pr-0 lg:pl-[60px] pb-0 md:pb-[32px] lg:pb-[64px] bg-[#E9EBEE] w-full">
                <p className="text-start text-[22px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] 3xl:text-[72px] font-extrabold mb-[8px] md:mb-[12px]">
                    Логистическое сопровождение на маркетплейсы 
                </p>
                <div className="flex flex-col gap-[32px] pb-[72px]">
                    <div className="">
                        <p className="text-[36px] font-medium relative before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:bg-black before:rounded-full">Доставка точно в срок</p>
                        <p className="text-[24px]">Координируем водителей с учетом сроков, чтобы ваш груз прибыл вовремя</p>
                    </div>
                    <div className="">
                        <p className="text-[36px] font-medium relative before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:bg-black before:rounded-full">Поддержка 24/7</p>
                        <p className="text-[24px]">Всегда на связи для консультаций и решения любых вопросов</p>
                    </div>
                    <div className="">
                        <p className="text-[36px] font-medium relative before:content-[''] before:absolute before:left-[-20px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-2 before:h-2 before:bg-black before:rounded-full">Без комиссий за простой </p>
                        <p className="text-[24px]">Никаких дополнительных платежей за ожидание выгрузки на складе</p>
                    </div>
                </div>
                <div className="flex gap-[24px] w-full  md:pb-[8px]">
                    <a
                        className="flex justify-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[12px] md:py-[23px] px-[40px] rounded-[20px]"
                    >
                        <span className="text-[11px] md:text-[16px] lg:text-[36px]">Рассчитать</span>
                    </a>
                    <a
                        className="flex justify-center bg-white hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-[#344E74] py-[12px] md:py-[23px] px-[40px] rounded-[20px]"
                    >
                        <span className="text-[11px] md:text-[16px] lg:text-[36px]">Звонок логисту</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;