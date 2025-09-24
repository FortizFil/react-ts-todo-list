import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, value = '', placeholder, onChange, errorMessage }, ref) => (
    <div className="flex flex-col gap-[5px]">
      <input
        ref={ref}
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="w-full border rounded-lg px-3 py-2"
      />
      {errorMessage && (
        <small className="pl-[12px] text-xs text-red-600">{errorMessage}</small>
      )}
    </div>
  ),
);
