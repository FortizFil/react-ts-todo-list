interface VariantClasses {
  [key: string]: string;
}

const variants: VariantClasses = {
  primary: 'bg-blue-500  hover:bg-blue-600',
  secondary: 'bg-gray-500  hover:bg-gray-600',
};

interface ButtonProps {
  label: string;
  variant?: keyof typeof variants;
  onClick: () => void;
}

export const Button = ({
  label,
  variant = 'primary',
  onClick,
}: ButtonProps) => (
  <button
    className={`px-4 py-2 rounded text-white ${variants[variant]}`}
    onClick={onClick}
  >
    {label}
  </button>
);
