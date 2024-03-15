import { Meta } from "@storybook/react";

import { Stack } from "../../index";

import Checkbox, { CheckboxProps } from "../Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Checkboxes allow the user to select one or more items from a set.",
      },
    },
  },
} as Meta<typeof Checkbox>;

export const BasicCheckboxes = (args: CheckboxProps) => (
  <Stack justify="center" spacing={1}>
    <Checkbox {...args} defaultChecked />
    <Checkbox {...args} />
    <Checkbox {...args} disabled />
    <Checkbox {...args} disabled checked />
  </Stack>
);

/**
 * You can provide a label to the Checkbox
 */
export const Label = (args: CheckboxProps) => (
  <Stack justify="center">
    <Stack spacing={1} direction="column">
      <Checkbox defaultChecked label="Label" {...args} />
      <Checkbox label="Disabled" disabled {...args} />
    </Stack>
  </Stack>
);

/**
 * You can change the placement of the label.
 */
export const LabelPlacement = (args: CheckboxProps) => (
  <Stack spacing={4} justify="center">
    <Checkbox label="Top" labelPlacement="top" {...args} />
    <Checkbox label="Start" labelPlacement="start" {...args} />
    <Checkbox label="Bottom" labelPlacement="bottom" {...args} />
    <Checkbox label="End" labelPlacement="end" {...args} />
  </Stack>
);
