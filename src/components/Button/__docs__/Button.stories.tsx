import { Meta } from "@storybook/react";

import PlusIcon from "../../../assets/icons/PlusIcon";
import { Stack } from "../../index";

import Button, { ButtonProps } from "../Button";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Button component is a customizable and versatile UI element used for triggering actions or events within a user interface. It provides a consistent way to interact with users and perform actions such as submitting forms, navigating between pages, or triggering specific functions.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"] as ButtonProps<
        typeof Button
      >["size"][],
    },
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"] as ButtonProps<
        typeof Button
      >["variant"][],
    },
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary"] as ButtonProps<
        typeof Button
      >["color"][],
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
    },
  },
} as Meta<typeof Button>;

/**
 * The Button comes with three variants: text, contained (default), and outlined.
 */
export const BasicButton = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button variant="text" {...args}>
        Text
      </Button>
      <Button variant="contained" {...args}>
        Contained
      </Button>
      <Button variant="outlined" {...args}>
        Outlined
      </Button>
    </Stack>
  );
};

export const TextButton = (args: typeof Button) => {
  return (
    <Stack spacing={3} align="center" justify="center">
      <Button variant="text" {...args}>
        Basic
      </Button>
      <Button variant="text" disabled {...args}>
        Disabled
      </Button>
    </Stack>
  );
};

export const ContainedButton = (args: typeof Button) => {
  return (
    <Stack spacing={3} align="center" justify="center">
      <Button variant="contained" {...args}>
        Basic
      </Button>
      <Button variant="contained" disabled {...args}>
        Disabled
      </Button>
    </Stack>
  );
};

export const OutlinedButton = (args: typeof Button) => {
  return (
    <Stack spacing={3} align="center" justify="center">
      <Button variant="outlined" {...args}>
        Basic
      </Button>
      <Button variant="outlined" disabled {...args}>
        Disabled
      </Button>
    </Stack>
  );
};

/**
 * For larger or smaller buttons, use the size prop.
 */
export const Size = (args: typeof Button) => {
  return (
    <Stack spacing={3} direction="column" justify="center">
      <Stack spacing={3} align="center" justify="center">
        <Button variant="text" size="small" {...args}>
          Small
        </Button>
        <Button variant="text" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="text" size="large" {...args}>
          Large
        </Button>
      </Stack>
      <Stack spacing={3} align="center" justify="center">
        <Button variant="contained" size="small" {...args}>
          Small
        </Button>
        <Button variant="contained" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="contained" size="large" {...args}>
          Large
        </Button>
      </Stack>
      <Stack spacing={3} align="center" justify="center">
        <Button variant="outlined" size="small" {...args}>
          Small
        </Button>
        <Button variant="outlined" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="outlined" size="large" {...args}>
          Large
        </Button>
      </Stack>
    </Stack>
  );
};

export const Color = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button variant="text" color="primary" {...args}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" {...args}>
        Secondary
      </Button>
      <Button variant="outlined" color="inherit" {...args}>
        Inherit
      </Button>
    </Stack>
  );
};

export const IconStart = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button startIcon={PlusIcon} variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button
        startIcon={PlusIcon}
        variant="contained"
        color="primary"
        {...args}
      >
        Contained
      </Button>
      <Button startIcon={PlusIcon} variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>
  );
};

export const IconEnd = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button endIcon={PlusIcon} variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button endIcon={PlusIcon} variant="contained" color="primary" {...args}>
        Contained
      </Button>
      <Button endIcon={PlusIcon} variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>
  );
};

export const FullWidth = (args: typeof Button) => {
  return (
    <Stack spacing={2} justify="center" direction="column">
      <Button fullWidth variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button fullWidth variant="contained" color="primary" {...args}>
        Contained
      </Button>
      <Button fullWidth variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>
  );
};
