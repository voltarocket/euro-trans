import wildberries from "../../../shared/assets/images/Wildberries.png"
import ozon from "../../../shared/assets/images/Ozon.png"
import yandexmarket from "../../../shared/assets/images/YandexMarket.png"

const MarketplaceItem:React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-[#E9EBEE] rounded-[20px] py-[32px] px-[20px] md:px-[41px] lg:px-[60px] -mt-[20px] relative">
             <p className="text-[20px] md:text-[32px] lg:text-[36px] font-extrabold text-center mb-[8px]">С какими маркетплейсами мы работаем</p>
             <p className="text-[14px] md:text-[22px] lg:text-[26px] text-center mb-[31px]">Работаем по схеме FBO</p>
            <div className="flex flex-col md:flex-row gap-[28px] md:gap-[32px] lg:gap-[48px] justify-center items-center">
             <img
                className="hover:scale-110 transition-all transform-gpu h-[60px] lg:h-[70px]" 
                src={wildberries}
                alt=""
             />
             <img
                className="hover:scale-110 transition-all transform-gpu h-[60px] lg:h-[70px]"
                src={ozon} 
                alt="" 
             />
             <img 
                className="hover:scale-110 transition-all transform-gpu h-[48px] lg:h-[70px]"
                src={yandexmarket} 
                alt="" 
             />
         </div>
</div>
        )
}
export default MarketplaceItem