import { Round } from "../Loaders";

export default {
  title: "Components",
  component: Round,
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
        type: { summary: "EXAMPLE: black, rgba(0,0,0,50%), #000, hsl(324,60%,80%)" },
      },
      description: "Loader color, support is every CSS color format",
    },
    speed: {
      control: { type: "range", min: 500, max: 3000, step: 100 },
      defaultValue: 1200,
      description: "Animation speed from `500ms` to `3000ms`",
      table: {
        defaultValue: { summary: 1200 },
        type: { summary: null },
      },
    },
    _width: {
      control: { type: "range", min: 1, max: 50, step: 1 },
      defaultValue: 5,
      description: "Border width value from `1` to `50` px",
      table: {
        defaultValue: { summary: 5 },
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
        component: "Round loader component preview and props description",
      },
    },
  },
};

export const RoundAnimation = (args) => {
  return <Round {...args} />;
};
