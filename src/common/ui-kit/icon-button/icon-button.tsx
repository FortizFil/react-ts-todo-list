interface IconButtonProps {
  icon: string;
}

export const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <button className="w-[40px] h-[40px] flex items-center justify-center rounded cursor-pointer hover:border-2 hover:border-gray-400 ">
      <i
        className={`mt-[0px] text-[24px] leading-[1] static text-gray-400 ${icon}`}
      />
    </button>
  );
};
