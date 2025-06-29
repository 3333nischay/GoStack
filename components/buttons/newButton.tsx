import React, { ButtonHTMLAttributes } from 'react';

interface NewButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  bgColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const NewButton: React.FC<NewButtonProps> = ({
  text,
  bgColor = '#D3B6FB',
  textColor = 'black',
  size = 'md',
  fullWidth = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...restProps
}) => {
  const sizeClasses = {
    sm: 'px-4 py-1 text-xs sm:text-sm',
    md: 'px-6 py-1.5 sm:py-2 text-sm sm:text-base',
    lg: 'px-8 py-2 sm:py-2.5 text-base sm:text-lg',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`
        ${fullWidth ? 'w-full' : 'sm:w-auto'} 
        ${sizeClasses[size]}
        font-semibold
        rounded-lg
        transition-all
        duration-300
        group
        ${disabled ? 'opacity-70 cursor-not-allowed' : ''}
        ${className}
        hover:${disabled ? '' : 'shadow-[7px_7px_7px_-1px_#9747FF]'}
        active:${disabled ? '' : 'translate-x-[2px] translate-y-[2px] shadow-none'}
      `}
      style={{ 
        backgroundColor: bgColor,
        color: textColor,
      }}
      {...restProps}
    >
      <span className="transition-all duration-300 group-hover:font-bold">
        {text}
      </span>
    </button>
  );
};

export default NewButton;