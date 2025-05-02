import React, { useState, useEffect, useMemo } from "react";
import { NavHashLink } from "react-router-hash-link";
import truckimage2xl from "../../../shared/assets/images/TruckImage2Xl.png";
import truckimagexl from "../../../shared/assets/images/TruckImageXl.png";
import truckimagelg from "../../../shared/assets/images/TruckImageLg.png";
import truckimagemd from "../../../shared/assets/images/TruckImageMd.png";
import truckimagesm from "../../../shared/assets/images/TruckImageSm.png";

const useWindowSize = () => {
  const isClient = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 1024,
    height: isClient ? window.innerHeight : 768,
  });

  useEffect(() => {
    if (!isClient) return;
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return windowSize;
};

const Home: React.FC = () => {
  const { width } = useWindowSize();

  const { image, widthClass } = useMemo(() => {
    if (width < 768) return { image: truckimagesm, widthClass: "w-full" };
    if (width < 1024) return { image: truckimagemd, widthClass: "md:w-[60%]" };
    if (width < 1280) return { image: truckimagelg, widthClass: "lg:w-[65%]" };
    if (width < 1536) return { image: truckimagexl, widthClass: "xl:w-[60%]" };
    return { image: truckimage2xl, widthClass: "2xl:w-[60%]" };
  }, [width]);

  return (
    <div className="flex flex-col md:flex-row rounded-b-[10px] overflow-hidden leading-none">
      <div className="flex flex-col pt-[88px] md:pt-[120px] lg:pt-[132px] xl:pt-[164px] 
                      px-[20px] md:pl-[40px] md:pr-0 lg:pl-[60px] pb-0 md:pb-[32px] lg:pb-[64px] 
                      bg-[#E9EBEE] w-full md:w-1/2 
                      xl:pl-[calc((100%-1280px)/2+70px)] 
                      2xl:pl-[calc((100%-1536px)/2+130px)]">
        <div className="xl:max-w-[1280px] 2xl:max-w-[1536px]">
          <p className="text-start text-[22px] sm:text-[30px] md:text-[32px] lg:text-[36px] 
                      xl:text-[36px] font-extrabold mb-[12px] xl:mb-[16px] 
                       xl:max-w-[600px]">
            Надежные логистические решения для вашего бизнеса
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[18px] xl:text-[16px] 
                       mb-[24px] lg:mb-[32px] xl:mb-[48px] 
                      w-full lg:max-w-[442px] xl:max-w-fit">
            Доставка грузов на склады маркетплейсов и организация логистических перевозок по РФ
          </p>
          <div className="flex flex-col gap-[8px] xl:gap-[12px] w-full lg:max-w-[370px] 
                         xl:max-w-[464px] md:pb-[8px]">
            <NavHashLink
              smooth
              to="/cargo#home"
              className="flex justify-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white 
                        border border-[#344E74] hover:border-[#506fa1] active:text-[#344E74] 
                        text-white py-[12px] md:py-[20px] xl:py-[24px] 
                        rounded-[10px] xl:rounded-[20px]"
            >
              <span className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] 
                              xl:font-bold">
                Логистические услуги по РФ
              </span>
            </NavHashLink>
            <NavHashLink
              smooth
              to="/marketplace#home"
              className="flex justify-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white 
                        border border-[#344E74] hover:border-[#506fa1] active:text-[#344E74] 
                        text-white py-[12px] md:py-[20px] xl:py-[24px] 
                        rounded-[10px] xl:rounded-[20px]"
            >
              <span className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] 
                              xl:font-bold">
                Доставка груза на маркетплейсы
              </span>
            </NavHashLink>
          </div>
          <p className="hidden md:block md:text-[11px] xl:text-[16px]">
            *Выберите подходящий вариант для вашего бизнеса
          </p>
        </div>
      </div>

      <div className={`w-full overflow-hidden ${widthClass} 
                      md:h-[514px] lg:h-[590px] xl:h-[628px] 2xl:h-[628px]`}>
        <img 
          src={image} 
          alt="Грузовик" 
          className="w-full h-full object-cover xl:object-right"
        />
      </div>
    </div>
  );
};

export default Home;