import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import CustomSwitch from "./CustomSwitch";

const isFormInvalid = (err: any) => {
  if (Object.keys(err).length > 0) return true;
  return false;
};
export const InputSwitch = ({
  name,
  label,
  placeholder,

  disabled = false,
  helperText,
  control,
}: {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  helperText?: string;
  required?: boolean;

  control: any;
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);
  const [, setIsFocused] = useState(false);
  const [, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col w-full p-6 gap-10 rounded-2xl border border-gray-200 bg-white">
      <div className="flex items-end gap-10 w-full">
        <div className="flex flex-col justify-center gap-1 flex-1">
          {label && (
            <span className="text-[14px] font-medium text-gray-900">
              {label}
            </span>
          )}
          {placeholder && (
            <span className="text-[12px] text-gray-500 leading-[1.4]">
              {placeholder}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 items-start flex-1">
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <CustomSwitch
                checked={field.value}
                onChange={field.onChange}
                name={field.name}
                disabled={disabled}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            )}
          />

          {helperText && !isInvalid && (
            <span className="text-[12px] font-normal text-gray-500 leading-[1.15]">
              {helperText}
            </span>
          )}

          {isInvalid && (
            <span className="text-[12px] font-medium text-red-600 leading-[1.15]">
              {inputErrors?.error?.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

function findInputError(errors: any, name: string) {
  const filtered: any = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
  return filtered;
}
