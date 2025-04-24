
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 backdrop-blur-sm">
      <div className="bg-white rounded-[20px] p-8 max-w-md w-full mx-4 relative animate-modalEnter">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        <div className="text-center space-y-4">
          <div className="text-green-500 mx-auto w-fit">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800">
            Заявка принята!
          </h3>
          <p className="text-gray-600">
            Спасибо за заказ! Наш логист свяжется с вами.
          </p>
          <button
            onClick={onClose}
            className="bg-[#344E74] text-white px-6 py-3 rounded-[10px] hover:bg-[#506fa1] transition-colors mt-4"
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;