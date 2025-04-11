// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import "../styles/globals.css";
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  PrimaryTextButton,
  DangerButton,
  TertiaryButton,
  ChipsButton,
} from "../components/ui/buttons/Buttons"; // Предполагается, что все кнопки экспортированы из файла Button.tsx

// Определение метаданных для группы историй
const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "primaryText",
        "danger",
        "dangerOutlined",
        "tertiary",
        "chips",
      ],
      description: "Вариант кнопки",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Размер кнопки",
    },
    disabled: {
      control: "boolean",
      description: "Отключена ли кнопка",
    },
    fullWidth: {
      control: "boolean",
      description: "Использовать полную ширину контейнера",
    },
    chosen: {
      control: "boolean",
      description: "Выбрана ли кнопка (для чипсов)",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Базовая история для обычной кнопки
export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    fullWidth: false,
  },
};

// Истории для разных вариантов кнопок
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const PrimaryText: Story = {
  args: {
    children: "Text Button",
    variant: "primaryText",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};

export const DangerOutlined: Story = {
  args: {
    children: "Outlined Danger",
    variant: "dangerOutlined",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
  },
};

export const Chips: Story = {
  args: {
    children: "Chip",
    variant: "chips",
    size: "sm",
  },
};

// Размеры кнопок
export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "primary",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    variant: "primary",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "lg",
  },
};

// Состояния кнопок
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    variant: "primary",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
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
      </>
    ),
    variant: "primary",
  },
};

// Множество вариантов в одной истории
export const AllButtonVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 items-center">
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <PrimaryTextButton>Text</PrimaryTextButton>
        <DangerButton>Danger</DangerButton>
        <DangerButton outlined>Outlined Danger</DangerButton>
        <TertiaryButton>Tertiary</TertiaryButton>
        <ChipsButton>Chip</ChipsButton>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <PrimaryButton size="sm">Small</PrimaryButton>
        <PrimaryButton>Medium</PrimaryButton>
        <PrimaryButton size="lg">Large</PrimaryButton>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <PrimaryButton disabled>Disabled</PrimaryButton>
        <SecondaryButton disabled>Disabled</SecondaryButton>
        <DangerButton disabled>Disabled</DangerButton>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
