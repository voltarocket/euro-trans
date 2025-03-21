import { NavLink } from "react-router";
import truckimage from "../../../shared/assets/images/TruckImage.png"

const Home:React.FC = () => {
    return (
        <div className="flex">
            <div className="flexflex-col pt-[256px] pl-[39px] pb-[89px]">
                <p className="text-[72px] font-extrabold mb-[43px]">Надежные логистические решения для вашего бизнеса</p>
                <p className="text-[36px] mb-[89px]">Доставка грузов на склады маркетплейсов и организация логистических перевозок по всей России</p>
            <div className="flex flex-col gap-[32px] w-[739px] mb-[24px]">
                <NavLink to={"/cargo"} className=" flex justify-center bg-[#07162C] hover:bg-[#3f577d] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[40px] rounded-[20px]"><span className="text-[40px]">Логистические услуги по РФ</span></NavLink>
                <NavLink to={"/marketplace"} className=" flex justify-center bg-[#07162C] hover:bg-[#344E74] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[40px] rounded-[20px]"><span className="text-[40px]">Доставка груза на маркетплейсы</span></NavLink>
            </div>
                <p className="text-[24px]">*Выберите подходящий вариант для вашего бизнеса</p>
            </div>
            <img src={truckimage} alt="Грузовик" />
        </div>
    )
}
export default Home;