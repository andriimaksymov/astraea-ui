import { Meta } from "@storybook/react";

import { Stack, Typography } from "../../index";

import Divider, { DividerProps } from "../Divider";

export default {
  title: "Divider",
  tags: ["autodocs"],
  component: Divider,
} as Meta<typeof Divider>;

export const Basic = (args: DividerProps) => (
  <Stack direction="column" spacing={2}>
    <Divider {...args} />
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
    <Divider {...args} />
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
    <Divider {...args} />
  </Stack>
);

export const Vertical = (args: DividerProps) => (
  <Stack spacing={3} justify="center">
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
    <Divider orientation="vertical" {...args} />
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
    <Divider orientation="vertical" />
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
    <Divider orientation="vertical" />
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
  </Stack>
);

export const WithTextHorizontal = (args: DividerProps) => (
  <Stack spacing={3} direction="column" justify="center">
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
    <Divider orientation="horizontal" {...args}>
      OR
    </Divider>
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
  </Stack>
);

export const WithTextVertical = (args: DividerProps) => (
  <Stack spacing={3} justify="center">
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
    <Divider orientation="vertical" {...args}>
      OR
    </Divider>
    <Typography component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </Typography>
  </Stack>
);
