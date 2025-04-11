import React, { useState, ButtonHTMLAttributes } from "react";

// Определяем типы для вариантов и размеров кнопок
type ButtonVariant =
  | "primary" // Primary (Contained)
  | "secondary" // Secondary (Outlined)
  | "primaryText" // Primary (Text/Link)
  | "danger"
  | "dangerOutlined"
  | "tertiary"
  | "chips";

type ButtonSize = "sm" | "md" | "lg";

// Определяем стили кнопок с помощью объекта с цветами из скриншотов Figma
const buttonStyles = {
  base: "cursor-pointer inline-flex justify-center items-center gap-2 rounded-md outline-0 transition-colors duration-200 focus:outline-none focus-visible:outline-none",

  // Primary (Contained) - темно-фиолетовый
  primary:
    "border-none text-white bg-primary-900 hover:bg-primary-700 active:bg-primary-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none",

  // Secondary (Outlined) - белый с обводкой
  secondary:
    "border border-solid border-gray-200 bg-white text-gray-800 hover:border-gray-400 active:border-gray-600 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:pointer-events-none",

  // Primary (Text/Link) - фиолетовый текст без фона
  primaryText:
    "border-none bg-transparent text-primary-900 hover:bg-primary-50 active:bg-primary-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none",

  // Danger (красная кнопка)
  danger:
    "border-none text-white bg-red-700 hover:bg-red-900 active:bg-red-800 disabled:bg-gray-50 disabled:text-red-400 disabled:cursor-not-allowed disabled:pointer-events-none",

  // Danger Outlined (красная обводка)
  dangerOutlined:
    "border border-solid border-gray-200 bg-white text-red-600 hover:border-red-800 active:border-red-800 active:bg-red-100 disabled:border-none disabled:bg-gray-100 disabled:text-red-400 disabled:cursor-not-allowed disabled:pointer-events-none",

  // Tertiary (просто текст)
  tertiary:
    "h-[30px] p-[6px_4px] text-primary-900 rounded-none border-none bg-transparent hover:border-b hover:border-solid hover:border-primary-900 disabled:text-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none",

  // Chips (закругленные маленькие кнопки)
  chips:
    "h-8 min-w-8 p-2 rounded-full bg-gray-100 text-gray-600 border-none hover:text-primary-900 hover:bg-primary-200 active:text-primary-900 active:bg-primary-100 data-[chosen=true]:bg-primary-200 data-[chosen=true]:text-primary-900 disabled:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:pointer-events-none",

  sizes: {
    sm: "h-8 py-2 px-3", // 32px
    md: "h-10 py-2.5 px-4", // 40px
    lg: "h-14 py-3 px-5 text-lg", // 56px
  },

  fullWidth: "w-full",
};

// Определяем интерфейс пропсов для компонента Button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  chosen?: boolean;
  fullWidth?: boolean;
  className?: string;
  outlined?: boolean;
}

// Компонент кнопки
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  chosen = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  // Определяем классы на основе варианта и размера
  const classes = [
    buttonStyles.base,
    buttonStyles[variant],
    buttonStyles.sizes[size],
    fullWidth ? buttonStyles.fullWidth : "",
    className,
  ].join(" ");

  return (
    <button className={classes} data-chosen={chosen} {...props}>
      {children}
    </button>
  );
};

const PrimaryButton: React.FC<ButtonProps> = (props) => (
  <Button variant="primary" {...props} />
);

const SecondaryButton: React.FC<ButtonProps> = (props) => (
  <Button variant="secondary" {...props} />
);

const PrimaryTextButton: React.FC<ButtonProps> = (props) => (
  <Button variant="primaryText" {...props} />
);

const DangerButton: React.FC<ButtonProps> = ({
  outlined = false,
  ...props
}) => <Button variant={outlined ? "dangerOutlined" : "danger"} {...props} />;

const TertiaryButton: React.FC<ButtonProps> = (props) => (
  <Button variant="tertiary" {...props} />
);

const ChipsButton: React.FC<ButtonProps> = (props) => (
  <Button variant="chips" size="sm" {...props} />
);

// Компонент для демонстрации
const ButtonShowcase: React.FC = () => {
  const [selected, setSelected] = useState<string>("option1");

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Button Components</h1>

      {/* Primary Buttons (Contained) */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Primary Buttons (Contained)
        </h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <PrimaryButton>Primary Button</PrimaryButton>
          <PrimaryButton size="sm">Small Primary</PrimaryButton>
          <PrimaryButton size="lg">Large Primary</PrimaryButton>
          <PrimaryButton disabled>Disabled Primary</PrimaryButton>
          <PrimaryButton>
            <span>+</span> Upload file
          </PrimaryButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;PrimaryButton&gt;Primary Button&lt;/PrimaryButton&gt;
            <br />
            &lt;PrimaryButton size="sm"&gt;Small Primary&lt;/PrimaryButton&gt;
            <br />
            &lt;PrimaryButton size="lg"&gt;Large Primary&lt;/PrimaryButton&gt;
            <br />
            &lt;PrimaryButton disabled&gt;Disabled Primary&lt;/PrimaryButton&gt;
            <br />
            &lt;PrimaryButton&gt;&lt;span&gt;+&lt;/span&gt; Upload
            file&lt;/PrimaryButton&gt;
          </code>
        </div>
      </section>

      {/* Secondary Buttons (Outlined) */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Secondary Buttons (Outlined)
        </h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <SecondaryButton>Secondary Button</SecondaryButton>
          <SecondaryButton size="sm">Small Secondary</SecondaryButton>
          <SecondaryButton size="lg">Large Secondary</SecondaryButton>
          <SecondaryButton disabled>Disabled Secondary</SecondaryButton>
          <SecondaryButton>
            <span>+</span> Upload file
          </SecondaryButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;SecondaryButton&gt;Secondary Button&lt;/SecondaryButton&gt;
            <br />
            &lt;SecondaryButton size="sm"&gt;Small
            Secondary&lt;/SecondaryButton&gt;
            <br />
            &lt;SecondaryButton size="lg"&gt;Large
            Secondary&lt;/SecondaryButton&gt;
            <br />
            &lt;SecondaryButton disabled&gt;Disabled
            Secondary&lt;/SecondaryButton&gt;
            <br />
            &lt;SecondaryButton&gt;&lt;span&gt;+&lt;/span&gt; Upload
            file&lt;/SecondaryButton&gt;
          </code>
        </div>
      </section>

      {/* Primary Text Buttons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Primary Text Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <PrimaryTextButton>Primary Text</PrimaryTextButton>
          <PrimaryTextButton size="sm">Small Text</PrimaryTextButton>
          <PrimaryTextButton size="lg">Large Text</PrimaryTextButton>
          <PrimaryTextButton disabled>Disabled Text</PrimaryTextButton>
          <PrimaryTextButton>
            <span>+</span> Upload file
          </PrimaryTextButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;PrimaryTextButton&gt;Primary Text&lt;/PrimaryTextButton&gt;
            <br />
            &lt;PrimaryTextButton size="sm"&gt;Small
            Text&lt;/PrimaryTextButton&gt;
            <br />
            &lt;PrimaryTextButton size="lg"&gt;Large
            Text&lt;/PrimaryTextButton&gt;
            <br />
            &lt;PrimaryTextButton disabled&gt;Disabled
            Text&lt;/PrimaryTextButton&gt;
            <br />
            &lt;PrimaryTextButton&gt;&lt;span&gt;+&lt;/span&gt; Upload
            file&lt;/PrimaryTextButton&gt;
          </code>
        </div>
      </section>

      {/* Danger Buttons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Danger Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <DangerButton>
            <span className="mr-1">🗑️</span> Delete
          </DangerButton>
          <DangerButton size="sm">Delete</DangerButton>
          <DangerButton size="lg">Delete</DangerButton>
          <DangerButton disabled>Disabled</DangerButton>
          <DangerButton outlined>
            <span className="mr-1">🗑️</span> Delete
          </DangerButton>
          <DangerButton outlined size="sm">
            Delete
          </DangerButton>
          <DangerButton outlined disabled>
            Disabled
          </DangerButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;DangerButton&gt;&lt;span&gt;🗑️&lt;/span&gt;
            Delete&lt;/DangerButton&gt;
            <br />
            &lt;DangerButton size="sm"&gt;Delete&lt;/DangerButton&gt;
            <br />
            &lt;DangerButton disabled&gt;Disabled&lt;/DangerButton&gt;
            <br />
            &lt;DangerButton outlined&gt;&lt;span&gt;🗑️&lt;/span&gt;
            Delete&lt;/DangerButton&gt;
            <br />
            &lt;DangerButton outlined disabled&gt;Disabled&lt;/DangerButton&gt;
          </code>
        </div>
      </section>

      {/* Tertiary Buttons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Tertiary Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <TertiaryButton>Tertiary Button</TertiaryButton>
          <TertiaryButton disabled>Disabled Tertiary</TertiaryButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;TertiaryButton&gt;Tertiary Button&lt;/TertiaryButton&gt;
            <br />
            &lt;TertiaryButton disabled&gt;Disabled
            Tertiary&lt;/TertiaryButton&gt;
          </code>
        </div>
      </section>

      {/* Chips Buttons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Chips Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <ChipsButton
            onClick={() => setSelected("option1")}
            chosen={selected === "option1"}
          >
            Option 1
          </ChipsButton>
          <ChipsButton
            onClick={() => setSelected("option2")}
            chosen={selected === "option2"}
          >
            Option 2
          </ChipsButton>
          <ChipsButton
            onClick={() => setSelected("option3")}
            chosen={selected === "option3"}
          >
            Option 3
          </ChipsButton>
          <ChipsButton disabled>Disabled</ChipsButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            {`<ChipsButton 
              onClick={() => setSelected("option1")} 
              chosen={selected === "option1"}
            >
              Option 1
            </ChipsButton>`}
          </code>
        </div>
      </section>

      {/* Buttons with Icons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <PrimaryButton>
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
            Add Item
          </PrimaryButton>

          <SecondaryButton>
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Export
          </SecondaryButton>

          <DangerButton>
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </DangerButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;PrimaryButton&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &nbsp;&nbsp;Add Item
            <br />
            &lt;/PrimaryButton&gt;
          </code>
        </div>
      </section>

      {/* Combined Features Buttons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Combined Features</h2>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <PrimaryButton size="lg" fullWidth>
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
            Create New Account
          </PrimaryButton>

          <SecondaryButton size="lg" fullWidth>
            Continue with existing account
          </SecondaryButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;PrimaryButton size="lg" fullWidth&gt;
            <br />
            &nbsp;&nbsp;&lt;svg&gt;...&lt;/svg&gt;
            <br />
            &nbsp;&nbsp;Create New Account
            <br />
            &lt;/PrimaryButton&gt;
          </code>
        </div>
      </section>

      {/* Full Width Buttons */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Full Width Buttons</h2>
        <div className="flex flex-col gap-4 mb-4 w-full">
          <PrimaryButton fullWidth>Full Width Primary</PrimaryButton>
          <SecondaryButton fullWidth>Full Width Secondary</SecondaryButton>
          <DangerButton fullWidth>Full Width Danger</DangerButton>
          <PrimaryTextButton fullWidth>
            Full Width Text Button
          </PrimaryTextButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <code className="text-sm">
            &lt;PrimaryButton fullWidth&gt;Full Width
            Primary&lt;/PrimaryButton&gt;
            <br />
            &lt;SecondaryButton fullWidth&gt;Full Width
            Secondary&lt;/SecondaryButton&gt;
            <br />
            &lt;DangerButton fullWidth&gt;Full Width Danger&lt;/DangerButton&gt;
            <br />
            &lt;PrimaryTextButton fullWidth&gt;Full Width Text
            Button&lt;/PrimaryTextButton&gt;
          </code>
        </div>
      </section>
    </div>
  );
};

export default ButtonShowcase;

// Экспортируем компоненты
export {
  Button,
  PrimaryButton,
  SecondaryButton,
  PrimaryTextButton,
  DangerButton,
  TertiaryButton,
  ChipsButton,
};
