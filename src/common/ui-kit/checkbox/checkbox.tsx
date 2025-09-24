type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <span
        className="
              w-5 h-5 flex items-center justify-center rounded border-2 border-gray-400
              peer-checked:border-blue-500 peer-checked:bg-blue-500
              transition-colors
            "
      >
        <svg
          className={`w-3 h-3 text-white transition-opacity ${
            checked ? 'opacity-100' : 'opacity-0'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
    </label>
  );
};
