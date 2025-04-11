// IconButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import "../styles/globals.css";
import {
  IconButton,
  PrimaryIconButton,
  SecondaryIconButton,
  TertiaryIconButton,
} from "../components/ui/buttons/IconButtons"; // Предполагается, что все иконочные кнопки экспортированы из файла IconButton.tsx

// Иконка плюса для использования в историях
const PlusIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6v12M6 12h12"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка корзины для примеров
// const TrashIcon = (props: { className?: string }) => (
//   <svg
//     className={props.className || "w-5 h-5"}
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//     />
//   </svg>
// );

// Метаданные для историй иконочных кнопок
const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "Вариант иконочной кнопки",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Размер иконочной кнопки",
    },
    disabled: {
      control: "boolean",
      description: "Отключена ли кнопка",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Базовая история для иконочной кнопки
export const Default: Story = {
  args: {
    children: <PlusIcon />,
    variant: "primary",
    size: "md",
    disabled: false,
  },
};

// Варианты иконочных кнопок
export const Primary: Story = {
  args: {
    children: <PlusIcon />,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: <PlusIcon />,
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: <PlusIcon />,
    variant: "tertiary",
  },
};

// Размеры иконочных кнопок
export const Small: Story = {
  args: {
    children: <PlusIcon size={16} />,
    variant: "primary",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: <PlusIcon size={20} />,
    variant: "primary",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: <PlusIcon size={24} />,
    variant: "primary",
    size: "lg",
  },
};

// Состояния иконочных кнопок
export const Disabled: Story = {
  args: {
    children: <PlusIcon />,
    variant: "primary",
    disabled: true,
  },
};

// История с разными SVG иконками
export const WithDifferentIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <PrimaryIconButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6v12M6 12h12"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </PrimaryIconButton>

      <PrimaryIconButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </PrimaryIconButton>

      <PrimaryIconButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13l4 4L19 7"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </PrimaryIconButton>
    </div>
  ),
};

// Все варианты в одной истории
export const AllIconButtonVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Primary Icon Buttons</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <PrimaryIconButton size="sm">
            <PlusIcon size={16} />
          </PrimaryIconButton>
          <PrimaryIconButton>
            <PlusIcon size={20} />
          </PrimaryIconButton>
          <PrimaryIconButton size="lg">
            <PlusIcon size={24} />
          </PrimaryIconButton>
          <PrimaryIconButton disabled>
            <PlusIcon size={20} />
          </PrimaryIconButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Secondary Icon Buttons</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <SecondaryIconButton size="sm">
            <PlusIcon size={16} />
          </SecondaryIconButton>
          <SecondaryIconButton>
            <PlusIcon size={20} />
          </SecondaryIconButton>
          <SecondaryIconButton size="lg">
            <PlusIcon size={24} />
          </SecondaryIconButton>
          <SecondaryIconButton disabled>
            <PlusIcon size={20} />
          </SecondaryIconButton>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Tertiary Icon Buttons</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <TertiaryIconButton size="sm">
            <PlusIcon size={16} />
          </TertiaryIconButton>
          <TertiaryIconButton>
            <PlusIcon size={20} />
          </TertiaryIconButton>
          <TertiaryIconButton size="lg">
            <PlusIcon size={24} />
          </TertiaryIconButton>
          <TertiaryIconButton disabled>
            <PlusIcon size={20} />
          </TertiaryIconButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
