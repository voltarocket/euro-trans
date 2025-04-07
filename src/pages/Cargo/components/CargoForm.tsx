// import React, { useState, useRef, useEffect } from 'react';

const CargoForm: React.FC = () => {
    // const [destination, setDestination] = useState<string>('Москва');
    // const [palletCount, setPalletCount] = useState<number>(1);
    // const [totalPrice, setTotalPrice] = useState<number>(8000);
    // const [phone, setPhone] = useState<string>('+7 ');
    // const [name, setName] = useState<string>('');
    // const [isDestinationOpen, setIsDestinationOpen] = useState(false);
    // const [isPalletOpen, setIsPalletOpen] = useState(false);
    // const phoneRef = useRef<HTMLInputElement>(null);
    // const destinationRef = useRef<HTMLDivElement>(null);
    // const palletRef = useRef<HTMLDivElement>(null);

    // // Закрытие dropdown при клике вне его области
    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
    //             setIsDestinationOpen(false);
    //         }
    //         if (palletRef.current && !palletRef.current.contains(event.target as Node)) {
    //             setIsPalletOpen(false);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    // const calculatePrice = (city: string, count: number) => {
    //     const basePrices: Record<string, number> = {
    //         'Москва': 8000,
    //         'Казань': 14000,
    //         'Санкт-Петербург': 18000,
    //         'Екатеринбург': 26000,
    //         'Краснодар': 30000,
    //         'Алексин': 10400,
    //         'Ростов на Дону': 30000,
    //         'Воронеж': 20000,
    //         'Волгоград': 26800,
    //         'Нижний Новгород': 1400,
    //         'Рязань': 10400,
    //         'Тверь': 13200,
    //         'Невиномысск': 32800,
    //         'Адыгейск': 30000,
    //         'Котовск': 20000,
    //         'Владимир': 7200,
    //         'Ярославль': 7200,
    //     };
    //     const pricePerPallet = 1000;
    //     const basePrice = basePrices[city] || 8000;
    //     const total = basePrice + (Math.max(0, count - 1) * pricePerPallet);
    //     setTotalPrice(total);
    // };

    // const formatPhoneNumber = (digits: string): string => {
    //     let formatted = '+7 ';
    //     if (digits.length > 0) formatted += `(${digits.substring(0, 3)}`;
    //     if (digits.length > 3) formatted += `) ${digits.substring(3, 6)}`;
    //     if (digits.length > 6) formatted += `-${digits.substring(6, 8)}`;
    //     if (digits.length > 8) formatted += `-${digits.substring(8, 10)}`;
    //     return formatted;
    // };

    // const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const input = e.target;
    //     const selectionStart = input.selectionStart || 0;
    //     const value = input.value;

    //     const digitCountBeforeCursor = countDigitsBeforePosition(value, selectionStart);

    //     const cleanValue = value.replace(/\D/g, '');
    //     const digits = cleanValue.startsWith('7') ? cleanValue.substring(1) : cleanValue;

    //     const formattedValue = formatPhoneNumber(digits.substring(0, 10));
    //     setPhone(formattedValue);

    //     setTimeout(() => {
    //         if (phoneRef.current) {
    //             const newCursorPosition = findCursorPosition(formattedValue, digitCountBeforeCursor);
    //             phoneRef.current.selectionStart = newCursorPosition;
    //             phoneRef.current.selectionEnd = newCursorPosition;
    //         }
    //     }, 0);
    // };

    // const countDigitsBeforePosition = (value: string, position: number): number => {
    //     let count = 0;
    //     for (let i = 0; i < position; i++) {
    //         if (/\d/.test(value[i])) count++;
    //     }
    //     return count;
    // };

    // const findCursorPosition = (formattedValue: string, digitCount: number): number => {
    //     let countedDigits = 0;
    //     for (let i = 0; i < formattedValue.length; i++) {
    //         if (/\d/.test(formattedValue[i])) {
    //             countedDigits++;
    //             if (countedDigits === digitCount) {
    //                 return i + 1;
    //             }
    //         }
    //     }
    //     return formattedValue.length;
    // };

    // const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (!/\d|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
    //         e.preventDefault();
    //     }
    // };

    // const handlePhoneFocus = () => {
    //     if (phone === '') {
    //         setPhone('+7 ');
    //     }
    //     setTimeout(() => {
    //         if (phoneRef.current) {
    //             phoneRef.current.selectionStart = 4;
    //             phoneRef.current.selectionEnd = 4;
    //         }
    //     }, 0);
    // };

    // const handleDestinationSelect = (selectedCity: string) => {
    //     setDestination(selectedCity);
    //     calculatePrice(selectedCity, palletCount);
    //     setIsDestinationOpen(false);
    // };

    // const handlePalletCountSelect = (selectedCount: number) => {
    //     setPalletCount(selectedCount);
    //     calculatePrice(destination, selectedCount);
    //     setIsPalletOpen(false);
    // };

    // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(e.target.value);
    // };

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

    // const cities = [
    //     'Москва', 'Казань', 'Санкт-Петербург', 'Екатеринбург', 'Краснодар',
    //     'Алексин', 'Ростов на Дону', 'Воронеж', 'Волгоград', 'Нижний Новгород',
    //     'Рязань', 'Тверь', 'Невиномысск', 'Адыгейск', 'Котовск', 'Владимир', 'Ярославль'
    // ];

    return (
        <div className="pt-[32px] lg:pt-[64px] pb-[74px] lg:pb-[143px] bg-[#07162C] px-[20px] lg:px-[60px] -mt-[20px] -mb-[20px]">
            <div className="flex flex-col justify-center items-center text-white">
                <p className="text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center pb-[16px] md:pb-[32px] lg:pb-[64px]">
                Оформление перевозки
                </p>
                <form className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[78px 58px 58px 58px 58px 58px 58px] gap-x-[10px] md:gap-x-[20px] gap-y-[14px]">
                        <div className="flex flex-col col-span-2">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Откуда</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] md:rounded-[20px] text-[12px] md:text-[16px] border-b border-gray-200"
                                type="text"
                                value="Иваново"
                                disabled
                            />
                            <p className="text-[10px] md:text-[16px] mt-[8px]">
                                *Забор груза по г.Иваново - <strong>бесплатно</strong>
                            </p>
                        </div>
                        <div className="flex flex-col col-span-2">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Куда</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] md:rounded-[20px] text-[12px] md:text-[16px] border-b border-gray-200"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col col-span-2">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Вид груза</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] md:rounded-[20px] text-[12px] md:text-[16px] border-b border-gray-200"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col col span-1">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Вес,кг</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] md:rounded-[20px] text-[12px] md:text-[16px] border-b border-gray-200"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col col span-1">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Объем, куб.м</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] md:rounded-[20px] text-[12px] md:text-[16px] border-b border-gray-200"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col col-span-2">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Имя</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] md:rounded-[20px] text-[12px] border-b md:text-[16px] border-gray-200"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col col-span-2">
                            <label className="text-[12px] md:text-[16px] mb-[8px]">Телефон</label>
                            <input
                                className="bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] md:rounded-[20px] text-[12px] border-b md:text-[16px] border-gray-200"
                                type="text"
                            />
                        </div>
                        <button className="flex justify-center items-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white md:font-bold text-[14px] md:text-[24px] xl:text-[36px] h-[37px] md:h-[64px] xl:h-[84px] col-span-2 md:col-span-4 rounded-[20px] transition-colors mt-[18px]">Заказать</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CargoForm;