import { PropsWithChildren } from 'react';

// Definition of sizes and types
const sizes = {
  small: 'text-sm shadow-sm px-2 py-1',
  medium: 'px-4 py-2',
  large: 'px-6 py-3',
};

const types = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
};

// Button Component
export interface ButtonProps {
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Button = ({
  children,
  type = 'primary',
  size = 'medium',
  className,
  additionalClasses, // additionalClasses = 'rounded',
}: PropsWithChildren<ButtonProps & { additionalClasses?: string }>) => {
  const buttonClasses = [
    'font-semibold',
    'text-white',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-indigo-600',
    sizes[size],
    types[type],
    className,
    additionalClasses,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} type="button">
      {children}
    </button>
  );
};
