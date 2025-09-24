import type { ButtonHTMLAttributes } from 'react';
interface VariantClasses {
  [key: string]: string;
}

const variants: VariantClasses = {
  primary: 'bg-blue-500  hover:bg-blue-600',
  secondary: 'bg-gray-500  hover:bg-gray-600',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: keyof typeof variants;
}

export const Button = ({
  type,
  label,
  variant = 'primary',
  onClick,
}: ButtonProps) => (
  <button
    type={type}
    className={`px-4 py-2 rounded text-white cursor-pointer ${variants[variant]}`}
    onClick={onClick}
  >
    {label}
  </button>
);
