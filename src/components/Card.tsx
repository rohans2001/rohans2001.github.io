import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'glass' | 'glass-strong';
    hover?: boolean;
}

const Card = ({
    children,
    className = '',
    variant = 'glass',
    hover = true
}: CardProps) => {
    return (
        <motion.div
            className={`card ${variant} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -5 } : {}}
        >
            {children}
        </motion.div>
    );
};

export default Card;
