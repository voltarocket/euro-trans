import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import standart from "../../../shared/assets/images/GazelStandart.png";
import long from "../../../shared/assets/images/GazelLong.png";
import five from "../../../shared/assets/images/Truck_5.png";
import ten from "../../../shared/assets/images/Truck_10.png";
import eurotruck from "../../../shared/assets/images/EuroTruck.png";
import VehicleCard from "./VehicleCard";
import right from "../../../shared/assets/icons/RightArrow.svg";
import left from "../../../shared/assets/icons/LeftArrow.svg";

const vehicleData = [
    {
        title: "Газель стандарт",
        imageURL: standart,
        heigth: "1.80 м.",
        width: "2.00 м.",
        length: "3.00 м.",
        capacity: "1.5 т.",
        volume: "10 кубов"
    },
    {
        title: "Газель удлиненная",
        imageURL: long,
        heigth: "1.85-2.20 м.",
        width: "2.00 м.",
        length: "4.00-4.20 м.",
        capacity: "1.5 т.",
        volume: "13-14 кубов"
    },
    {
        title: "Грузовик до 5 тонн",
        imageURL: five,
        heigth: "2.40 м.",
        width: "2.50 м.",
        length: "5.0-6.0 м.",
        capacity: "4.5 т.",
        volume: "25-30 кубов"
    },
    {
        title: "Грузовик до 10 тонн",
        imageURL: ten,
        heigth: "2.60 м.",
        width: "2.50 м.",
        length: "8 м.",
        capacity: "10 т.",
        volume: "40-56 кубов"
    },
    {
        title: "Еврофура",
        imageURL: eurotruck,
        heigth: "2.60 м.",
        width: "2.45 м.",
        length: "13.6 м.",
        capacity: "20 т.",
        volume: "92 куба"
    },
];

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button
            className={`flex items-center justify-center 
                bg-[#E9EBEECC]/80 backdrop-blur-sm 
                rounded-full shadow-lg
                transition-all duration-300 
                 hover:shadow-2xl hover:bg-white
                p-4 lg:p-6 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const Vehicles: React.FC = () => {
    const sliderRef = useRef<Slider>(null);

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings: Settings = {
        dots: true,
        customPaging: () => (
            <div className="w-[10px] h-[10px] mt-[16px] md:w-[14px] md:h-[14px] rounded-full bg-gray-400" />
        ),
        dotsClass: "slick-dots custom-dots !bottom-[-30px] flex justify-center gap-2",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "20px",
                    centerMode: true
                }
            }
        ]
    };

    return (
        <div className="items-center py-6 lg:pt-[32px] xl:pt-[48px] mb-[42px] lg:mb-[56px] relative rounded-t-[10px] bg-[#E9EBEE] -mt-[10px] 
            px-[20px] md:px-[40px] lg:px-[60px] 
            xl:px-[calc((100%-1280px)/2+71px)] 
            2xl:px-[calc((100%-1536px)/2+130px)]">
            <div className="xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
                <div className="flex justify-center pb-6 lg:pb-[32px] xl:pb-[48px]">
                    <p className="text-[20px] md:text-[32px] lg:text-[36px] font-extrabold text-center">
                        Транспорт под любые цели
                    </p>
                </div>
                <div className="slider-container">
                    <Slider ref={sliderRef} {...settings}>
                        {vehicleData.map((vehicleCard, index) => (
                            <div className="px-2 lg:px-[40px]" key={index}>
                                <VehicleCard {...vehicleCard} />
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute top-[56%] transform -translate-y-1/2 w-full left-0">
                        <div className="px-[20px] md:px-[40px] lg:px-[60px] 
                                    2xl:px-[calc((100%-1536px)/2+30px)]">
                            <div className="flex justify-between">
                                <Button onClick={previous}>
                                    <img className="h-6 lg:h-[30px]" src={left} alt="Left Arrow" />
                                </Button>
                                <Button onClick={next}>
                                    <img className="h-6 lg:h-[30px]" src={right} alt="Right Arrow" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;