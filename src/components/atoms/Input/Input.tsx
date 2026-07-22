// Input atom component

'use client';

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/shared/utils';
import styles from './Input.module.css';

interface BaseInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  fullWidth?: boolean;
}

interface TextInputProps extends BaseInputProps, InputHTMLAttributes<HTMLInputElement> {
  multiline?: false;
  rows?: never;
}

interface TextareaProps extends BaseInputProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  multiline: true;
  rows?: number;
}

type InputProps = TextInputProps | TextareaProps;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, error, helperText, leftIcon, fullWidth = true, multiline, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className={cn(styles.wrapper, fullWidth && styles.fullWidth, className)}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={cn(styles.inputContainer, error && styles.hasError)}>
          {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
          {multiline ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              id={inputId}
              className={cn(styles.input, styles.textarea, leftIcon && styles.hasLeftIcon)}
              rows={(props as TextareaProps).rows || 4}
              aria-invalid={!!error}
              aria-describedby={error ? `${inputId}-error` : undefined}
              {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              id={inputId}
              className={cn(styles.input, leftIcon && styles.hasLeftIcon)}
              aria-invalid={!!error}
              aria-describedby={error ? `${inputId}-error` : undefined}
              {...(props as InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
        </div>
        {error && (
          <span id={`${inputId}-error`} className={styles.error} role="alert">
            {error}
          </span>
        )}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
