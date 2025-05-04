import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { EMAIL_CONFIG } from '../../../shared/config/email';
import Modal from '../../../widgets/Modal';

const CargoForm: React.FC = () => {
  const [pickUp, setPickUp] = useState<string>('')
  const [destination, setDestination] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [cargoType, setCargoType] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [volume, setVolume] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const phoneRef = useRef<HTMLInputElement>(null);

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
    if (!pickUp || !destination || !name || !cargoType || !weight || !volume || phone.replace(/\D/g, '').length < 11 || isSubmitting) {
      return;
    }
  
    try {
      setIsSubmitting(true);

      const templateParams = {
        order_id: generateOrderId(),
        pickUp: pickUp,
        destination: destination,
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
      setDestination('');
      setPickUp('');
  
    } catch (error) {
      console.error('Ошибка отправки данных:', error);
      alert('Произошла ошибка при отправке данных');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-[52px] md:pt-[52px] lg:pt-[64px] pb-[74px] bg-[#07162C] px-[20px] lg:px-[60px] -mt-[20px] -mb-[20px]">
      <div className="flex flex-col xl:max-w-[1280px] xl:mx-auto justify-center items-center text-white">
        <p className="text-[20px] md:text-[32px] lg:text-[36px] font-extrabold text-center pb-[16px] md:pb-[24px] lg:pb-[32px] xl:pb-[24px]">
          Оформление заявки
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[78px 58px 58px 58px 58px 58px 58px] gap-x-[10px] md:gap-x-[20px] gap-y-[14px] xl:gap-y-[24px]">
            <div className="flex flex-col col-span-2">
              <label className="text-[12px] md:text-[16px] mb-[8px]">Откуда</label>
              <input
              value={pickUp}
                onChange={(e) => setPickUp(e.target.value)}
                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                type="text"
                required
                placeholder='Укажите город'
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col col-span-2">
              <label className="text-[12px] md:text-[16px] mb-[8px]">Куда</label>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                type="text"
                required
                placeholder='Укажите город'
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col col-span-2">
              <label className="text-[12px] md:text-[16px] mb-[8px]">Вид груза</label>
              <input
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="bg-white text-black py-[10px] md:py-[15px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200"
                type="text"
                required
                placeholder='Укажите вид груза'
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
                placeholder='Укажите вес груза'
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
                placeholder='Укажите обьем груза'
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
                placeholder='Укажите имя'
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
              className="flex justify-center items-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white md:font-bold text-[18px] md:text-[24px] h-[42px] md:h-[54px] xl:h-[55px] col-span-2 md:col-span-4 rounded-[10px] transition-colors mt-[18px]"
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