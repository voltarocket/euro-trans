import box from "../../../shared/assets/icons/Box.svg"
import calendar from "../../../shared/assets/icons/Calendar.svg"
import document from "../../../shared/assets/icons/Document.svg"

const cardData = [
    {
        title: 'Полный спектр услуг',
        description: 'FTL, LTL, перевозки негабаритных и тяжеловесных объектов',
        imageURL: box
    },
    {
        title: 'Бесплатное изменение дня доставки',
        description: 'По электронному письму или звонку ведущему специалисту, до наступления дня ранее указанной доставки',
        imageURL: calendar
    },
    {
        title: 'Организация пропусков',
        description: 'Предоставляем данные водителя для пропуска заранее',
        imageURL: document
    },
];

const CargoCards: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row  gap-[24px] md:gap-[21px] justify-center items-center md:items-start bg-[#E9EBEE] rounded-[20px] py-[32px] lg:py-[48px] px-[20px] md:px-[41px] lg:px-[60px] -mt-[20px] relative">
                    {cardData.map((card, index) => (
                        <div key={index} className="bg-[#344E74] text-white hover:scale-105 transition-all transform-gpu py-[20px] xl:py-[32px] px-[32px] md:px-[9px] rounded-[20px] flex flex-col items-center justify-center gap-[3.71px] xl:gap-[16px] w-full max-w-[364px] overflow-hidden h-fit">
                         <img
                             className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]" 
                             src={card.imageURL}
                             alt={card.title}
                         />
                         <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-center font-bold ">{card.title}</p>
                         <p className="text-[10px] md:text-[12px] lg:text-[16px] w-full text-center">
                             {card.description}
                         </p>
                     </div>
                    ))}

            </div>
        )
}
export default CargoCards;