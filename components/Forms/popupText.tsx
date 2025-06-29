import React, { useEffect, useState, useRef } from "react";

interface PopupTextProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string | React.ReactNode;
}

const PopupText: React.FC<PopupTextProps> = ({ isOpen, onClose, title, content }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        setIsAnimating(false);
        document.body.style.overflow = '';
      }, 300);
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isAnimating) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div 
        ref={popupRef}
        className={`bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden transition-all duration-300 transform ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-[#420492] to-[#673AB7]">
          <h2 className="text-xl font-[Satoshi] font-medium text-white">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto p-6 max-h-[calc(80vh-80px)] font-[Satoshi]">
          {typeof content === 'string' ? (
            <div className="prose prose-sm max-w-none text-gray-800">
              <p>{content}</p>
            </div>
          ) : (
            content
          )}
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#420492] text-white font-medium rounded-lg hover:bg-[#5a15b5] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupText;