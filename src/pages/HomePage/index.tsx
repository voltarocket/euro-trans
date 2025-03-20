import backgroundImage from "../../shared/assets/images/Background.png";

const HomePage: React.FC = () => {
    return (
        <div>
         <div className="pt-[255px] pb-[89px]" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className="flex flex-col px-[39px]">
                <p className="text-[72px] w-[1166px] font-extrabold mb-[43px]">Надежные логистические решения для вашего бизнеса</p>
                <p className="text-[36px] w-[1100px] mb-[89px]">Доставка грузов на склады маркетплейсов и организация логистических перевозок по всей России</p>
                <div className="flex flex-col gap-[32px] w-[593px] mb-[24px]">
                    <button className="bg-[#344E74] hover:bg-[#4c6a97] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[40px] rounded-[20px]"><span className="text-[32px]">Логистические услуги по РФ</span></button>
                    <button className="bg-[#344E74] hover:bg-[#4c6a97] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[40px] rounded-[20px]"><span className="text-[32px]">Доставка груза на маркетплейсы</span></button>
                </div>
                <p className="text-[24px]">*Выберите подходящий вариант для вашего бизнеса</p>
            </div>
        </div>
            {/* <div className="pt-[83px] bg-[#07162C]">
                <div className="flex flex-col justify-center items-center px-[157px] text-white">
                    <p className="text-[72px] font-extrabold">О нас</p>
                    <p className="text-[32px]">Наша команда обладает многолетним опытом в сфере логистического сопровождения. Мы специализируемся на решении сложных задач и постоянно совершенствуем свои процессы, чтобы сделать оформление документов и транспортировку максимально удобными для вас. 
                        Наша главная цель — выстроить надежные партнерские отношения и оптимизировать внутреннюю логистику без потери качества.</p>
                </div>
                <div className="flex flex-col justify-center m-[44px] bg-[#E9EBEE] rounded-[20px]">
                    <p className="text-[72px]">Почему стоит работать с нами</p>
                    <div className="grid grid-cols-3 grid-rows-2">
                        <div className="bg-[#344E74]">
                            <img src="" alt="" />
                            <p>Лучшая цена на рынке </p>
                            <p>Предлагаем выгодные условия благодаря анализу рынка.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
     )
}
export default HomePage;
