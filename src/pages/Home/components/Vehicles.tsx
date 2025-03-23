import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { useRef } from "react";
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
            className={`bg-[#E9EBEECC]/80 backdrop-blur-sm hover:bg-white p-4 lg:p-6 rounded-full ${className}`}
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
        infinite: true,
        speed: 500,
        slidesToShow: 3, // По умолчанию 3 слайда
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1440, // На экранах меньше 1440px
                settings: {
                    slidesToShow: 3, // Все равно 3 слайда
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024, // На экранах меньше 1024px
                settings: {
                    slidesToShow: 2, // 2 слайда
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768, // На экранах меньше 768px
                settings: {
                    slidesToShow: 1, // 1 слайд
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="items-center py-10 lg:py-[80px] relative">
            {/* Заголовок */}
            <div className="flex justify-center pb-6 lg:pb-[80px]">
                <p className="text-4xl lg:text-[72px] text-center">Транспорт под любые цели</p>
            </div>

            {/* Слайдер */}
            <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                    {vehicleData.map((vehicleCard, index) => (
                        <div className="px-2 lg:px-[40px]" key={index}>
                            <VehicleCard {...vehicleCard} />
                        </div>
                    ))}
                </Slider>

                {/* Кнопки навигации */}
                <div className="absolute top-[50%] transform -translate-y-1/2 w-full flex justify-between px-4">
                    <Button onClick={previous} className="left-0">
                        <img className="h-6 lg:h-[30px]" src={left} alt="Left Arrow" />
                    </Button>
                    <Button onClick={next} className="right-0">
                        <img className="h-6 lg:h-[30px]" src={right} alt="Right Arrow" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;