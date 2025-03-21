import AboutUsCounter from "./AboutUsCounter";
import AboutCard from "./AboutCard";
import price from "../../../shared/assets/icons/Price.svg"
import calendar from "../../../shared/assets/icons/Calendar.svg"
import timer from "../../../shared/assets/icons/Timer.svg"
import checkbox from "../../../shared/assets/icons/CheckBox.svg"
import document from "../../../shared/assets/icons/Document.svg"
import truck from "../../../shared/assets/icons/Truck.svg"

const cardData = [
    {
        title:'Лучшая цена на рынке',
        description:'Предлагаем выгодные условия благодаря анализу рынка',
        imageURL: price
    },
    {
        title:'Доставка точно в срок',
        description:'Координируем водителей для своевременной доставки',
        imageURL: calendar
    },
    {
        title:'Поддержка 24/7',
        description:'Всегда на связи для консультаций и помощи',
        imageURL: timer
    },
    {
        title:'Проверка груза',
        description:'Контроль на соответствие требованиям маркетплейса',
        imageURL: checkbox
    },
    {
        title:'Организация пропусков',
        description:'Предоставляем данные водителя для пропуска заранее',
        imageURL: document
    },
    {
        title:'Гибкость доставки',
        description:'Доставляем в любой день работы склада без ограничений',
        imageURL: truck
    }
]
const AboutUs:React.FC = () => {
    return (
        <div className="pt-[83px] bg-[#07162C] pb-[87px]">
            <div className="flex flex-col justify-center items-center px-[157px] pb-[44px] text-white">
                <p className="text-[72px] font-extrabold">О нас</p>
                <p className="text-[32px] mb-[104px]">Наша команда обладает многолетним опытом в сфере логистического сопровождения. Мы специализируемся на решении сложных задач и постоянно совершенствуем свои процессы, чтобы сделать оформление документов и транспортировку максимально удобными для вас. 
                    Наша главная цель — выстроить надежные партнерские отношения и оптимизировать внутреннюю логистику без потери качества.</p>
                <div className="flex gap-[169px] px-[197px] pb-[167px]">
                    <div className="flex-col w-[481px]">
                        <div className="flex font-Kumar_one text-[72px]"><AboutUsCounter target={24} duration={1500}/><span>/7</span></div> 
                        <p className="text-[32px]">Поддержка и консультация для решения любых вопросов</p>
                    </div>
                    <div className="flex-col w-[481px]">
                        <div className="flex font-Kumar_one text-[72px]"><AboutUsCounter target={25} duration={1500}/><span>+</span></div> 
                        <p className="text-[32px]">Маршрутов доставки</p>
                    </div>
                    <div className="flex-col w-[481px]">
                        <div className="flex font-Kumar_one text-[72px]"><AboutUsCounter target={1000} duration={750}/><span>+</span></div> 
                        <p className="text-[32px]">Успешных перевозок и довольных клиентов</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[87px] items-center mx-[44px] bg-[#E9EBEE] rounded-[20px] pt-[76px] pb-[162px]">
                <p className="text-[72px]">Почему стоит работать с нами</p>
                <div className="grid grid-cols-3 grid-rows-2 gap-[87px] text-white">
                    {cardData.map((card, index) => (
                            <AboutCard key={index} {...card}/>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default AboutUs;