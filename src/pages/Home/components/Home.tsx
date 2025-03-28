import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import truckimagelg from "../../../shared/assets/images/TruckImage.png"
import truckimagemd from "../../../shared/assets/images/TruckImageMd.png";
import truckimagesm from "../../../shared/assets/images/TruckImageSm.png";

const Home: React.FC = () => {
    const [imageSrc, setImageSrc] = useState(truckimagesm);

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth >= 768) { 
                setImageSrc(truckimagemd);
            } else if(window.innerWidth >= 1280){
                    setImageSrc(truckimagelg);
                } else { setImageSrc(truckimagesm)}
        };
        updateImage();
        window.addEventListener('resize', updateImage);

        return () => {
            window.removeEventListener('resize', updateImage);
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row rounded-b-[10px] overflow-hidden leading-none">
            <div className="flex flex-col pt-[78px] md:pt-[120px] xl:pt-[184px] 2xl:pt-[206px] px-[20px] md:px-0 md:pl-[40px] lg:pr-[39px] pb-0 md:pb-[32px] lg:pb-[89px] bg-[#E9EBEE]">
                <p className="text-start text-[20px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[48px] 2xl:text-[48px] 3xl:text-[72px] font-extrabold mb-6 lg:mb-[43px]">
                    Надежные логистические решения для вашего бизнеса
                </p>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[24px] mb-8 lg:mb-[89px]">
                    Доставка грузов на склады маркетплейсов и организация логистических перевозок по всей России
                </p>
                <div className="flex flex-col gap-4 lg:gap-[32px] w-full lg:w-[739px] mb-6 lg:mb-[24px]">
                    <NavLink
                        to={"/cargo"}
                        className="flex justify-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[10px] md:py-[20px] xl:py-[30px] rounded-lg lg:rounded-[20px]"
                    >
                        <span className="text-[11px] md:text-[16px] lg:text-[40px]">Логистические услуги по РФ</span>
                    </NavLink>
                    <NavLink
                        to={"/marketplace"}
                        className="flex justify-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[10px] md:py-[20px] xl:py-[30px] rounded-lg lg:rounded-[20px]"
                    >
                        <span className="text-[11px] md:text-[16px] lg:text-[40px]">Доставка груза на маркетплейсы</span>
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
};

export default Home;