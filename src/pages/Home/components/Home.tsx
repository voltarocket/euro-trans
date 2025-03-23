import { NavLink } from "react-router";
import truckimage from "../../../shared/assets/images/TruckImage.png";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col pt-16 lg:pt-[256px] pl-4 lg:pl-[39px] pb-8 lg:pb-[89px]">
                <p className="text-4xl lg:text-[72px] font-extrabold mb-6 lg:mb-[43px]">
                    Надежные логистические решения для вашего бизнеса
                </p>
                <p className="text-xl lg:text-[36px] mb-8 lg:mb-[89px]">
                    Доставка грузов на склады маркетплейсов и организация логистических перевозок по всей России
                </p>
                <div className="flex flex-col gap-4 lg:gap-[32px] w-full lg:w-[739px] mb-6 lg:mb-[24px]">
                    <NavLink
                        to={"/cargo"}
                        className="flex justify-center bg-[#07162C] hover:bg-[#3f577d] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-6 lg:py-[40px] rounded-lg lg:rounded-[20px]"
                    >
                        <span className="text-lg lg:text-[40px]">Логистические услуги по РФ</span>
                    </NavLink>
                    <NavLink
                        to={"/marketplace"}
                        className="flex justify-center bg-[#07162C] hover:bg-[#344E74] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-6 lg:py-[40px] rounded-lg lg:rounded-[20px]"
                    >
                        <span className="text-lg lg:text-[40px]">Доставка груза на маркетплейсы</span>
                    </NavLink>
                </div>
                <p className="text-base lg:text-[24px]">*Выберите подходящий вариант для вашего бизнеса</p>
            </div>
            <img src={truckimage} alt="Грузовик" className="w-full lg:w-auto" />
        </div>
    );
};

export default Home;