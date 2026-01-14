import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary-main text-primary-contrast hover:bg-primary-dark hover:scale-105 shadow-md hover:shadow-lg active:scale-95 focus:ring-primary-main",
        secondary: "bg-secondary-main text-white hover:bg-secondary-dark hover:scale-105 shadow-md hover:shadow-lg active:scale-95 focus:ring-secondary-main",
        outline: "border-2 border-neutral-border bg-transparent text-neutral-text_primary hover:border-neutral-text_secondary hover:bg-neutral-surface active:scale-95 focus:ring-neutral-border",
        ghost: "bg-transparent text-neutral-text_primary hover:bg-neutral-surface hover:text-primary-main active:scale-95 focus:ring-transparent"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
        xl: "px-10 py-4 text-xl"
    };

    const variantStyles = variants[variant] || variants.primary;
    const sizeStyles = sizes[size] || sizes.md;

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
