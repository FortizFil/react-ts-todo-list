import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, value = '', placeholder, onChange, errorMessage }, ref) => (
    <div className="flex flex-col gap-[5px]">
      <textarea
        ref={ref}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full min-h-[200px] border rounded-lg px-3 py-2 resize-none"
      />
      {errorMessage && (
        <small className="pl-[12px] text-xs text-red-600">{errorMessage}</small>
      )}
    </div>
  ),
);
