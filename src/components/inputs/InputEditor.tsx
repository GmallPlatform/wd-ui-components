import { Control, useController } from "react-hook-form";
import InputLabel from "./InputLabel";
import { useEffect, useState } from "react";
import InputHTMLEditor from "./InputHTMLEditor";
import findInputError from "./utils";

export const InputEditor = ({
  name,
  label,
  placeholder,
  disabled,
  required,
  control,
  size = "md",
  currentItem,
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
  currentItem: any;
  formState: any;
}) => {
  const { errors } = formState;
  const inputErrors = findInputError(errors, name);
  const isInvalid = Object.keys(inputErrors).length > 0;

  const { field: controlledField } = useController({
    name: name,
    control,
    defaultValue: currentItem[name] || "", // Устанавливаем начальное значение
  });
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [initContent, seInitContent] = useState("");
  useEffect(() => {
    seInitContent(`<p>${currentItem[name]}</p>`);
  }, [currentItem, name]);

  return (
    <div
      className="textarea-editor-container"
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
        height: size === "sm" ? "250px" : "350px",
        gap: "6px",
        flex: 1,
      }}
    >
      {label && (
        <InputLabel
          label={label}
          options={{
            required: required,
            isFocused,
            isHovered,
            isInvalid: isInvalid,
          }}
        />
      )}

      <InputHTMLEditor
        key={`${name}-${currentItem.id || "new"}`}
        initialContent={initContent}
        onContentChange={(content) => controlledField.onChange(content)}
        readOnly={disabled}
        onFocusChange={(focused) => setIsFocused(focused)}
        onHoverChange={(hovered) => setIsHovered(hovered)}
        placeholder={placeholder}
        isInvalid={isInvalid}
      />

      {isInvalid && (
        <span className="text-red-600 text-[12px] font-medium leading-[1.15] font-sans">
          {inputErrors?.error?.message}
        </span>
      )}
    </div>
  );
};
