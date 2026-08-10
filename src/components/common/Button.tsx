import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none';

  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500 shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30',
    secondary: 'bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-700 dark:hover:bg-slate-600 focus:ring-slate-800',
    outline: 'border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white focus:ring-orange-500',
    ghost: 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-500',
    dark: 'bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 focus:ring-slate-900 shadow-xl'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-bold'
  };

  const combinedClasses = clsx(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};
