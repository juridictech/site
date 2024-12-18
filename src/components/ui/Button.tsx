import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-colors";
  const variants = {
    primary: "text-white bg-black hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-lime-500",
    secondary: "text-black bg-lime-400 hover:bg-lime-500"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5" />}
    </button>
  );
};

export default Button;