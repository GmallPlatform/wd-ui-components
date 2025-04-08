import { Control, useController } from "react-hook-form";
import InputLabel from "./InputLabel";
import { useState } from "react";
import InputHTMLEditor from "./InputHTMLEditor";

export const InputEditor = ({
  name,
  label,

  placeholder,
  disabled,
  required,
  control,
  size = "md",
  currentItem,
  requiredText,
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
  requiredText?: string;
}) => {
  const { field: controlledField, fieldState } = useController({
    name: name,
    control,
    defaultValue: currentItem[name] || "", // Устанавливаем начальное значение
    rules: {
      required: required ? requiredText : false, // Добавляем валидацию
    },
  });
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
            isInvalid: Boolean(fieldState.error),
          }}
        />
      )}

      <InputHTMLEditor
        key={`${name}-${currentItem.id || "new"}`}
        initialContent={currentItem[name] || ""}
        onContentChange={(content) => controlledField.onChange(content)} // Передаем изменение значения в react-hook-form
        readOnly={disabled}
        onFocusChange={(focused) => setIsFocused(focused)}
        onHoverChange={(hovered) => setIsHovered(hovered)}
        placeholder={placeholder}
      />
      {fieldState.error && (
        <span className="error-text">{fieldState.error.message}</span>
      )}
    </div>
  );
};
