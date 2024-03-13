import { Meta } from "@storybook/react";

import Button, { ButtonProps } from "../Button";
import { Stack } from "../../Stack";

const PlusIcon = ({ ...props }) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" />
  </svg>
);

export default {
  title: "Button",
  component: Button,
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
  parameters: {},
} as Meta<typeof Button>;

export const Basic = (args: typeof Button) => {
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

export const Text = (args: typeof Button) => {
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

export const Contained = (args: typeof Button) => {
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

export const Outlined = (args: typeof Button) => {
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
      <Button variant="contained" color="inherit" {...args}>
        Default
      </Button>
      <Button variant="contained" color="primary" {...args}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" {...args}>
        Secondary
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
