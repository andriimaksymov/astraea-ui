import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Card",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    children: "Default Card Content",
  },
};

export const PaddingSmall: Story = {
  args: {
    padding: "small",
    children: "Card with small padding",
  },
};

export const Elevation5: Story = {
  args: {
    elevation: 5,
    children: "Card with shadow elevation level 5",
  },
};
