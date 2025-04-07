import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { inputBase, type InputBaseVariants } from "../ui/inputStyles";

type InputBaseProps = {
  isInvalid?: boolean;
  size?: InputBaseVariants["size"];
  multiline?: boolean;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputBase = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputBaseProps
>((props, ref) => {
  const {
    isInvalid,
    size = "md",
    disabled,
    multiline = false,
    ...rest
  } = props;

  const baseClasses = inputBase({
    size,
    state: disabled ? "disabled" : isInvalid ? "invalid" : "default",
    multiline,
  });

  const sharedProps = {
    disabled,
    className: baseClasses,
  };

  return multiline ? (
    <textarea
      {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      {...sharedProps}
      ref={ref as React.Ref<HTMLTextAreaElement>}
    />
  ) : (
    <input
      {...(rest as InputHTMLAttributes<HTMLInputElement>)}
      {...sharedProps}
      ref={ref as React.Ref<HTMLInputElement>}
    />
  );
});
InputBase.displayName = "InputBase";
export default InputBase;
