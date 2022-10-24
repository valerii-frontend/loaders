import { Whirlpool } from "../Loaders";

export default {
  title: "Components",
  component: Whirlpool,
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
        type: { summary: "OPTIONAL! If don't set it will be the same as the first color" },
      },
      description: "Loader fill color, support is every CSS color format",
    },
    color3: {
      defaultValue: "black",
      control: {
        type: "color",
      },

      table: {
        defaultValue: { summary: "white" },
        type: { summary: "OPTIONAL! You can use only ONE or TWO colors" },
      },
      description: "Loader fill color, support is every CSS color format",
    },
    speed: {
      control: { type: "range", min: 1500, max: 3500, step: 100 },
      defaultValue: 1500,
      description: "Animation speed from `1500` to `3500` ms",
      table: {
        defaultValue: { summary: 1500 },
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
        component: "Whirlpool loader component preview and props description",
      },
    },
  },
};

export const WhirlpoolAnimation = (args) => {
  return <Whirlpool {...args} />;
};
