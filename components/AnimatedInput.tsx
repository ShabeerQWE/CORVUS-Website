'use client';

import { motion } from 'framer-motion';
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  textarea?: false;
}

interface AnimatedTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea: true;
}

type Props = AnimatedInputProps | AnimatedTextareaProps;

export const AnimatedInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ label, error, textarea, className, ...props }, ref) => {
    const baseClasses = `w-full px-4 py-2 bg-bg-black border rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-300 ${
      error ? 'border-red-500' : 'border-border-gray hover:border-accent-blue/50'
    } ${className || ''}`;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label className="block text-sm font-medium text-text-secondary mb-1">
          {label}
        </label>
        <motion.div
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {textarea ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={baseClasses}
              {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={baseClasses}
              {...(props as InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    );
  }
);

AnimatedInput.displayName = 'AnimatedInput';