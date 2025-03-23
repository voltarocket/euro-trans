import { useState } from "react";
import logo from "../../shared/assets/images/EuroTransLogo.png";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="py-[24px] bg-[#E9EBEECC]/80 backdrop-blur-sm rounded-b-[20px] z-10 fixed w-full">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Левые ссылки (скрываются на мобильных устройствах) */}
                    <div className="hidden lg:flex gap-[102px] text-[24px] lg:text-[32px]">
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Главная</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">О нас</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Транспорт</a>
                    </div>

                    {/* Логотип (всегда по центру) */}
                    <img className="h-[80px] w-[80px] lg:h-[113px] lg:w-[120px]" src={logo} alt="Логотип" />

                    {/* Правые ссылки (скрываются на мобильных устройствах) */}
                    <div className="hidden lg:flex gap-[102px] text-[24px] lg:text-[32px]">
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Этапы</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Услуги</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Контакты</a>
                    </div>

                    {/* Бургер-меню для мобильных устройств */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Мобильное меню (открывается по клику на бургер) */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4">
                        <nav className="flex flex-col gap-4 text-[24px]">
                            <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Главная</a>
                            <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">О нас</a>
                            <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Транспорт</a>
                            <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Этапы</a>
                            <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Услуги</a>
                            <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Контакты</a>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;