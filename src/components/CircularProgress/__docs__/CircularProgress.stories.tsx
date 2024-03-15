import { Meta } from "@storybook/react";

import { Stack } from "../../index";

import CircularProgress, { CircularProgressProps } from "../CircularProgress";

export default {
  title: "CircularProgress",
  tags: ["autodocs"],
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component:
          "Progress indicators commonly known as spinners, express an unspecified wait time.",
      },
    },
  },
} as Meta<typeof CircularProgress>;

export const Basic = (args: CircularProgressProps) => (
  <Stack justify="center">
    <CircularProgress {...args} />
  </Stack>
);

export const Color = (args: CircularProgressProps) => (
  <Stack spacing={2} justify="center">
    <CircularProgress color="primary" {...args} />
    <CircularProgress color="secondary" {...args} />
    <CircularProgress color="inherit" {...args} />
  </Stack>
);

export const Determinate = (args: CircularProgressProps) => (
  <Stack spacing={4} justify="center">
    <CircularProgress
      size={100}
      value={25}
      variant="determinate"
      color="primary"
      {...args}
    />
    <CircularProgress
      size={100}
      value={50}
      variant="determinate"
      color="primary"
      {...args}
    />
    <CircularProgress
      size={100}
      value={75}
      variant="determinate"
      color="primary"
      {...args}
    />
    <CircularProgress
      size={100}
      value={100}
      variant="determinate"
      color="primary"
      {...args}
    />
  </Stack>
);

export const WithLabel = (args: CircularProgressProps) => (
  <Stack justify="center">
    <Stack style={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        color="primary"
        value={40}
        variant="determinate"
        {...args}
      />
      <div
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          fontSize: 13,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        40%
      </div>
    </Stack>
  </Stack>
);
