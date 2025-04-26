import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState, useEffect, useRef } from 'react';
import logo from "../../shared/assets/images/EuroTransLogo.png";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const servicesMenuRef = useRef<HTMLDivElement>(null);
    const servicesButtonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setIsServicesOpen(false);
    };

    const toggleServices = () => setIsServicesOpen(!isServicesOpen);

    const closeMenu = () => {
        setIsServicesOpen(false);
        setTimeout(() => setIsMenuOpen(false), 100);
    };

    const handleContactClick = () => {
        const footerEl = document.getElementById('contacts');
        if (footerEl) {
          footerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        closeMenu();
      };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) &&
                menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        if (isMenuOpen) document.addEventListener('pointerdown', handleClickOutside);
        else document.removeEventListener('pointerdown', handleClickOutside);

        return () => document.removeEventListener('pointerdown', handleClickOutside);
    }, [isMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (event.target instanceof HTMLAnchorElement) return;
            if (
                servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node) &&
                servicesButtonRef.current && !servicesButtonRef.current.contains(event.target as Node)
            ) {
                setTimeout(() => setIsServicesOpen(false), 100);
            }
        };

        if (isServicesOpen) document.addEventListener('pointerdown', handleClickOutside);
        else document.removeEventListener('pointerdown', handleClickOutside);

        return () => document.removeEventListener('pointerdown', handleClickOutside);
    }, [isServicesOpen]);

    return (
        <header className="py-[8px] lg:py-[11px] bg-[#E9EBEECC]/80 backdrop-blur-sm rounded-b-[20px] z-10 fixed w-full">
            <div className="container mx-auto px-[20px] md:px-[40px] lg:px-[172px] xl:px-[174px] 2xl:px-[301.58px]">
                <div className="flex justify-between items-center">
                    <div className="lg:hidden flex items-center">
                        <button
                            ref={menuButtonRef}
                            onClick={toggleMenu}
                            className="focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <nav className="hidden lg:flex gap-[32px] xl:gap-[48px] text-[14px] xl:text-[20px]">
                        <HashLink smooth to="/#home" onClick={closeMenu} className="hover:underline underline-offset-8 decoration-[#07162C] decoration-4">
                            Главная
                        </HashLink>
                        <HashLink smooth to="/#about" onClick={closeMenu} className="hover:underline underline-offset-8 decoration-[#07162C] decoration-4">
                            О нас
                        </HashLink>
                        <HashLink smooth to="/#vehicles" onClick={closeMenu} className="hover:underline underline-offset-8 decoration-[#07162C] decoration-4">
                            Транспорт
                        </HashLink>
                    </nav>
                    
                    <HashLink smooth to="/#home"><img className="h-[38px] w-[40px] md:h-[56px] md:w-[60px] xl:h-[66px] xl:w-[70px]" src={logo} alt="Логотип" /></HashLink>

                    <nav className="hidden lg:flex gap-[32px] xl:gap-[48px] text-[14px] xl:text-[20px] items-center">
                        <HashLink smooth to="/#stages" onClick={closeMenu} className="hover:underline underline-offset-8 decoration-[#07162C] decoration-4">
                            Этапы
                        </HashLink>
                        <div className="relative">
                            <button
                                ref={servicesButtonRef}
                                onClick={toggleServices}
                                className="flex items-center hover:underline underline-offset-8 decoration-[#07162C] decoration-4"
                            >
                                Услуги
                                <svg className={`ml-2 w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                ref={servicesMenuRef}
                                className={`absolute mt-2 w-68 xl:w-90 bg-white rounded-lg shadow-lg z-20 ${isServicesOpen ? 'block' : 'hidden'}`}
                            >
                                <NavHashLink 
                                    smooth to="/cargo#home" 
                                    onClick={closeMenu} 
                                    className="block px-4 pt-2 pb-1 text-center rounded-lg rounded-b-none hover:bg-gray-100">
                                    Логистические услуги по РФ
                                </NavHashLink>
                                <NavHashLink 
                                    smooth to="/marketplace#home" 
                                    onClick={closeMenu} 
                                    className="block px-4 pt-1 pb-2 text-center rounded-lg rounded-t-none hover:bg-gray-100">
                                    Доставка груза на маркетплейсы
                                </NavHashLink>
                            </div>
                        </div>
                        <button
                             onClick={handleContactClick}
                             className="hover:underline underline-offset-8 decoration-[#07162C] decoration-4"
                        >
                             Контакты
                        </button>
                    </nav>

                    <div className="lg:hidden w-8 h-8" />
                </div>

                <div
                    ref={menuRef}
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`}
                >
                    <nav className="flex flex-col items-center gap-2 text-[18px] py-2">
                        <HashLink smooth to="/#home" onClick={closeMenu}>Главная</HashLink>
                        <HashLink smooth to="/#about" onClick={closeMenu}>О нас</HashLink>
                        <HashLink smooth to="/#vehicles" onClick={closeMenu}>Транспорт</HashLink>
                        <HashLink smooth to="/#stages" onClick={closeMenu}>Этапы</HashLink>
                        <div className="flex flex-col items-center">
                            <button
                                ref={servicesButtonRef}
                                onClick={toggleServices}
                                className="flex items-center font-bold"
                            >
                                Услуги
                                <svg
                                    className={`ml-2 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`${isServicesOpen ? 'block' : 'hidden'} flex flex-col gap-[8px] items-center mt-2`}
                            >
                                <NavHashLink 
                                    smooth to="/cargo"   
                                    scroll={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                     }}
                                    onClick={closeMenu} 
                                    className="bg-[#344E74] text-white py-[8px] px-[30px] rounded-[10px] text-[14px]">
                                    Логистические услуги по РФ
                                </NavHashLink>
                                <NavHashLink 
                                    smooth to="/marketplace" 
                                    scroll={() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                    onClick={closeMenu} 
                                    className="bg-[#344E74] text-white py-[8px] px-[14px] rounded-[10px] text-[14px]">
                                    Доставка груза на маркетплейсы
                                </NavHashLink>
                            </div>
                        </div>
                        <button
                            onClick={handleContactClick}
                            className="hover:underline underline-offset-8 decoration-[#07162C] decoration-4"
                            >
                            Контакты
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
