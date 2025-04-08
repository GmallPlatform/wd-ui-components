import { Controller } from "react-hook-form";
import Select from "react-select";
import InputLabel from "./InputLabel";
import findInputError from "./utils";
import { useState } from "react";
import clsx from "clsx";

interface Option {
  id: string;
  name: string;
}
interface OptionForSelect {
  label: string;
  value: string;
}

interface InputSelectProps {
  name: string;
  label?: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  control: any;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  noOptionsMessage?: string;
  formState: any;
}

export const InputSelect = ({
  name,
  label,
  options,
  placeholder,
  required,
  disabled,
  helperText,
  control,
  isClearable,
  isSearchable,
  noOptionsMessage,
  isMulti,
  formState,
}: InputSelectProps) => {
  const { errors } = formState;

  const inputErrors = findInputError(errors, name);
  const isInvalid = Object.keys(inputErrors).length > 0;

  const hasError = !!errors[name];

  const [isFocused, setIsFocused] = useState(false);
  const [isHovered] = useState(false);

  // Приводим к формату react-select
  const reactSelectOptions = options.map((opt) => ({
    value: opt.id,
    label: opt.name,
  }));

  return (
    <div className="flex flex-col gap-1 w-full">
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

      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => {
          const selectedOptions = isMulti
            ? reactSelectOptions.filter((opt) =>
                field.value?.includes(opt.value),
              )
            : reactSelectOptions.find((opt) => opt.value === field.value);

          return (
            <Select
              options={reactSelectOptions}
              defaultValue={selectedOptions || null}
              isMulti={isMulti}
              // value={selectedOption || null}
              onChange={(selected) =>
                field.onChange(
                  isMulti
                    ? (selected as OptionForSelect[])?.map((opt) => opt.value)
                    : (selected as OptionForSelect)?.value,
                )
              }
              onBlur={field.onBlur}
              placeholder={placeholder || "Выберите значение"}
              isClearable={isClearable}
              isSearchable={isSearchable}
              isDisabled={disabled}
              required={required}
              noOptionsMessage={() => noOptionsMessage || "Ничего не найдено"}
              onFocus={() => setIsFocused(true)}
              onMenuOpen={() => setIsFocused(true)}
              onMenuClose={() => setIsFocused(false)}
              classNames={{
                control: () =>
                  clsx(
                    "w-full px-3 text-sm font-sans rounded-md border border-solid transition-colors duration-150",
                    "h-10 leading-[1.15]",
                    {
                      // "bg-white border-gray-300": !isInvalid && !disabled,

                      "text-gray-400 cursor-not-allowed bg-gray-100 border-gray-300":
                        disabled,
                      "hover:border-primary-400": !disabled && isHovered,
                      "focus:outline-none focus:border-primary-600 focus:bg-gray-50":
                        !disabled,
                      // "border-primary-600": isFocused,
                      // "border-primary-400":
                      //   isHovered && !isFocused && !isInvalid,
                      // "border-red-600 bg-red-50": isInvalid,
                    },
                  ),
                menu: () => "bg-white border shadow-md rounded text-sm z-50",

                singleValue: () => "text-sm leading-[1.15]",
                placeholder: () => "text-red-500 text-sm",
                noOptionsMessage: () =>
                  "text-muted-foreground text-sm px-3 py-2",
              }}
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: 40,
                  height: 40,
                  boxShadow: "none",
                  paddingLeft: 2,
                  ...(isInvalid && {
                    backgroundColor: "#fef2f2",
                    borderColor: "#ef4444",
                  }),
                }),
                option: (base) => ({
                  ...base,
                  height: 32,
                  paddingTop: 4,
                  paddingBottom: 4,
                }),
                indicatorsContainer: (base) => ({
                  ...base,
                  height: 40,
                }),
                menu: (base) => ({
                  ...base,
                  marginTop: 4,
                  zIndex: 100,
                  boxShadow: "none",

                  border: "1px solid #75649d",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                  ...theme.colors,
                  primary: "#75649d",
                  primary25: "#d0cee4",
                  // primary50: "#52466c",
                  neutral20: "#d1d5db",
                  neutral30: "#9ca3af",
                },
              })}
            />
          );
        }}
      />

      {helperText && !hasError && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}

      {hasError && (
        <span className="text-xs text-red-500">
          {errors[name]?.message?.toString() ?? "Обязательное поле"}
        </span>
      )}
    </div>
  );
};
