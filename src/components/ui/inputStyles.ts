import { cva, type VariantProps } from "class-variance-authority";

export const inputBase = cva(
  [
    "w-full",
    "p-2",
    "font-sans",
    "rounded-md",
    "border",
    "border-solid",
    "transition-colors",
    "duration-150",
    "hover:border-primary-400",
    "focus:border-primary-600",
    "focus:outline-none",
    "focus:bg-gray-50",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-8 text-[12px]",
        md: "h-10 text-[14px]",
      },
      state: {
        default: "bg-white border-gray-300",
        invalid: "border-red-600 bg-red-50",
        disabled:
          "text-gray-400 cursor-not-allowed bg-gray-100 border-gray-300",
      },
      multiline: {
        true: "resize-none h-32",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
      multiline: false,
    },
  },
);

export type InputBaseVariants = VariantProps<typeof inputBase>;
