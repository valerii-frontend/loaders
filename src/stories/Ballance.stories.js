import Ballance from "../components/Ballance";

export default {
  title: "Loaders/Ballance",
  component: Ballance,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    color: {
      control: { type: "color" },
    },
    speed: { control: { type: "range", min: 500, max: 3000, step: 100 } },
  },
};

export const BallanceLoader = (args) => {
  return <Ballance color='black' {...args} />;
};
