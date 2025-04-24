import { useState, useEffect } from 'react';
import calculator from "../../../shared/assets/icons/Calculator.svg";
import phone from "../../../shared/assets/icons/Phone.svg";
import marketplaceBgMobile from "../../../shared/assets/images/MarketplaceBgMobile.png";
import marketplaceBgMD from "../../../shared/assets/images/MarketplaceBgMd.png";
import marketplaceBgLG from "../../../shared/assets/images/MarketplaceBgLg.png";
import marketplaceBgXL from "../../../shared/assets/images/MarketplaceBgXl.png";
import marketplaceBgDefault from "../../../shared/assets/images/MarketplaceBgDefault.png";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const MarketplaceHome: React.FC = () => {
  const { width } = useWindowSize();
  
  const getBackgroundImage = () => {
    switch(true) {
      case width < 768:
        return marketplaceBgMobile;
      case width < 1024:
        return marketplaceBgMD;
      case width < 1280:
        return marketplaceBgLG;
      case width < 1538:
        return marketplaceBgXL;
      default:
        return marketplaceBgDefault;
    }
  };

  const getBackgroundPosition = () => {
    switch(true) {
      case width < 768:
        return "25% 75%";
      case width < 1024:
        return "right";
      case width < 1280:
        return "35% 65%";
      case width < 1538:
        return "40% 60%";
      default:
        return "50% 50%";
    }
  };

  const getMinHeight = () => {
    switch(true) {
        case width < 768:
            return "85vh";
          case width < 1024:
            return "50vh";
          case width < 1280:
            return "60vh";
          case width < 1538:
            return "60vh";
          default:
            return "60vh";
    }
}

  return (
    <div
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: "cover",
        backgroundPosition: getBackgroundPosition(),
        backgroundRepeat: "no-repeat",
        minHeight: getMinHeight(),
      }}
      className="flex flex-col md:flex-row overflow-hidden leading-none"
    >
      <div className="flex flex-col pt-[88px] md:pt-[120px] lg:pt-[132px] xl:pt-[184px] 2xl:pt-[206px] px-[20px] md:pl-[40px] md:pr-0 lg:pl-[60px] pb-0 md:pb-[52px] lg:pb-[46px] xl:pb-[62px] w-full">
        <p className="text-start text-[20px] sm:text-[30px] md:text-[32px] lg:text-[36px] 2xl:text-[48px] 3xl:text-[72px] font-extrabold mb-[32px] md:mb-[24px]">
          Логистическое сопровождение на маркетплейсы 
        </p>
        
        <div className="flex flex-col gap-[16px] pb-[22px] xl:pb-[32px] pr-[20%]">
          {[
            {
              title: "Доставка точно в срок",
              text: "Координируем водителей, чтобы ваш груз прибыл вовремя"
            },
            {
              title: "Поддержка 24/7",
              text: "Всегда на связи для консультаций и решения любых вопросов"
            },
            {
              title: "Без комиссий за простой",
              text: "Никаких дополнительных платежей за ожидание выгрузки на складе"
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-[8px]">
              <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]">
                {item.title}
              </p>
              <p className="text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-[14px] w-full">
          <a
            href="#calculator"
            className="flex justify-center items-center gap-[8px] bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[8px] md:py-[10.5px] lg:py-[18px] px-[14px] lg:px-[30px] rounded-[10px] lg:rounded-[20px] transition-colors duration-200"
          >
            <span className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
              Рассчитать
            </span>
            <img 
              src={calculator} 
              alt="Калькулятор стоимости" 
              className="w-4 h-4 md:w-6 md:h-6"
            />
          </a>
          
          <a
            href="#contact"
            className="flex justify-center items-center gap-[8px] bg-[#E9EBEE66] hover:bg-[#506fa1] active:bg-white border-[1px] md:border-[2px] border-[#28282B] active:text-[#344E74] text-[#28282B] py-[8px] md:py-[10.5px] lg:py-[18px] px-[14px] lg:px-[30px] rounded-[10px] lg:rounded-[20px] transition-colors duration-200"
          >
            <span className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]">
              Звонок логисту
            </span>
            <img 
              src={phone} 
              alt="Контактный телефон" 
              className="w-4 h-4 md:w-6 md:h-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHome;