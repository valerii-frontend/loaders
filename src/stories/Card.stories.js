import { Card } from "../Loaders";

export default {
  title: "Components",
  component: Card,
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
    color2: {
      defaultValue: "black",
      control: {
        type: "color",
      },

      table: {
        defaultValue: { summary: "white" },
        type: { summary: "Optional!If don't set it will be the same as first color" },
      },
      description: "Loader second color, support is every CSS color format",
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
  },
  parameters: {
    viewMode: "docs",
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
      canvas: { hidden: true },
    },
    docs: {
      description: {
        component: "Card loader component preview and props description",
      },
    },
  },
};

export const CardAnimation = (args) => {
  return <Card {...args} />;
};
