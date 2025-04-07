import clsx from "clsx";

const CustomSwitch = ({
  checked,
  onChange,
  disabled,
  name,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled: boolean;
  name: string;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onMouseEnter: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="inline-flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        name={name}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="sr-only peer"
      />
      <div
        className={clsx(
          "w-[37px] h-[14px] rounded-full transition-colors duration-300",
          disabled ? "bg-gray-200" : "bg-gray-300 peer-checked:bg-gray-300",
        )}
      />
      <div
        className={clsx(
          "absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full transition-transform duration-300 shadow-md",
          {
            "bg-white peer-checked:translate-x-[17px] peer-checked:bg-primary":
              true,
            "bg-gray-100": !checked,
            "bg-gray-300": disabled,
          },
        )}
      />
    </label>
  );
};
export default CustomSwitch;
