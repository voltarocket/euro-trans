import { useState, useEffect, useRef } from "react";
import logo from "../../shared/assets/images/EuroTransLogo.png";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setIsServicesOpen(false);
        }
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                if (menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
                    closeMenu();
                }
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="py-[8px] lg:py-[11px] bg-[#E9EBEECC]/80 backdrop-blur-sm rounded-b-[20px] z-10 fixed w-full">
            <div className="container mx-auto px-[39px] md:px-[] lg:px-[172px]">
                <div className="flex justify-between items-center"> 
                    <div className="lg:hidden">
                        <button 
                            ref={menuButtonRef}
                            onClick={toggleMenu} 
                            className="focus:outline-none"
                        >
                            {isMenuOpen ? (
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
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
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="hidden lg:flex gap-[32px] text-[14px] ">
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Главная</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">О нас</a>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Транспорт</a>
                    </div>
                    <img className="h-[38px] w-[40px] md:h-[56px] md:w-[60px] xl:h-[64.84px] xl:w-[69.09px]" src={logo} alt="Логотип" />
                    <div className="hidden lg:flex gap-[32px] text-[14px] items-center">
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Этапы</a>
                        <div className="relative group">
                            <button 
                                onClick={toggleServices}
                                className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8 flex font-bold items-center"
                            >
                                Услуги
                                <svg 
                                    className={`ml-2 w-5 h-5 transition-transform ${isServicesOpen ? 'transform rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div 
                                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 ${isServicesOpen ? 'block' : 'hidden'}`}
                            >
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Доставка по РФ</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Доставка на маркетплейсы</a>
                            </div>
                        </div>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Контакты</a>
                    </div>
                    <div className="lg:hidden w-8 h-8"></div>
                </div>
                
                {/* Мобильное меню с dropdown */}
                <div 
                    ref={menuRef}
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`}
                >
                    <nav className="flex flex-col items-center gap-2 text-[18px] py-2">
                        <a className="" href="" onClick={closeMenu}>Главная</a>
                        <a className="" href="" onClick={closeMenu}>О нас</a>
                        <a className="" href="" onClick={closeMenu}>Транспорт</a>
                        <a className="" href="" onClick={closeMenu}>Этапы</a>
                        <div className="flex flex-col items-center">
                            <button 
                                onClick={toggleServices}
                                className="flex items-center font-bold"
                            >
                                Услуги
                                <svg 
                                    className={`ml-2 w-4 h-4 transition-transform ${isServicesOpen ? 'transform rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div 
                                className={`flex flex-col items-center mt-2 ${isServicesOpen ? 'block' : 'hidden'}`}
                            >
                                <a href="#" className="px-4 py-1 text-[16px]" onClick={closeMenu}>Доставка по РФ</a>
                                <a href="#" className="px-4 py-1 text-[16px]" onClick={closeMenu}>Доставка на маркетплейсы</a>
                            </div>
                        </div>
                        <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="" onClick={closeMenu}>Контакты</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;