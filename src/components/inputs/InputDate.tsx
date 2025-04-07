import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import InputLabel from "./InputLabel";
import "react-datepicker/dist/react-datepicker.css";

const CustomTimeInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => (
  <input
    type="time"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "4px 8px",
      width: "100%",
    }}
  />
);

const isFormInvalid = (err: any) => {
  if (Object.keys(err).length > 0) return true;
  return false;
};
export const InputDate = ({
  name,
  label,
  placeholder,

  disabled = false,
  helperText,
  required,
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

  const [isFocused, setIsFocused] = useState(false);
  const [isHovered] = useState(false);

  return (
    <div className="input-container">
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
      <div className="inputBox">
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                placeholderText={placeholder}
                disabled={disabled}
                customTimeInput={
                  <CustomTimeInput
                    value={field.value ? field.value.toLocaleTimeString() : ""}
                    onChange={(time) => {
                      const date = new Date(field.value);
                      const [hours, minutes] = time.split(":");
                      date.setHours(parseInt(hours, 10));
                      date.setMinutes(parseInt(minutes, 10));
                      field.onChange(date);
                    }}
                  />
                }
                showTimeInput
                dateFormat="Pp"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            );
          }}
        />

        {helperText && !isInvalid && (
          <span
            className="body-s-regular text-secondary"
            style={{ lineHeight: "12px" }}
          >
            {helperText}
          </span>
        )}

        {isInvalid && (
          <span
            className="body-s-regular colorSystemError"
            style={{ lineHeight: "12px" }}
          >
            {inputErrors?.error?.message}
          </span>
        )}
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
