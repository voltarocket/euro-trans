import logo from "../../shared/assets/images/EuroTransLogo.png";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-[212px] px-4 lg:px-[150px] py-10 lg:py-[104px] bg-[#E9EBEE] rounded-t-[20px] border-[3px] border-[#344E74] text-lg lg:text-[32px]">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <p className="mb-4 lg:mb-[35px] font-bold">Контакты</p>
                <p className="mb-2 lg:mb-[25px]">Тел: +7 920 370-74-90, Максим</p>
                <p>Офис компании: г. Иваново ул. Большая Воробьевская д.4</p>
            </div>
            <img className="w-[100px] h-[94px] lg:w-[150px] lg:h-[141px]" src={logo} alt="Логотип" />
            <div className="flex flex-col gap-2 lg:gap-[18px] text-center lg:text-left">
                <a className="hover:text-gray-600" href="">Главная</a>
                <a className="hover:text-gray-600" href="">О нас</a>
                <a className="hover:text-gray-600" href="">Транспорт</a>
                <a className="hover:text-gray-600" href="">Контакты</a>
            </div>
        </div>
    );
};

export default Footer;