import { Cube } from "../Loaders";

export default {
  title: "Components",
  component: Cube,
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
      defaultValue: "green",
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
      defaultValue: "green",
      control: {
        type: "color",
      },

      table: {
        defaultValue: { summary: "white" },
        type: { summary: "OPTIONAL! If don't set it will be the same as the first color" },
      },
      description: "Loader fill color, support is every CSS color format",
    },
    speed: {
      control: { type: "range", min: 1500, max: 5000, step: 100 },
      defaultValue: 2500,
      description: "Animation speed from `1500` to `5000` ms",
      table: {
        defaultValue: { summary: 2500 },
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
        component: "Cube loader component preview and props description",
      },
    },
  },
};

export const CubeAnimation = (args) => {
  return <Cube {...args} />;
};
