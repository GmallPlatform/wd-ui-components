import { useState } from "react";
import { Control, Controller } from "react-hook-form";
import InputLabel from "./InputLabel";
import findInputError from "./utils";
import InputBase from "./InputBase";

export const InputText = ({
  name,
  label,
  type,
  placeholder,

  disabled,
  helperText,
  required,
  width,
  control,
  size = "md",
  formState,
}: {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  helperText?: string;
  required?: boolean;
  width?: string;
  control: Control<any>;
  size?: "sm" | "md";
  formState: any;
}) => {
  const { errors } = formState;

  const inputErrors = findInputError(errors, name);
  const isInvalid = Object.keys(inputErrors).length > 0;
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full" style={width ? { width } : {}}>
      {label && (
        <InputLabel
          label={label}
          options={{
            isInvalid,
            disabled,
            isFocused,
            isHovered,
            required,
          }}
        />
      )}

      <div className="flex flex-col w-full relative">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => {
            // Ensure field.value is always defined
            const fieldWithValue = {
              ...field,
              value: field.value === undefined ? "" : field.value,
            };

            return type === "textarea" ? (
              <InputBase
                {...fieldWithValue}
                size={size}
                multiline={true}
                placeholder={placeholder}
                disabled={disabled}
                isInvalid={isInvalid}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                  setIsFocused(false);
                  field.onBlur();
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            ) : (
              <InputBase
                {...fieldWithValue}
                size={size}
                multiline={false}
                placeholder={placeholder}
                disabled={disabled}
                isInvalid={isInvalid}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                  setIsFocused(false);
                  field.onBlur();
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            );
          }}
        />
      </div>

      {helperText && !isInvalid && (
        <span className="text-neutral-500 text-[12px] font-medium leading-[1.15] font-sans">
          {helperText}
        </span>
      )}

      {isInvalid && (
        <span className="text-red-600 text-[12px] font-medium leading-[1.15] font-sans">
          {inputErrors?.error?.message}
        </span>
      )}
    </div>
  );
};
