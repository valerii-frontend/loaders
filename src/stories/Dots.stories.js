import { Dots } from "../Loaders";

export default {
  title: "Components",
  component: Dots,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      defaultValue: "md",
      description: "Loader size",
      table: {
        defaultValue: { summary: "md" },
        type: { summary: null },
      },
    },
    color: {
      defaultValue: "black",
      control: {
        type: "color",
      },
      table: {
        defaultValue: { summary: "white" },
        type: { summary: "EXAMPLE: black, rgba(0,0,0,50%), #000" },
      },
      description: "Loader color, support is every CSS color format",
    },
    speed: {
      control: { type: "range", min: 500, max: 3000, step: 100 },
      defaultValue: 1500,
      description: "Animation speed from `500ms` to `3000ms`",
      table: {
        defaultValue: { summary: 1500 },
        type: { summary: null },
      },
    },
    count: {
      control: { type: "range", min: 2, max: 5, step: 1 },
      defaultValue: 3,
      description: "Dots count  from `2` to `5`",
      table: {
        defaultValue: { summary: 3 },
        type: { summary: null },
      },
    },
  },
  parameters: {
    viewMode: "docs",
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component: "Dots loader component preview and props description",
      },
    },
  },
};

export const DotsAnimation = (args) => {
  return <Dots {...args} />;
};
