import { motion } from 'framer-motion';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd'> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  icon?: ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '',
  ...props 
}: ButtonProps) => {
  return (
    <motion.button
      className={`btn btn-${variant} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </motion.button>
  );
};

export default Button;
