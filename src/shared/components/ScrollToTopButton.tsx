import { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollPosition > 300);
  };

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      document.documentElement.scrollTop = 0;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-4 lg:right-8 z-50 flex items-center justify-center w-10 h-10 p-8 lg:p-10 rounded-full bg-[#E9EBEECC]/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white font-bold"
      aria-label="Scroll to top"
    >
      <span className="text-xl leading-none">↑</span>
    </button>
  );
};

export { ScrollToTopButton };
