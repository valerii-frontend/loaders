import { Text } from "../Loaders";

export default {
  title: "Components",
  component: Text,
  argTypes: {
    size: {
      control: { type: "range", min: 12, max: 100, step: 1 },
      defaultValue: 30,
      description: "Font size from `12` to `100` in pixels",
      table: {
        defaultValue: { summary: 30 },
        type: { summary: null },
      },
    },
    color: {
      defaultValue: "green",
      control: {
        type: "color",
      },

      table: {
        defaultValue: { summary: "green" },
        type: { summary: "EXAMPLE: black, rgba(0,0,0,50%), #000, hsl(324,60%,80%)" },
      },
      description: "Text color, support is every CSS color format",
    },
    speed: {
      control: { type: "range", min: 500, max: 6000, step: 100 },
      defaultValue: 1500,
      description: "Animation speed from `500` to `6000` ms",
      table: {
        defaultValue: { summary: 1500 },
        type: { summary: null },
      },
    },
    uppercase: {
      options: ["true", "false"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "Text uppercase transformation",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
    pulse: {
      options: ["true", "false"],
      control: { type: "radio" },
      defaultValue: "false",
      description: "Text additional pulse animation",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
    text: {
      defaultValue: "Loading",
      control: {
        type: "text",
      },

      table: {
        defaultValue: { summary: "Loading" },
        type: { summary: null },
      },
      description: "Loader text",
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
        component: "Text loader component preview and props description",
      },
    },
  },
};

export const TextAnimation = (args) => {
  return <Text {...args} />;
};
