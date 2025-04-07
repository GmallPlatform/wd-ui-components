import { Icon_en, Icon_uk } from "./Icons";
import clsx from "clsx";

interface InputLabelProps {
  label: string;
  options: {
    isInvalid: boolean;
    disabled?: boolean;
    isFocused: boolean;
    isHovered: boolean;
    required?: boolean;
  };
}

const InputLabel = ({ label, options }: InputLabelProps) => {
  const { isInvalid, disabled, isFocused, isHovered, required } = options;

  const IconComponent = label.includes("(uk)")
    ? Icon_uk
    : label.includes("(en)")
      ? Icon_en
      : null;

  const labelStr = label.replace(/ ?\((uk|en)\)/, "");

  const textColor = clsx({
    "text-red-600": isInvalid,
    "text-neutral-400":
      disabled || (!isFocused && !isHovered && !disabled && !isInvalid),
    "text-primary": isFocused,
    "text-neutral-500": isHovered && !isFocused && !disabled,
  });

  return (
    <div className="flex items-center gap-1">
      <span
        className={clsx(
          "inline-flex items-center text-[12px] font-medium leading-[1.15] font-sans",
          textColor,
        )}
      >
        {IconComponent && <IconComponent className="mr-1" />}
        {labelStr}
      </span>

      {required && (
        <span className="text-[12px] font-medium leading-[1.15] font-sans text-red-600">
          *
        </span>
      )}
    </div>
  );
};

export default InputLabel;
