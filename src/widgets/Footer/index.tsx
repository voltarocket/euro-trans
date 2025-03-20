import logo from "../../shared/assets/images/EuroTransLogo.png"
import Arrow from "../../shared/assets/icons/Arrow 1.svg"

const Footer:React.FC = () => {
    return (
        <div className="flex justify-center gap-[212px] px-[150px] py-[104px] bg-[#E9EBEE] rounded-t-[20px] border-[3px] border-[#344E74] text-[32px]">
            <div className="flex-col">
                <p className="mb-[35px]">Контакты</p>
                <p className="mb-[25px]">Тел: +7 920 370-74-90, Максим</p>
                <p>Офис компании: г. Иваново ул. Большая Воробьевская д.4</p>
            </div>
            <img className="w-[150px] h-[141px]" src={logo} alt="Логотип" />
            <div className="flex flex-col gap-[18px]">
                <a className="" href="">Главная</a>
                <a className="" href="">О нас</a>
                <a className="" href="">Транспорт</a>
                <a className="" href="">Контакты</a>
            </div>
            <div className="flex gap-[24px]">
                <a href="#">Наверх</a>
                <img className="h-[47px]" src={Arrow}/>
            </div>
        </div>
        )
}
export default Footer;