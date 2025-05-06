const CargoText: React.FC = () => {
    return (
        <div className="pt-[42px] bg-[#07162C] pb-[52px] md:pb-[62px] lg:pb-[80px] px-[20px] md:px-[40px] lg:px-[60px] -mt-[10px]">
            <div className="flex flex-col xl:max-w-[1280px] xl:mx-auto justify-center items-center text-white">
                <p className="text-[20px] md:text-[32px] lg:text-[36px] font-extrabold text-center pb-[16px] md:pb-[24px]">Логистические услуги "под ключ"</p>
                <p className="text-[12px] md:text-[16px] xl:text-[20px] text-justify">
                Наша компания организует доставку грузов по всему миру: РФ, СНГ, Китай, Турция и другие направления. Мы возьмем на себя всё - от оформления документов и таможенного сопровождения до страхования и контроля отгрузки и выгрузки на каждом этапе.
                </p>
            </div>
        </div>
    );
};

export default CargoText;