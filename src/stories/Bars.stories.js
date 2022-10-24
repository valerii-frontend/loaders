import { Bars } from "../Loaders";

export default {
  title: "Components",
  component: Bars,
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
    _width: {
      control: { type: "range", min: 5, max: 15, step: 1 },
      defaultValue: 7,
      description: "Bar width from `5px` to `15px`",
      table: {
        defaultValue: { summary: 7 },
        type: { summary: null },
      },
    },
    count: {
      control: { type: "range", min: 3, max: 7, step: 1 },
      defaultValue: 3,
      description: "Bars count from `3` to `7`",
      table: {
        defaultValue: { summary: 3 },
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
      control: { type: "range", min: 500, max: 2000, step: 100 },
      defaultValue: 1200,
      description: "Animation speed from `500ms` to `2000ms`",
      table: {
        defaultValue: { summary: 1200 },
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
        component: "Bars loader component preview and props description",
      },
    },
  },
};

export const BarsAnimation = (args) => {
  return <Bars {...args} />;
};
