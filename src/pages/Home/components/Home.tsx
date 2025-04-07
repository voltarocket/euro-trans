import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import truckimagelg from "../../../shared/assets/images/TruckImage.png";
import truckimagemd from "../../../shared/assets/images/TruckImageMd.png";
import truckimagesm from "../../../shared/assets/images/TruckImageSm.png";

interface HomeProps {
  id?: string;
}

const Home = forwardRef<HTMLDivElement, HomeProps>((props, ref) => {
    const [imageSrc, setImageSrc] = useState(truckimagesm);

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth >= 768) { 
                setImageSrc(truckimagemd);
            } else if(window.innerWidth >= 1024){
                setImageSrc(truckimagelg);
            } else { 
                setImageSrc(truckimagesm);
            }
        };
        updateImage();
        window.addEventListener('resize', updateImage);

        return () => {
            window.removeEventListener('resize', updateImage);
        };
    }, []);

    return (
        <div 
            id={props.id || "home"}
            ref={ref}
            className="flex flex-col md:flex-row rounded-b-[10px] overflow-hidden leading-none"
        >
            <div className="flex flex-col pt-[88px] md:pt-[120px] lg:pt-[132px] xl:pt-[184px] 2xl:pt-[206px] px-[20px] md:pl-[40px] md:pr-0 lg:pl-[60px] pb-0 md:pb-[32px] lg:pb-[64px] bg-[#E9EBEE] w-full">
                <p className="text-start text-[22px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[48px] 3xl:text-[72px] font-extrabold mb-[8px] md:mb-[12px]">
                    Надежные логистические решения для вашего бизнеса
                </p>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[24px] mb-[24px] lg:mb-[56px] w-full lg:max-w-[442px]">
                    Доставка грузов на склады маркетплейсов и организация логистических перевозок по РФ
                </p>
                <div className="flex flex-col gap-[8px] w-full lg:max-w-[370px] md:pb-[8px]">
                    <NavLink
                        to="/cargo"
                        className="flex justify-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[12px] md:py-[20px] xl:py-[30px] rounded-[10px]"
                    >
                        <span className="text-[11px] md:text-[16px] lg:text-[20px]">Логистические услуги по РФ</span>
                    </NavLink>
                    <NavLink
                        to="/marketplace"
                        className="flex justify-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[12px] md:py-[20px] xl:py-[30px] rounded-[10px]"
                    >
                        <span className="text-[11px] md:text-[16px] lg:text-[20px]">Доставка груза на маркетплейсы</span>
                    </NavLink>
                </div>
                <p className="hidden md:block md:text-[12px]">*Выберите подходящий вариант для вашего бизнеса</p>
            </div>
            <img 
                src={imageSrc} 
                alt="Грузовик" 
                className="w-full 2xl:h-auto lg:w-auto" 
            />
        </div>
    );
});

export default Home;