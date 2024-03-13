import { Meta } from "@storybook/react";

import Checkbox, { CheckboxProps } from "../Checkbox";
import { Stack } from "../../index";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Checkbox>;

export const Basic = (args: CheckboxProps) => (
  <Stack justify="center" spacing={1}>
    <Checkbox {...args} defaultChecked />
    <Checkbox {...args} />
    <Checkbox {...args} disabled />
    <Checkbox {...args} disabled checked />
  </Stack>
);

export const Label = (args: CheckboxProps) => (
  <Stack justify="center">
    <Stack spacing={1} direction="column">
      <Checkbox defaultChecked label="Label" {...args} />
      <Checkbox label="Disabled" disabled {...args} />
    </Stack>
  </Stack>
);

export const LabelPlacement = (args: CheckboxProps) => (
  <Stack spacing={4} justify="center">
    <Checkbox label="Top" labelPlacement="top" {...args} />
    <Checkbox label="Start" labelPlacement="start" {...args} />
    <Checkbox label="Bottom" labelPlacement="bottom" {...args} />
    <Checkbox label="End" labelPlacement="end" {...args} />
  </Stack>
);
