const MarketplaceForm: React.FC = () => {
    return (
        <div className="pt-[42px] lg:pt-[64px] pb-[74px] lg:pb-[143px] bg-[#07162C] px-[20px] lg:px-[60px] -mt-[20px] -mb-[20px]">
            <div className="flex flex-col justify-center items-center text-white">
                <p className="text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center pb-[16px] md:pb-[32px] lg:pb-[64px]">
                Рассчет и оформление перевозки
                </p>
                <form className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-[78px 58px 58px 58px 58px 58px 58px] gap-x-[10px] md:gap-x-[20px] gap-y-[14px]">
                        <div className="flex flex-col col-span-2">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Откуда</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                                type="text"
                                value="Иваново"
                                disabled
                            />
                            <p className="text-[10px] md:text-[14px] mt-[8px]">
                                *Забор груза по г.Иваново - <strong>бесплатно</strong>
                            </p>
                        </div>
                        <div className="flex flex-col col-span-2">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Куда</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col col-span-2 md:col-span-1">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Кол-во паллет</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col col-span-2 ">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Имя</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] border-b md:text-[16px] border-gray-200"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col col-span-2 md:col-span-3">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Телефон</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] border-b md:text-[16px] border-gray-200"
                                type="text"
                            />
                        </div>
                        <button className="flex justify-center items-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white md:font-bold text-[14px] md:text-[20px] xl:text-[36px] h-[37px] md:h-[54px] xl:h-[84px] col-span-2 md:col-span-5 rounded-[10px] lg:rounded-[20px] transition-colors mt-[18px]">Заказать</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MarketplaceForm;