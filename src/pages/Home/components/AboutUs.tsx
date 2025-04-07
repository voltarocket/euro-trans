import { forwardRef } from "react";
import AboutUsCounter from "./AboutUsCounter";
import AboutCard from "./AboutCard";
import price from "../../../shared/assets/icons/Price.svg";
import calendar from "../../../shared/assets/icons/Calendar.svg";
import timer from "../../../shared/assets/icons/Timer.svg";
import checkbox from "../../../shared/assets/icons/CheckBox.svg";
import document from "../../../shared/assets/icons/Document.svg";
import truck from "../../../shared/assets/icons/Truck.svg";

interface AboutUsProps {
  id?: string;
}

const cardData = [
    {
        title: 'Лучшая цена на рынке',
        description: 'Предлагаем выгодные условия благодаря анализу рынка',
        imageURL: price
    },
    {
        title: 'Доставка точно в срок',
        description: 'Координируем водителей для своевременной доставки',
        imageURL: calendar
    },
    {
        title: 'Поддержка 24/7',
        description: 'Всегда на связи для консультаций и помощи',
        imageURL: timer
    },
    {
        title: 'Проверка груза',
        description: 'Контроль на соответствие требованиям маркетплейса',
        imageURL: checkbox
    },
    {
        title: 'Организация пропусков',
        description: 'Предоставляем данные водителя для пропуска заранее',
        imageURL: document
    },
    {
        title: 'Гибкость доставки',
        description: 'Доставляем в любой день работы склада без ограничений',
        imageURL: truck
    }
];

const AboutUs = forwardRef<HTMLDivElement, AboutUsProps>((props, ref) => {
    return (
        <div 
            id={props.id || "about"}
            ref={ref}
            className="pt-[42px] bg-[#07162C] pb-[32px] lg:pb-[80px] px-[20px] md:px-[40px] lg:px-[60px] -mt-[10px] scroll-mt-[80px]"
        >
            <div className="flex flex-col justify-center items-center pb-[32px] text-white">
                <p className="text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center pb-[16px] md:pb-[32px]">О нас</p>
                <div className="text-[12px] md:text-[16px] xl:text-[24px] text-justify">
                    <p>Наша команда обладает <strong>многолетним опытом</strong> в сфере логистического сопровождения. Мы специализируемся на решении сложных задач и постоянно совершенствуем свои процессы, чтобы сделать оформление документов и транспортировку максимально удобными для вас. </p>
                    <p>Наша <strong>главная цель</strong> — выстроить надежные партнерские отношения и оптимизировать внутреннюю логистику без потери качества.</p>
                </div>
            </div>
            <div className="flex text-white flex-row justify-center gap-8 lg:gap-[169px] xl:gap-[80px] pb-10 lg:px-[40px] xl:px-0">
                <div className="flex flex-col items-center w-full">
                    <div className="flex text-[20px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-kumar">
                        <AboutUsCounter target={24} duration={1500} />
                        <span>/7</span>
                    </div>
                    <div className="flex justify-center w-full">
                        <p className="text-[10px] md:text-[15px] xl:text-[24px] text-left xl:text-center">Поддержка для решения любых вопросов</p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="flex text-[20px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-kumar">
                        <AboutUsCounter target={25} duration={1500} />
                        <span>+</span>
                    </div>
                    <div className="flex justify-center w-full">
                        <p className="text-[10px] md:text-[15px] xl:text-[24px] text-left xl:text-center">Маршрутов доставки</p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="flex text-[20px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-kumar">
                        <AboutUsCounter target={1000} duration={750} />
                        <span>+</span>
                    </div>
                    <div className="flex justify-center w-full">
                        <p className="text-[10px] md:text-[15px] xl:text-[24px] text-left xl:text-center">Успешных перевозок и довольных клиентов</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[24px] items-center bg-[#E9EBEE] rounded-[20px] py-[24px] xl:py-[48px] px-[26px]">
                <p className="text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center">Почему стоит работать с нами</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 xl:gap-6 text-white">
                    {cardData.map((card, index) => (
                        <AboutCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
});

export default AboutUs;