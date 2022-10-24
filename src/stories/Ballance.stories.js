import { Ballance } from "../Loaders";

export default {
  title: "Loaders/Ballance",
  component: Ballance,
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
      defaultValue: 1200,
      description: "Animation speed from `500ms` to `3000ms`",
      table: {
        defaultValue: { summary: 1200 },
        type: { summary: null },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Ballance loader component preview and props description",
      },
    },
  },
};

export const BallanceLoader = (args) => {
  return <Ballance {...args} />;
};
