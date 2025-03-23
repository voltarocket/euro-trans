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
        <div className="flex flex-col items-center justify-center px-4 lg:px-[167px] pb-10 lg:pb-[103px]">
            <div className="text-4xl lg:text-[72px] pb-8 lg:pb-[80px] text-center">
                Этапы работы
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-[37px] lg:gap-y-[169px]">
                {stagesData.map((stage, index) => (
                    <StagesCard key={index} {...stage} />
                ))}
            </div>
        </div>
    );
};

export default Stages;