import React, { useState, useRef, useEffect } from 'react';

const MarketplaceForm: React.FC = () => {
    const [destination, setDestination] = useState<string>('Москва');
    const [palletCount, setPalletCount] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(8000);
    const [phone, setPhone] = useState<string>('+7 ');
    const [name, setName] = useState<string>('');
    const [isDestinationOpen, setIsDestinationOpen] = useState(false);
    const [isPalletOpen, setIsPalletOpen] = useState(false);
    const phoneRef = useRef<HTMLInputElement>(null);
    const destinationRef = useRef<HTMLDivElement>(null);
    const palletRef = useRef<HTMLDivElement>(null);

    // Закрытие dropdown при клике вне его области
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
                setIsDestinationOpen(false);
            }
            if (palletRef.current && !palletRef.current.contains(event.target as Node)) {
                setIsPalletOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const calculatePrice = (city: string, count: number) => {
        const basePrices: Record<string, number> = {
            'Москва': 8000,
            'Казань': 14000,
            'Санкт-Петербург': 18000,
            'Екатеринбург': 26000,
            'Краснодар': 30000,
            'Алексин': 10400,
            'Ростов на Дону': 30000,
            'Воронеж': 20000,
            'Волгоград': 26800,
            'Нижний Новгород': 1400,
            'Рязань': 10400,
            'Тверь': 13200,
            'Невиномысск': 32800,
            'Адыгейск': 30000,
            'Котовск': 20000,
            'Владимир': 7200,
            'Ярославль': 7200,
        };
        const pricePerPallet = 1000;
        const basePrice = basePrices[city] || 8000;
        const total = basePrice + (Math.max(0, count - 1) * pricePerPallet);
        setTotalPrice(total);
    };

    const formatPhoneNumber = (digits: string): string => {
        let formatted = '+7 ';
        if (digits.length > 0) formatted += `(${digits.substring(0, 3)}`;
        if (digits.length > 3) formatted += `) ${digits.substring(3, 6)}`;
        if (digits.length > 6) formatted += `-${digits.substring(6, 8)}`;
        if (digits.length > 8) formatted += `-${digits.substring(8, 10)}`;
        return formatted;
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

    const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/\d|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handlePhoneFocus = () => {
        if (phone === '') {
            setPhone('+7 ');
        }
        setTimeout(() => {
            if (phoneRef.current) {
                phoneRef.current.selectionStart = 4;
                phoneRef.current.selectionEnd = 4;
            }
        }, 0);
    };

    const handleDestinationSelect = (selectedCity: string) => {
        setDestination(selectedCity);
        calculatePrice(selectedCity, palletCount);
        setIsDestinationOpen(false);
    };

    const handlePalletCountSelect = (selectedCount: number) => {
        setPalletCount(selectedCount);
        calculatePrice(destination, selectedCount);
        setIsPalletOpen(false);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
        
    //     try {
    //       const response = await fetch('/api/send-order', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //           destination,
    //           palletCount,
    //           name,
    //           phone,
    //           totalPrice,
    //         }),
    //       });
      
    //       if (!response.ok) throw new Error('Ошибка сервера');
    //       alert('Заказ отправлен!');
    //     } catch (error) {
    //       alert('Ошибка: ' + error.message);
    //     }
    // };

    const cities = [
        'Москва', 'Казань', 'Санкт-Петербург', 'Екатеринбург', 'Краснодар',
        'Алексин', 'Ростов на Дону', 'Воронеж', 'Волгоград', 'Нижний Новгород',
        'Рязань', 'Тверь', 'Невиномысск', 'Адыгейск', 'Котовск', 'Владимир', 'Ярославль'
    ];

    const palletCounts = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    return (
        <div className="pt-[42px] bg-[#07162C] pb-[32px] lg:pb-[80px] px-[197px] -mt-[10px]">
            <div className="flex flex-col justify-center items-center pb-[32px] text-white">
                <p className="text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center pb-[16px] md:pb-[32px]">
                    Расчет и отправление перевозки
                </p>
                <form className="w-full">
                    <div className="grid grid-cols-5 grid-rows-4 gap-[35.41px]">
                        <div className="flex flex-col col-span-2">
                            <label className="text-[30px]">Откуда</label>
                            <input
                                className="bg-white text-black py-[30.5px] px-[36px] rounded-[20px] text-[32px] border-b border-gray-200"
                                type="text"
                                value="Иваново"
                                disabled
                            />
                            <p className="text-[24px] mt-[18px]">
                                *Забор груза по г.Иваново - <strong>бесплатно</strong>
                            </p>
                        </div>
                        
                        <div className="flex flex-col col-span-2 relative" ref={destinationRef}>
                            <label className="text-[30px]">Куда</label>
                            <div 
                                className={`bg-white text-black py-[30.5px] px-[36px] text-[32px] w-full cursor-pointer flex justify-between items-center 
                                    ${isDestinationOpen ? 'rounded-t-[20px] border-b border-gray-200' : 'rounded-[20px]'}`}
                                onClick={() => setIsDestinationOpen(!isDestinationOpen)}
                            >
                                <span>{destination}</span>
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`transform transition-transform duration-200 ${isDestinationOpen ? 'rotate-180' : ''}`}
                                >
                                    <path d="M7 10L12 15L17 10H7Z" fill="#07162C"/>
                                </svg>
                            </div>
                            <div 
                                className={`absolute top-39 left-0 right-0 z-10 bg-white text-black overflow-hidden transition-all duration-300 ease-in-out 
                                    ${isDestinationOpen ? 'max-h-[300px] shadow-lg rounded-b-[20px]' : 'max-h-0'}`}
                            >
                                <div className="overflow-y-auto max-h-[300px]">
                                    {cities.map((city) => (
                                        <div
                                            key={city}
                                            className={`px-[36px] py-[30px] text-[32px] cursor-pointer hover:bg-gray-100 transition-colors duration-150
                                                ${destination === city ? 'bg-gray-100 font-medium' : ''}`}
                                            onClick={() => handleDestinationSelect(city)}
                                        >
                                            {city}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col col-span-1 relative" ref={palletRef}>
                            <label className="text-[30px]">Кол-во паллет</label>
                            <div 
                                className={`bg-white text-black py-[30.5px] px-[36px] text-[32px] w-full cursor-pointer flex justify-between items-center 
                                    ${isPalletOpen ? 'rounded-t-[20px] border-b border-gray-200' : 'rounded-[20px]'}`}
                                onClick={() => setIsPalletOpen(!isPalletOpen)}
                            >
                                <span>{palletCount}</span>
                                <svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`transform transition-transform duration-200 ${isPalletOpen ? 'rotate-180' : ''}`}
                                >
                                    <path d="M7 10L12 15L17 10H7Z" fill="#07162C"/>
                                </svg>
                            </div>
                            <div 
                                className={`absolute top-39 left-0 right-0 z-10 bg-white text-black overflow-hidden transition-all duration-300 ease-in-out 
                                    ${isPalletOpen ? 'max-h-[300px] shadow-lg rounded-b-[20px]' : 'max-h-0'}`}
                            >
                                <div className="overflow-y-auto max-h-[300px]">
                                    {palletCounts.map((num) => (
                                        <div
                                            key={num}
                                            className={`px-[36px] py-[30px] text-[32px] cursor-pointer hover:bg-gray-100 transition-colors duration-150
                                                ${palletCount === num ? 'bg-gray-100 font-medium' : ''}`}
                                            onClick={() => handlePalletCountSelect(num)}
                                        >
                                            {num}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col col-span-2">
                            <label className="text-[30px]">Имя</label>
                            <input
                                className="bg-white text-black py-[30.5px] px-[36px] rounded-[20px] text-[32px]"
                                type="text"
                                placeholder='Введите имя'
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="flex flex-col col-span-3">
                            <label className="text-[30px]">Телефон</label>
                            <input
                                ref={phoneRef}
                                className="bg-white text-black py-[30.5px] px-[36px] rounded-[20px] text-[32px]"
                                type="tel"
                                value={phone}
                                onChange={handlePhoneChange}
                                onKeyDown={handlePhoneKeyDown}
                                onFocus={handlePhoneFocus}
                                placeholder="+7 (XXX) XXX-XX-XX"
                            />
                        </div>

                        <div className="flex flex-col col-start-1 col-end-6">
                            <p className="text-[30px]">Итого</p>
                            <p className="text-[64px] font-bold">
                                {totalPrice} <span>руб.</span>
                            </p>
                        </div>
                        <button 
                            type="submit"
                            className="flex justify-center items-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white text-[48px] h-[110px] rounded-[20px] col-start-1 col-end-6 transition-colors duration-200"
                        >
                            Заказать
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MarketplaceForm;