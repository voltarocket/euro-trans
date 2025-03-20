import logo from "../../shared/assets/images/EuroTransLogo.png";

const Header: React.FC = () => {
    return (
        <div className="py-[32px] bg-white/60 rounded-b-[20px] fixed w-[100%]">
            <div className="flex justify-center items-center gap-[96px] text-[32px]">
                <a href="">Главная</a>
                <a href="">О нас</a>
                <a href="">Транспорт</a>
                <img className="h-[141px] w-[150px]" src={logo} alt="Логотип" />
                <a href="">Этапы</a>
                <a href="">Услуги</a>
                <a href="">Контакты</a>
            </div>
        </div>   
 )
} 
export default Header;