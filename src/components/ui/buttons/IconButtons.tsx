import React, { ButtonHTMLAttributes } from "react";

// Определяем типы для вариантов и размеров иконочных кнопок
type IconButtonVariant = "primary" | "secondary" | "tertiary";
type IconButtonSize = "sm" | "md" | "lg"; // 24px, 32px, 40px

// Определяем стили кнопок с иконками
const iconButtonStyles = {
  base: "cursor-pointer inline-flex justify-center items-center rounded-md outline-0 transition-colors duration-200 focus:outline-none focus-visible:outline-none",

  // Primary (Contained) - темно-фиолетовые иконочные кнопки
  primary:
    "border-none text-white bg-primary-900 hover:bg-primary-700 active:bg-primary-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none",

  // Secondary (Outlined) - белые с обводкой
  secondary:
    "border border-solid border-gray-200 bg-white text-gray-800 hover:border-gray-400 active:border-gray-600 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:pointer-events-none",

  // Tertiary - прозрачные кнопки с иконкой
  tertiary:
    "border-none bg-transparent text-primary-900 hover:bg-primary-50 active:bg-primary-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none",

  sizes: {
    sm: "w-8 h-8", // 32px
    md: "w-10 h-10", // 40px
    lg: "w-14 h-14", // 56px
  },
};

// Интерфейс для иконочных кнопок
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  className?: string;
}

// Компонент иконочной кнопки
const IconButton: React.FC<IconButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const classes = [
    iconButtonStyles.base,
    iconButtonStyles[variant],
    iconButtonStyles.sizes[size],
    className,
  ].join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Специализированные компоненты для иконочных кнопок
// interface PrimaryIconButtonProps extends Omit<IconButtonProps, "variant"> {}
// interface SecondaryIconButtonProps extends Omit<IconButtonProps, "variant"> {}
// interface TertiaryIconButtonProps extends Omit<IconButtonProps, "variant"> {}

const PrimaryIconButton: React.FC<IconButtonProps> = (props) => (
  <IconButton variant="primary" {...props} />
);

const SecondaryIconButton: React.FC<IconButtonProps> = (props) => (
  <IconButton variant="secondary" {...props} />
);

const TertiaryIconButton: React.FC<IconButtonProps> = (props) => (
  <IconButton variant="tertiary" {...props} />
);

// Демонстрационный компонент для иконочных кнопок
const IconButtonShowcase: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Icon Buttons</h1>

      {/* Primary Icon Buttons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Primary Icon Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <PrimaryIconButton size="lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </PrimaryIconButton>
          <PrimaryIconButton>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </PrimaryIconButton>
          <PrimaryIconButton size="sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </PrimaryIconButton>
          <PrimaryIconButton disabled>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </PrimaryIconButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;PrimaryIconButton size="lg"&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/PrimaryIconButton&gt;
            <br />
            <br />
            &lt;PrimaryIconButton&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/PrimaryIconButton&gt;
            <br />
            <br />
            &lt;PrimaryIconButton size="sm"&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/PrimaryIconButton&gt;
            <br />
            <br />
            &lt;PrimaryIconButton disabled&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/PrimaryIconButton&gt;
          </code>
        </div>
      </section>

      {/* Secondary Icon Buttons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Secondary Icon Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <SecondaryIconButton size="lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </SecondaryIconButton>
          <SecondaryIconButton>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </SecondaryIconButton>
          <SecondaryIconButton size="sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </SecondaryIconButton>
          <SecondaryIconButton disabled>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </SecondaryIconButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;SecondaryIconButton size="lg"&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/SecondaryIconButton&gt;
            <br />
            <br />
            &lt;SecondaryIconButton&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/SecondaryIconButton&gt;
            <br />
            <br />
            &lt;SecondaryIconButton size="sm"&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/SecondaryIconButton&gt;
            <br />
            <br />
            &lt;SecondaryIconButton disabled&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/SecondaryIconButton&gt;
          </code>
        </div>
      </section>

      {/* Tertiary Icon Buttons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Tertiary Icon Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <TertiaryIconButton size="lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </TertiaryIconButton>
          <TertiaryIconButton>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </TertiaryIconButton>
          <TertiaryIconButton size="sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </TertiaryIconButton>
          <TertiaryIconButton disabled>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </TertiaryIconButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;TertiaryIconButton size="lg"&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/TertiaryIconButton&gt;
            <br />
            <br />
            &lt;TertiaryIconButton&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/TertiaryIconButton&gt;
            <br />
            <br />
            &lt;TertiaryIconButton size="sm"&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/TertiaryIconButton&gt;
            <br />
            <br />
            &lt;TertiaryIconButton disabled&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &lt;/TertiaryIconButton&gt;
          </code>
        </div>
      </section>
    </div>
  );
};

export {
  IconButton,
  PrimaryIconButton,
  SecondaryIconButton,
  TertiaryIconButton,
  IconButtonShowcase,
};
