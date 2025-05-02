import { useState, useEffect } from 'react';

interface PhoneLinkProps {
  phone: string;
  displayPhone?: string;
  tooltipDuration?: number;
}

const PhoneLink = ({ 
  phone, 
  displayPhone = phone, 
  tooltipDuration = 2000 
}: PhoneLinkProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      e.preventDefault();
      if (!showTooltip) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), tooltipDuration);
      }
    }
  };

  return (
    <div className="relative inline-block">
      <a
        href={isMobile ? `tel:${phone}` : '#'}
        onClick={handleClick}
        className="flex justify-center items-center gap-[8px] bg-[#E9EBEE66] hover:bg-[#506fa1] active:bg-white border-[1px] md:border-[2px] border-[#28282B] hover:border-[#506fa1] hover:text-white active:text-[#344E74] text-[#28282B] py-[8.5px] md:py-[10.5px] lg:py-[18px] px-[16px] lg:px-[30px] rounded-[10px] lg:rounded-[20px]"
      >
        <span className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]">Звонок логисту</span>
        <svg 
            width="18" 
            height="20" 
            viewBox="0 0 18 20" 
            className="shrink-0 text-current"
            style={{fill: 'currentColor'}}
        >
            <path d="M13.4399 20C12.6989 20.0003 11.9708 19.7859 11.3276 19.378L11.2369 19.3213C7.05482 16.6681 3.55607 12.87 1.07484 8.28968L0.601841 7.41536C0.117386 6.5215 -0.0833631 5.47352 0.0315868 4.43843C0.146537 3.40333 0.57057 2.4407 1.23611 1.70393L2.17852 0.658735C2.97046 -0.219578 4.25844 -0.219578 5.04965 0.658735L7.12597 2.96151C7.43845 3.30971 7.6401 3.76136 7.70038 4.24806C7.76065 4.73476 7.67628 5.22999 7.46002 5.65873L6.67961 7.19578C6.6632 7.22812 6.65679 7.26552 6.66134 7.30228C6.66589 7.33904 6.68115 7.37314 6.7048 7.39939L11.3276 12.5263C11.3516 12.5525 11.3826 12.5692 11.416 12.5741C11.4494 12.579 11.4833 12.5718 11.5126 12.5535L12.8963 11.6887L12.897 11.688C13.2837 11.4484 13.7302 11.3549 14.1689 11.4218C14.6077 11.4886 15.0149 11.7121 15.329 12.0584L17.406 14.3628C18.198 15.2411 18.198 16.6696 17.406 17.5471L16.4219 18.6378C16.0299 19.0711 15.5648 19.4144 15.0531 19.6481C14.5415 19.8819 13.9933 20.0014 13.4399 20ZM3.61409 1.59693C3.4629 1.59693 3.31171 1.66081 3.19652 1.78856L2.25411 2.83296C1.81608 3.3179 1.53699 3.95148 1.46131 4.63275C1.38564 5.31403 1.51773 6.00379 1.83654 6.59214L2.30955 7.46646C4.66315 11.8115 7.98192 15.4147 11.9489 17.932L12.0396 17.9887C13.1382 18.6857 14.5205 18.4885 15.4032 17.508L16.3873 16.4173C16.4422 16.3565 16.4857 16.2843 16.5154 16.2048C16.5451 16.1253 16.5604 16.0402 16.5604 15.9542C16.5604 15.8681 16.5451 15.783 16.5154 15.7035C16.4857 15.624 16.4422 15.5519 16.3873 15.491L14.3103 13.1867C14.2189 13.0859 14.1003 13.0209 13.9726 13.0016C13.8449 12.9823 13.715 13.0097 13.6026 13.0797L12.2189 13.9444C11.9154 14.1328 11.5649 14.2064 11.2204 14.1541C10.8759 14.1018 10.5562 13.9265 10.3096 13.6546L5.6868 8.52762C5.4414 8.25446 5.28309 7.89993 5.23592 7.51788C5.18875 7.13584 5.2553 6.74716 5.42546 6.41089L6.20588 4.87464C6.26859 4.74994 6.29301 4.60601 6.27548 4.46457C6.25795 4.32313 6.19941 4.19185 6.10869 4.09054L4.03165 1.78856C3.97686 1.7277 3.91176 1.67945 3.8401 1.64656C3.76844 1.61367 3.69164 1.59681 3.61409 1.59693Z"/>
        </svg>
      </a>

      {!isMobile && showTooltip && (
        <div
          role="tooltip"
          className="absolute top-1/2 left-[220px] lg:left-[280px] -translate-y-1/2 mr-2
                     bg-[#344E74] text-white px-3 py-1.5 rounded-lg
                     text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]
                     animate-fade-in-out whitespace-nowrap"
        >
          {displayPhone}
          <div className="absolute right-full top-1/2 -left-3 -translate-y-1/2
                          w-3 h-3 bg-[#344E74] rotate-45 ml-1.5" />
        </div>
      )}
    </div>
  );
};

export default PhoneLink;