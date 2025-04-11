// ButtonShowcase.stories.tsx
import { Meta } from "@storybook/react";
import ButtonShowcase from "../components/ui/buttons/Buttons";
import { IconButtonShowcase } from "../components/ui/buttons/IconButtons";

// Мета-информация для страницы демонстрации кнопок
const meta: Meta = {
  title: "UI/Showcases",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const AllButtonTypes = {
  render: () => <ButtonShowcase />,
  name: "All Button Types",
};

export const AllIconButtonTypes = {
  render: () => <IconButtonShowcase />,
  name: "All Icon Button Types",
};

export const CombinedShowcase = {
  render: () => (
    <>
      <ButtonShowcase />
      <IconButtonShowcase />
    </>
  ),
  name: "Combined Buttons & Icon Buttons Showcase",
};
