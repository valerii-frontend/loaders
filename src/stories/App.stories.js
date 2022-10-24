import App from "../App";
import "../index.css";

export default {
  title: "Full preview/Loaders",
  component: App,
  parameters: {
    docs: {
      description: {
        component: "All loaders preview",
      },
    },
  },
};

export const Preview = (args) => {
  return <App {...args} />;
};
