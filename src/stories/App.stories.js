import App from "../App";
import "../index.css";

export default {
  title: "All Components Preview",
  component: App,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
      "canvas": { hidden: true },
    },
    viewMode: "story",
    layout: "fullscreen",
  },
};
export const AllComponentsPreview = (args) => {
  return <App {...args} />;
};
