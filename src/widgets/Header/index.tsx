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
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg
                                className="w-13 h-13"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex gap-[102px] text-[32px] max-2xl:text-[24px]">
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Главная</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">О нас</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Транспорт</a>
                    </div>
                    <img className="h-[80px] w-[80px] xl:h-[84px] xl:w-[89.5px] lg:h-[113px] lg:w-[120px] max-md:h-[68px] max-md:w-[72px] " src={logo} alt="Логотип" />
                    <div className="hidden lg:flex gap-[102px] text-[32px] max-2xl:text-[24px]">
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Этапы</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Услуги</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Контакты</a>
                    </div>
                    <div className="lg:hidden w-8 h-8"></div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden mt-4">
                        <nav className="flex flex-col items-center gap-4 text-[24px]">
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