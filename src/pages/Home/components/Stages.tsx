import StagesCard from "./StagesCard";
import one from "../../../shared/assets/images/One.png";
import two from "../../../shared/assets/images/Two.png";
import three from "../../../shared/assets/images/Three.png";
import four from "../../../shared/assets/images/Four.png";
import five from "../../../shared/assets/images/Five.png";
import six from "../../../shared/assets/images/Six.png";

const stagesData = [
    {
        image: one,
        description: "Заполните форму по имеющейся отгрузке"
    },
    {
        image: two,
        description: "При необходимости подготовьте сопроводительные документы"
    },
    {
        image: three,
        description: "Передайте груз и сопроводительные документы (при необходимости) водителю"
    },
    {
        image: four,
        description: "За сутки до доставки мы свяжемся с вами для подтверждения и предоставим данные для пропуска"
    },
    {
        image: five,
        description: "В назначенную дату авизации мы сдадим груз на указанный склад Маркетплейса"
    },
    {
        image: six,
        description: "Оплатите счет и обращайтесь к нам снова"
    }
];

const Stages: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center 
                       px-[20px] md:px-[40px] lg:px-[60px] xl:px-[130px]
                       pb-10 lg:pb-[64px] w-full">
            <div className="xl:max-w-[1280px] xl:w-full xl:mx-auto">
                <div className="text-[20px] md:text-[32px] lg:text-[36px] 
                              pb-[20px] lg:pb-[24px] 
                              font-extrabold text-center">
                    Этапы работы
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 
                              gap-[16px] md:gap-x-[64px] md:gap-y-0 lg:gap-y-[16px] 2xl:gap-y-[32px] lg:gap-x-[72px] 
                              xl:px-[80px]">
                    {stagesData.map((stage, index) => (
                        <StagesCard 
                            key={index} 
                            {...stage} 
                            isLast={index === stagesData.length - 1} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stages;