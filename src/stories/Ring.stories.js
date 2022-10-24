import { Ring } from "../Loaders";

export default {
  title: "Components",
  component: Ring,
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
      defaultValue: 1500,
      description: "Animation speed from `500ms` to `3000ms`",
      table: {
        defaultValue: { summary: 1500 },
        type: { summary: null },
      },
    },
    _width: {
      control: { type: "range", min: 2, max: 20, step: 1 },
      defaultValue: 7,
      description: "Border width from `2` to `20` pixels",
      table: {
        defaultValue: { summary: 7 },
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
        component: "Ring loader component preview and props description",
      },
    },
  },
};

export const RingAnimation = (args) => {
  return <Ring {...args} />;
};
