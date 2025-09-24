interface TextareaProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

export const Textarea = ({
  value,
  placeholder,
  onChange,
  errorMessage,
}: TextareaProps) => (
  <div className="flex flex-col gap-[5px]">
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full border rounded-lg px-3 py-2 resize-none"
    />
    {errorMessage && (
      <small className="pl-[12px] text-xs text-red-600">{errorMessage}</small>
    )}
  </div>
);
