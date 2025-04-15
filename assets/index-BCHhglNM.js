import{j as e,r}from"./index-DsRsO270.js";import{c as B,d as $}from"./Document-CHYAIlvy.js";import{g as T,d as M,c as g,a as u,b as U,e as O,p as V}from"./Phone-mR-WMW75.js";const q="data:image/svg+xml,%3csvg%20width='54'%20height='54'%20viewBox='0%200%2054%2054'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M52%2036.8589V16.9366C51.999%2016.0632%2051.7418%2015.2054%2051.2543%2014.4492C50.7667%2013.6931%2050.0659%2013.0651%2049.2222%2012.6284L29.7778%202.66727C28.9332%202.23013%2027.9752%202%2027%202C26.0248%202%2025.0668%202.23013%2024.2222%202.66727L4.77778%2012.6284C3.93406%2013.0651%203.23328%2013.6931%202.74573%2014.4492C2.25817%2015.2054%202.001%2016.0632%202%2016.9366V36.8589C2.001%2037.7323%202.25817%2038.5901%202.74573%2039.3463C3.23328%2040.1025%203.93406%2040.7304%204.77778%2041.1671L24.2222%2051.1282C25.0668%2051.5654%2026.0248%2051.7955%2027%2051.7955C27.9752%2051.7955%2028.9332%2051.5654%2029.7778%2051.1282L49.2222%2041.1671C50.0659%2040.7304%2050.7667%2040.1025%2051.2543%2039.3463C51.7418%2038.5901%2051.999%2037.7323%2052%2036.8589Z'%20stroke='%23F8F4F4'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.74951%2014.3457L26.9995%2026.9217L51.2495%2014.3457'%20stroke='%23F8F4F4'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26.9998%2052.0005V26.8984'%20stroke='%23F8F4F4'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",A=[{title:"Полный спектр услуг",description:"FTL, LTL, перевозки негабаритных и тяжеловесных объектов",imageURL:q},{title:"Бесплатное изменение дня доставки",description:"По электронному письму или звонку ведущему специалисту, до наступления дня ранее указанной доставки",imageURL:B},{title:"Организация пропусков",description:"Предоставляем данные водителя для пропуска заранее",imageURL:$}],H=()=>e.jsx("div",{className:"flex flex-col md:flex-row  gap-[24px] md:gap-[21px] justify-center items-center md:items-start bg-[#E9EBEE] rounded-[20px] py-[32px] lg:py-[64px] px-[20px] md:px-[41px] lg:px-[60px] -mt-[20px] relative",children:A.map((p,o)=>e.jsxs("div",{className:"bg-[#344E74] text-white hover:scale-110 transition-all transform-gpu py-[20px] xl:py-[32px] px-[32px] md:px-[9px] rounded-[20px] flex flex-col items-center justify-center gap-[3.71px] xl:gap-[16px] w-full max-w-[364px] overflow-hidden h-fit",children:[e.jsx("img",{className:"w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]",src:p.imageURL,alt:p.title}),e.jsx("p",{className:"text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-center font-bold ",children:p.title}),e.jsx("p",{className:"text-[10px] md:text-[12px] lg:text-[16px] w-full text-center",children:p.description})]},o))}),K=()=>{const[p,o]=r.useState(""),[i,d]=r.useState(""),[m,j]=r.useState(""),[n,f]=r.useState(!1),[y,N]=r.useState([]),[w,v]=r.useState(!0),a=r.useRef(null),C=r.useRef(null);r.useEffect(()=>{(async()=>{try{const x=await T(M(g(u,"cities"),"cities"));if(x.exists()){const s=x.data().list;if(N(s),s.length>0){const l=s[0];o(l.name)}}}catch(x){console.error("Error loading cities:",x),alert("Failed to load cities data")}finally{v(!1)}})()},[]);const k=t=>{let x="+7 ";return t.length>0&&(x+=`(${t.substring(0,3)}`),t.length>3&&(x+=`) ${t.substring(3,6)}`),t.length>6&&(x+=`-${t.substring(6,8)}`),t.length>8&&(x+=`-${t.substring(8,10)}`),x},E=(t,x)=>{let s=0;for(let l=0;l<x;l++)/\d/.test(t[l])&&s++;return s},D=(t,x)=>{let s=0;for(let l=0;l<t.length;l++)if(/\d/.test(t[l])&&(s++,s===x))return l+1;return t.length},L=t=>{const x=t.target,s=x.selectionStart||0,l=x.value,R=E(l,s),c=l.replace(/\D/g,""),X=c.startsWith("7")?c.substring(1):c,b=k(X.substring(0,10));d(b),setTimeout(()=>{if(a.current){const h=D(b,R);a.current.selectionStart=h,a.current.selectionEnd=h}},0)},F=t=>{/\d|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(t.key)||t.preventDefault()},S=()=>{i===""&&d("+7 "),setTimeout(()=>{a.current&&(a.current.selectionStart=4,a.current.selectionEnd=4)},0)},P=async t=>{if(t.preventDefault(),!p||!m||i.replace(/\D/g,"").length<11){alert("Please fill all required fields correctly");return}try{await U(g(u,"orders"),{destination:p,name:m,phone:i.replace(/\D/g,""),timestamp:new Date}),alert("Order created successfully!"),j(""),d("+7 ")}catch(x){console.error("Error submitting order:",x),alert("Failed to create order")}};return w?e.jsx("div",{className:"flex justify-center items-center h-screen bg-[#07162C]",children:e.jsx("div",{className:"text-white text-2xl",children:"Loading..."})}):e.jsx("div",{className:"pt-[32px] lg:pt-[64px] pb-[74px] lg:pb-[143px] bg-[#07162C] px-[20px] lg:px-[60px] -mt-[20px] -mb-[20px]",children:e.jsxs("div",{className:"flex flex-col justify-center items-center text-white",children:[e.jsx("p",{className:"text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center pb-[16px] md:pb-[32px] lg:pb-[64px]",children:"Оформление перевозки"}),e.jsx("form",{className:"w-full",children:e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 grid-rows-[78px 58px 58px 58px 58px 58px 58px] gap-x-[10px] md:gap-x-[20px] gap-y-[14px]",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Откуда"}),e.jsx("input",{className:"bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200",type:"text",value:"Иваново",disabled:!0}),e.jsxs("p",{className:"text-[10px] md:text-[16px] mt-[8px]",children:["*Забор груза по г.Иваново - ",e.jsx("strong",{children:"бесплатно"})]})]}),e.jsxs("div",{className:"flex flex-col col-span-2 relative",ref:C,children:[e.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Куда"}),e.jsxs("div",{className:`bg-white text-black py-[8px] md:py-[20px] px-[16px] text-[12px] md:text-[16px] border-b border-gray-200 w-full cursor-pointer flex justify-between items-center transition-[border-radius] ${n?"duration-100":"duration-200 delay-200"} ${n?"rounded-t-[10px] rounded-b-none":"rounded-[10px]"}`,onClick:()=>f(!n),children:[e.jsx("span",{children:p||"Select city"}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:`transform transition-transform duration-200 ${n?"rotate-180":""}`,children:e.jsx("path",{d:"M7 10L12 15L17 10H7Z",fill:"#07162C"})})]}),e.jsx("div",{className:`absolute top-full md:top-21.5 left-0 right-0 z-10 bg-white text-black overflow-hidden transition-all min-w-full shadow-lg ${n?"max-h-[300px] rounded-b-[10px] duration-200 delay-100":"max-h-0 duration-200"}`,children:e.jsx("div",{className:"overflow-y-auto max-h-[300px]",children:y.map(t=>e.jsx("div",{className:`py-[10px] md:py-[15px] px-[16px] text-[12px] md:text-[16px] cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${p===t.name?"bg-gray-100 font-medium":""}`,onClick:()=>{o(t.name),f(!1)},children:t.name},t.name))})})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Вид груза"}),e.jsx("input",{className:"bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200",type:"text"})]}),e.jsxs("div",{className:"flex flex-col col span-1",children:[e.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Вес,кг"}),e.jsx("input",{className:"bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200",type:"text"})]}),e.jsxs("div",{className:"flex flex-col col span-1",children:[e.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Объем, куб.м"}),e.jsx("input",{className:"bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] text-[12px] md:text-[16px] border-b border-gray-200",type:"text"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Имя"}),e.jsx("input",{className:"bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] text-[12px] border-b md:text-[16px] border-gray-200",type:"text"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"text-[12px] md:text-[16px] mb-[8px]",children:"Телефон"}),e.jsx("input",{ref:a,className:"bg-white text-black py-[10px] md:py-[20px] px-[16px] rounded-[10px] text-[12px] border-b md:text-[16px] border-gray-200",type:"tel",value:i,onChange:L,onKeyDown:F,onFocus:S,placeholder:"+7 (XXX) XXX-XX-XX",required:!0})]}),e.jsx("button",{onClick:P,className:"flex justify-center items-center bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white md:font-bold text-[14px] md:text-[24px] xl:text-[36px] h-[37px] md:h-[64px] xl:h-[84px] col-span-2 md:col-span-4 rounded-[10px] transition-colors mt-[18px]",children:"Заказать"})]})})]})})},Z=()=>e.jsx("div",{className:"pt-[42px] bg-[#07162C] pb-[42px] lg:pb-[80px] px-[20px] md:px-[40px] lg:px-[60px] -mt-[10px]",children:e.jsxs("div",{className:"flex flex-col justify-center items-center text-white",children:[e.jsx("p",{className:"text-[20px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-extrabold text-center pb-[16px] md:pb-[32px]",children:"Внутрироссийские грузовые перевозки"}),e.jsx("p",{className:"text-[12px] md:text-[16px] xl:text-[20px] text-justify",children:"Логистические перевозки по России — это наша специализация, включающая доставку грузов в любой уголок страны. Мы предлагаем широкий выбор транспортных решений, от сборных до полногрузовых перевозок, с учетом всех требований клиента. Каждая доставка осуществляется с максимальной надежностью, точностью и заботой о вашем грузе"})]})}),z=()=>e.jsx("div",{className:"flex flex-col md:flex-row rounded-b-[10px] overflow-hidden leading-none",children:e.jsxs("div",{className:"flex flex-col pt-[88px] md:pt-[120px] lg:pt-[132px] xl:pt-[184px] 2xl:pt-[206px] px-[20px] md:pl-[40px] md:pr-0 lg:pl-[60px] pb-0 md:pb-[52px] lg:pb-[46px] xl:pb-[62px] bg-[#E9EBEE] w-full",children:[e.jsx("p",{className:"text-start text-[20px] sm:text-[30px] md:text-[32px] lg:text-[36px] 2xl:text-[48px] 3xl:text-[72px] font-extrabold mb-[8px] md:mb-[12px]",children:"Логистические перевозки по России"}),e.jsx("p",{className:"text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] mb-[16px] md:mb-[32px] lg:mb-[24px] xl:mb-[32px] w-full ",children:"Надежная доставка грузов из Иваново в любой регион страны"}),e.jsxs("div",{className:"flex flex-col gap-[16px] pb-[22px] xl:pb-[32px] pr-[20%]",children:[e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx("p",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]",children:"Доставка точно в срок"}),e.jsx("p",{className:"text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]",children:"Координируем водителей с учетом сроков, чтобы ваш груз прибыл вовремя"})]}),e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx("p",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]",children:"Поддержка 24/7"}),e.jsx("p",{className:"text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]",children:"Всегда на связи для консультаций и решения любых вопросов"})]}),e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[e.jsx("p",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-1 before:bg-black before:rounded-full ml-[20px]",children:"Без комиссий за простой "}),e.jsx("p",{className:"text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]",children:"Никаких дополнительных платежей за ожидание выгрузки на складе"})]})]}),e.jsxs("div",{className:"flex gap-[16px] w-full pb-[224px] md:pb-0",children:[e.jsxs("a",{className:"flex justify-center items-center gap-[8px] bg-[#344E74] hover:bg-[#506fa1] active:bg-white border-1 border-[#344E74] active:text-[#344E74] text-white py-[8.5px] md:py-[10.5px] lg:py-[18px] px-[16px] lg:px-[30px] rounded-[10px] lg:rounded-[20px]",children:[e.jsx("span",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]",children:"Заказать"}),e.jsx("img",{src:O,alt:""})]}),e.jsxs("a",{className:"flex justify-center items-center gap-[8px] bg-white hover:bg-[#506fa1] active:bg-white border-[1px] md:border-[2px] border-[#28282B] active:text-[#344E74] text-[#28282B] py-[8.5px] md:py-[10.5px] lg:py-[18px] px-[16px] lg:px-[30px] rounded-[10px] lg:rounded-[20px]",children:[e.jsx("span",{className:"text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]",children:"Звонок логисту"}),e.jsx("img",{src:V,alt:""})]})]})]})}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(Z,{}),e.jsx(H,{}),e.jsx(K,{})]});export{J as default};
