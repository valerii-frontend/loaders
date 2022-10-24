import { Scale } from "../Loaders";

export default {
  title: "Components",
  component: Scale,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      defaultValue: "sm",
      description: "Loader size",
      table: {
        defaultValue: { summary: "sm" },
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
      description: "Loader second color, support is every CSS color format",
    },
    speed: {
      control: { type: "range", min: 500, max: 4000, step: 100 },
      defaultValue: 2000,
      description: "Animation speed from `500ms` to `4000ms`",
      table: {
        defaultValue: { summary: 2000 },
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
        component: "Scale loader component preview and props description",
      },
    },
  },
};

export const ScaleAnimation = (args) => {
  return <Scale {...args} />;
};
