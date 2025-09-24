import type { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-[40px] h-[40px] flex items-center justify-center rounded cursor-pointer hover:border-2 hover:border-gray-400 "
    >
      <i
        className={`mt-[0px] text-[24px] leading-[1] static text-gray-400 ${icon}`}
      />
    </button>
  );
};
