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
        <i
          className={`mt-[0px] text-[24px] leading-[1] static text-white ri-check-line  ${
            checked ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </span>
    </label>
  );
};
