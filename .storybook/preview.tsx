import type { Preview } from "@storybook/react";
import "../src/main.css";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};

export default preview;
