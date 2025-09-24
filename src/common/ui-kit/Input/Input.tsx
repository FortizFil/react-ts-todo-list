interface InputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

export const Input = ({
  value,
  placeholder,
  onChange,
  errorMessage,
}: InputProps) => (
  <div className="flex flex-col gap-[5px]">
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      autoComplete="off"
      className="w-full border rounded-lg px-3 py-2"
    />
    {errorMessage && (
      <small className="pl-[12px] text-xs text-red-600">{errorMessage}</small>
    )}
  </div>
);
