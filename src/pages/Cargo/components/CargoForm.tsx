import { useState, useRef, useEffect } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import emailjs from 'emailjs-com';
import { db } from '../../../shared/api/firebase/config';
import { EMAIL_CONFIG } from '../../../shared/config/email';
import Modal from '../../../widgets/Modal';

interface CityData {
  name: string;
}

const CargoForm: React.FC = () => {
  const [destination, setDestination] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [cargoType, setCargoType] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [volume, setVolume] = useState<string>('');
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [cities, setCities] = useState<CityData[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const phoneRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const citiesDoc = await getDoc(doc(collection(db, 'cities'), 'cities'));
        if (citiesDoc.exists()) {
          const data = citiesDoc.data().list as CityData[];
          setCities(data);
          if (data.length > 0) {
            setDestination(data[0].name);
          }
        }
      } catch (error) {
        console.error('Error loading cities:', error);
        alert('Ошибка загрузки данных городов');
      } 
    };
    loadCities();
  }, []);

  const generateOrderId = () => {
    const datePart = new Date()
      .toISOString()
      .replace(/[^0-9]/g, '')
      .slice(2, 14);
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    return `ETC-${datePart}-${randomPart}`;
  };

  const formatPhoneNumber = (digits: string): string => {
    let formatted = '+7 ';
    if (digits.length > 0) formatted += `(${digits.substring(0, 3)}`;
    if (digits.length > 3) formatted += `) ${digits.substring(3, 6)}`;
    if (digits.length > 6) formatted += `-${digits.substring(6, 8)}`;
    if (digits.length > 8) formatted += `-${digits.substring(8, 10)}`;
    return formatted;
  };

  const countDigitsBeforePosition = (value: string, position: number): number => {
    let count = 0;
    for (let i = 0; i < position; i++) {
      if (/\d/.test(value[i])) count++;
    }
    return count;
  };

  const findCursorPosition = (formattedValue: string, digitCount: number): number => {
    let countedDigits = 0;
    for (let i = 0; i < formattedValue.length; i++) {
      if (/\d/.test(formattedValue[i])) {
        countedDigits++;
        if (countedDigits === digitCount) {
          return i + 1;
        }
      }
    }
    return formattedValue.length;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const selectionStart = input.selectionStart || 0;
    const value = input.value;

    const digitCountBeforeCursor = countDigitsBeforePosition(value, selectionStart);
    const cleanValue = value.replace(/\D/g, '');
    const digits = cleanValue.startsWith('7') ? cleanValue.substring(1) : cleanValue;

    const formattedValue = formatPhoneNumber(digits.substring(0, 10));
    setPhone(formattedValue);

    setTimeout(() => {
      if (phoneRef.current) {
        const newCursorPosition = findCursorPosition(formattedValue, digitCountBeforeCursor);
        phoneRef.current.selectionStart = newCursorPosition;
        phoneRef.current.selectionEnd = newCursorPosition;
      }
    }, 0);
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/\d|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handlePhoneFocus = () => {
    if (phone === '') setPhone('+7 ');
    setTimeout(() => {
      if (phoneRef.current) {
        phoneRef.current.selectionStart = 4;
        phoneRef.current.selectionEnd = 4;
      }
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination || !name || !cargoType || !weight || !volume || phone.replace(/\D/g, '').length < 11 || isSubmitting) {
      return;
    }
  
    try {
      setIsSubmitting(true);

      const templateParams = {
        order_id: generateOrderId(),
        destination,
        client_name: name,
        client_phone: phone,
        cargo_type: cargoType,
        weight: `${weight} кг`,
        volume: `${volume} м³`,
        timestamp: new Date().toLocaleString('ru-RU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        client_ip: '192.168.1.1',
        client_device: navigator.userAgent,
        source: 'Основной сайт'
      };
  
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID_CARGO,
        templateParams,
        EMAIL_CONFIG.USER_ID
      );
  
      setIsModalOpen(true);
      
      setName('');
      setPhone('');
      setCargoType('');
      setWeight('');
      setVolume('');
      setDestination(cities[0]?.name || '');
  
    } catch (error) {
      console.error('Ошибка отправки данных:', error);
      alert('Произошла ошибка при отправке данных');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-[32px] lg:pt-[64px] pb-[74px] lg:pb-[143px] bg-[#07162C] px-[20px] lg:px-[60px] -mt-[20px] -mb-[20px]">
      <div className="flex flex-col justify-center items-center text-white">
        <p className="text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center pb-[16px] md:pb-[32px] lg:pb-[64px]">
          Оформление перевозки
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[78px 58px 58px 58px 58px 58px 58px] gap-x-[10px] md:gap-x-[20px] gap-y-[14px]">
            <div className="flex flex-col col-span-2">
              <label className="text-[12px] md:text-[16px] mb-[8px]">Откуда</label>
              <input
                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                type="text"
                value="Иваново"
                disabled
              />
              <p className="text-[10px] md:text-[16px] mt-[8px]">
                *Забор груза по г.Иваново - <strong>бесплатно</strong>
              </p>
            </div>

            <div className="flex flex-col col-span-2 relative" ref={destinationRef}>
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Куда</label>
                            <div 
                                className={`bg-white text-black py-[8px] md:py-[15px] px-[16px] text-[12px] md:text-[16px] border-b border-gray-200 w-full cursor-pointer flex justify-between items-center transition-[border-radius] ${
                                    isDestinationOpen ? 'duration-100' : 'duration-100 delay-150'
                                } ${
                                    isDestinationOpen ? 'rounded-t-[10px] rounded-b-none' : 'rounded-[10px]'
                                } ${isSubmitting ? 'cursor-not-allowed' : ''}`}
                                onClick={() => !isSubmitting && setIsDestinationOpen(!isDestinationOpen)}
                            >
                                <span>{destination || 'Select city'}</span>
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    className={`transform transition-transform duration-200 ${isDestinationOpen ? 'rotate-180' : ''}`}
                                >
                                    <path d="M7 10L12 15L17 10H7Z" fill="#07162C"/>
                                </svg>
                            </div>
                            <div className={`absolute top-full md:top-21.5 left-0 right-0 z-10 bg-white text-black overflow-hidden transition-all min-w-full shadow-lg ${isDestinationOpen ? 'max-h-[300px] rounded-b-[10px] duration-200 delay-100' : 'max-h-0 duration-200'}`}>
                                <div className="overflow-y-auto max-h-[300px]">
                                    {cities.map((city) => (
                                        <div
                                            key={city.name}
                                            className={`py-[10px] md:py-[15px] px-[16px] text-[12px] md:text-[16px] cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${destination === city.name ? 'bg-gray-100 font-medium' : ''}`}
                                            onClick={() => {
                                                setDestination(city.name);
                                                setIsDestinationOpen(false);
                                            }}
                                        >
                                            {city.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

            <div className="flex flex-col col-span-2">
              <label className="text-[12px] md:text-[16px] mb-[8px]">Вид груза</label>
              <input
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                type="text"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col col-span-1">
              <label className="text-[12px] md:text-[16px] mb-[8px]">Вес, кг</label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                type="number"
                min="1"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col col-span-1">
              <label className="text-[12px] md:text-[16px] mb-[8px]">Объем, м³</label>
              <input
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                type="number"
                step="0.1"
                min="0.1"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col col-span-2">
              <label className="text-[12px] md:text-[16px] mb-[8px]">Имя</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] border-b md:text-[16px] border-gray-200"
                type="text"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="flex flex-col col-span-2">
              <label className="text-[12px] md:text-[16px] mb-[8px]">Телефон</label>
              <input
                ref={phoneRef}
                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] border-b md:text-[16px] border-gray-200"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                onKeyDown={handlePhoneKeyDown}
                onFocus={handlePhoneFocus}
                placeholder="+7 (XXX) XXX-XX-XX"
                required
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit"
              className="flex justify-center items-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white md:font-bold text-[14px] md:text-[24px] xl:text-[36px] h-[37px] md:h-[54px] xl:h-[84px] col-span-2 md:col-span-4 rounded-[10px] transition-colors mt-[18px]"
            >
             {isSubmitting ? (
                                <div className="h-6 w-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                            ) : 'Заказать'}
            </button>
          </div>
        </form>

        <Modal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        
      </div>
    </div>
  );
};

export default CargoForm;