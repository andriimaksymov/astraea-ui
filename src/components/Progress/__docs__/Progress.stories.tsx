import { Meta } from "@storybook/react";

import { Stack } from "../../index";

import Progress, { ProgressProps } from "../Progress";

export default {
  title: "Progress",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Progress indicators to display the length of a process.",
      },
    },
  },
  component: Progress,
} as Meta<typeof Progress>;

const Template = (args) => <Progress {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  progress: 30,
};

export const Label = Template.bind({});
Label.args = {
  progress: 60,
  label: "60%",
};

export const Color = (args: ProgressProps) => (
  <Stack spacing={2} direction="column">
    <Progress {...args} progress={30} />
    <Progress {...args} progress={40} color="secondary" />
    <Progress {...args} progress={50} color="info" />
    <Progress {...args} progress={60} color="success" />
    <Progress {...args} progress={70} color="warning" />
    <Progress {...args} progress={80} color="error" />
  </Stack>
);

export const Striped = (args: ProgressProps) => (
  <Stack spacing={2} direction="column">
    <Progress {...args} striped progress={30} />
    <Progress {...args} striped progress={40} color="secondary" />
    <Progress {...args} striped progress={50} color="info" />
    <Progress {...args} striped progress={60} color="success" />
    <Progress {...args} striped progress={70} color="warning" />
    <Progress {...args} striped progress={80} color="error" />
  </Stack>
);

export const Animated = (args: ProgressProps) => (
  <Stack spacing={2} direction="column">
    <Progress {...args} animated striped progress={30} />
    <Progress {...args} animated striped progress={40} color="secondary" />
    <Progress {...args} animated striped progress={50} color="info" />
    <Progress {...args} animated striped progress={60} color="success" />
    <Progress {...args} animated striped progress={70} color="warning" />
    <Progress {...args} animated striped progress={80} color="error" />
  </Stack>
);
