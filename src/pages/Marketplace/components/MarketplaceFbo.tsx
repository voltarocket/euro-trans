import one from "../../../shared/assets/images/One-w.png"
import two from "../../../shared/assets/images/Two-w.png"
import three from "../../../shared/assets/images/Three-w.png"

const MarketplaceFbo:React.FC = () => {
    return (
        <div className="pt-[42px] bg-[#07162C] pb-[52px] lg:pb-[80px] px-[20px] md:px-[40px] lg:px-[60px] -mt-[10px]">
        <div className="flex flex-col xl:max-w-[1280px] xl:mx-auto justify-center items-center text-white">
            <p className="text-[20px] md:text-[32px] lg:text-[36px] font-extrabold text-center pb-[24px] md:pb-[32px]">Почему отправка по FBO на склады других регионов выгодна?</p>
            <div className="flex flex-col md:flex-row gap-[32px]">
                <div className="flex flex-col gap-[32px] md:justify-center">
                    <div className="flex gap-[24px]">
                        <img className="h-[46px] w-[40px]" src={one} alt="" />
                            <div className="">
                                <p className="font-bold text-[18px] xl:text-[24px] mb-[8px]">Поисковая выдача</p>
                                <p className="text-[12px] xl:text-[16px]">Маркетплейс выдвигает в первые ряды те товары, которые находятся ближе. При равных условия, в поисковой выдаче, приоритет будет у продавцов, которые доставят быстрее</p>
                            </div>
                    </div>
                    <div className="flex gap-[24px]">
                        <img className="h-[46px] w-[40px]" src={two} alt="" />
                            <div className="">
                                <p className="font-bold text-[18px] xl:text-[24px] mb-[8px]">Выгода</p>
                                <p className="text-[12px] xl:text-[16px]">Мы предлагаем лучшие условия по логистике, в пересчете на единицу товара, в сравнении с логистикой маркетплейсов</p>
                            </div>
                    </div>
                    <div className="flex gap-[24px]">
                        <img className="h-[46px] w-[40px]" src={three} alt="" />
                            <div className="">
                                <p className="font-bold text-[18px] xl:text-[24px] mb-[8px]">Охват</p>
                                <p className="text-[12px] xl:text-[16px]">Возможность расширить свою аудиторию за пределы домашнего региона</p>
                            </div>
                    </div>
                </div>
                <table className="border-2 border-white text-[12px] xl:text-[16px]">
                    <thead className="bg-white text-[#07162C]">
                        <tr>
                            <th className="border-2 border-white p-2">Склады</th>
                            <th className="border-2 border-white p-2">Охват</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-2 border-white p-2">Москва, Казань</td>
                            <td className="border-2 border-white p-2">По всей России</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-white p-2">Санкт - Петербург, Краснодар</td>
                            <td className="border-2 border-white p-2">Регионы Северо-Западного, Центрального, Приволжского, Уральского, Южного, и СевероКавказского ФО и частично Сибирский ФО</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-white p-2">Екатеринбург</td>
                            <td className="border-2 border-white p-2">Урал, часть Поволжья и южных областей, Дальний Восток, кроме Магадана и Камчатки</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-white p-2">Новосибирск</td>
                            <td className="border-2 border-white p-2">Как Екатеринбург + Магадан и Камчатка</td>
                        </tr>
                        <tr>
                            <td className="border-2 border-white p-2">Хабаровск</td>
                            <td className="border-2 border-white p-2">Дальний Восток и Сибирский ФО</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        )
}
export default MarketplaceFbo