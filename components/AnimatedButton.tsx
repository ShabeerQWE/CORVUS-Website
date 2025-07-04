'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AnimatedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  size = 'md'
}: AnimatedButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-accent-blue text-white hover:bg-accent-purple',
    secondary: 'bg-transparent border-2 border-accent-blue text-accent-blue hover:border-accent-purple hover:text-accent-purple',
    ghost: 'bg-transparent text-text-primary hover:bg-bg-gray'
  };

  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const MotionComponent = motion[href ? 'a' : 'button'];

  const content = (
    <MotionComponent
      className={baseClasses}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow: variant === 'primary' ? '0 10px 30px rgba(102, 204, 255, 0.3)' : 'none'
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      {children}
      {href && (
        <motion.svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </motion.svg>
      )}
    </MotionComponent>
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          className={baseClasses}
          whileHover={{
            scale: 1.05,
            boxShadow: variant === 'primary' ? '0 10px 30px rgba(102, 204, 255, 0.3)' : 'none'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
        >
          {children}
          <motion.svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </motion.span>
      </Link>
    );
  }

  return content;
}