import { Meta } from "@storybook/react";

import { Stack } from "../../index";

import Switch, { SwitchProps } from "../Switch";

export default {
  title: "Switch",
  tags: ["autodocs"],
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: "Switch component to implement toggle switches.",
      },
    },
  },
} as Meta<typeof Switch>;

export const Basic = (args: SwitchProps) => (
  <Stack spacing={2} justify="center">
    <Switch checked {...args} />
    <Switch {...args} />
    <Switch checked disabled {...args} />
    <Switch disabled {...args} />
  </Stack>
);

export const Size = (args: SwitchProps) => (
  <Stack spacing={4} justify="center">
    <Stack spacing={1}>
      <Switch size="small" {...args} />
      <Switch size="small" checked {...args} />
    </Stack>
    <Stack spacing={1}>
      <Switch size="medium" {...args} />
      <Switch size="medium" checked {...args} />
    </Stack>
    <Stack spacing={1}>
      <Switch size="large" {...args} />
      <Switch size="large" checked {...args} />
    </Stack>
  </Stack>
);

export const LabelPlacement = (args: SwitchProps) => (
  <Stack spacing={4} justify="center">
    <Switch label="Top" labelPlacement="top" {...args} />
    <Switch label="Start" labelPlacement="start" {...args} />
    <Switch label="Bottom" labelPlacement="bottom" {...args} />
    <Switch label="End" labelPlacement="end" {...args} />
  </Stack>
);
