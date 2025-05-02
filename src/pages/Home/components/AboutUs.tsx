import { forwardRef } from "react";
import AboutUsCounter from "./AboutUsCounter";
import AboutCard from "./AboutCard";

import price from "../../../shared/assets/icons/Price.svg";
import calendar from "../../../shared/assets/icons/Calendar.svg";
import timer from "../../../shared/assets/icons/Timer.svg";
import checkbox from "../../../shared/assets/icons/CheckBox.svg";
import box from "../../../shared/assets/icons/Box.svg";
import truck from "../../../shared/assets/icons/Truck.svg";

interface AboutUsProps {
  id?: string;
}

const cardData = [
  {
    title: "Лучшая цена на рынке",
    description: "Предлагаем выгодные условия благодаря анализу рынка",
    imageURL: price,
  },
  {
    title: "Доставка точно в срок",
    description: "Координируем водителей для своевременной доставки",
    imageURL: calendar,
  },
  {
    title: "Поддержка 24/7",
    description: "Всегда на связи для консультаций и помощи",
    imageURL: timer,
  },
  {
    title: "Проверка груза",
    description: "Контроль на соответствие требованиям маркетплейса",
    imageURL: checkbox,
  },
  {
    title: 'Полный спектр услуг',
    description: 'FTL, LTL, перевозки негабаритных и тяжеловесных объектов',
    imageURL: box
  },
  {
    title: "Гибкость доставки",
    description: "Доставляем в любой день работы склада без ограничений",
    imageURL: truck,
  },
];

const counters = [
  {
    target: 24,
    suffix: "/7",
    text: "Поддержка для решения любых вопросов",
  },
  {
    target: 25,
    suffix: "+",
    text: "Маршрутов доставки",
  },
  {
    target: 1000,
    suffix: "+",
    text: "Успешных перевозок и довольных клиентов",
  },
];

const AboutUs = forwardRef<HTMLDivElement, AboutUsProps>(({ id }, ref) => (
  <div
    id={id || "about"}
    ref={ref}
    className="pt-[42px] bg-[#07162C] pb-[42px] lg:pb-[52px] 
               px-[20px] md:px-[40px] lg:px-[60px] xl:px-[71px] 
               -mt-[10px] scroll-mt-[80px]"
  >
    <div className="xl:max-w-[1280px] xl:mx-auto flex flex-col justify-center items-center text-white">
      <section className="pb-[32px] w-full">
        <h2 className="text-[20px] md:text-[32px] lg:text-[36px] font-extrabold text-center pb-[16px] md:pb-[24px] xl:pb-[24px]">
          О нас
        </h2>
        <div className="text-[12px] md:text-[16px] xl:text-[20px] text-justify">
          <p>
            Наша команда обладает <strong>многолетним опытом</strong> в сфере
            логистического сопровождения. Мы специализируемся на решении
            сложных задач и постоянно совершенствуем свои процессы, чтобы
            сделать оформление документов и транспортировку максимально
            удобными для вас.
          </p>
          <p>
            Наша <strong>главная цель</strong> — выстроить надежные партнерские
            отношения и оптимизировать внутреннюю логистику без потери
            качества.
          </p>
        </div>
      </section>

      <section className="flex flex-row justify-center gap-8 lg:gap-[169px] xl:gap-[80px] pb-10 xl:pb-[72px] w-full xl:max-w-[1200px]">
        {counters.map(({ target, suffix, text }, idx) => (
          <div key={idx} className="flex flex-col items-center w-full">
            <div className="flex text-[20px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-kumar">
              <AboutUsCounter target={target} duration={1500} />
              <span>{suffix}</span>
            </div>
            <p className="text-[10px] md:text-[15px] xl:text-[20px] text-left xl:text-center">
              {text}
            </p>
          </div>
        ))}
      </section>

      <section className="w-full xl:max-w-[1280px]">
        <div className="flex flex-col gap-[24px] xl:gap-[32px] items-center bg-[#E9EBEE] rounded-[20px] py-[24px] xl:py-[32px] px-[26px] text-white">
          <h3 className="text-[20px] md:text-[32px] lg:text-[36px] text-[#07162C] font-extrabold text-center">
            Почему стоит работать с нами
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 xl:gap-8 w-full">
            {cardData.map((card, idx) => (
              <AboutCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
));

export default AboutUs;
