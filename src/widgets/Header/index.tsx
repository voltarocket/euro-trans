import logo from "../../shared/assets/images/EuroTransLogo.png";

const Header: React.FC = () => {
    return (
        <div className="py-[24px] bg-[#E9EBEECC]/80 backdrop-blur-sm rounded-b-[20px] z-1 fixed w-[100%]">
            <div className="flex justify-center items-center gap-[117px] text-[32px]">
                <div className="flex gap-[102px]">
                    <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Главная</a>
                    <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">О нас</a>
                    <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Транспорт</a>
                </div>
                <img className="h-[113px] w-[120px]" src={logo} alt="Логотип" />
                <div className="flex gap-[102px]">
                    <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Этапы</a>
                    <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Услуги</a>
                    <a className="decoration-[#07162C] decoration-4 hover:underline underline-offset-8" href="">Контакты</a>
                </div>
            </div>
        </div>   
 )
} 
export default Header;