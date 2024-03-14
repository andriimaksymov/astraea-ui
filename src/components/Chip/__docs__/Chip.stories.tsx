import { Meta } from "@storybook/react";

import PlusIcon from "../../../assets/icons/PlusIcon";
import { Stack } from "../../index";

import Chip from "../Chip";

export default {
  title: "Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    onDelete: {
      defaultValue: null,
    },
    onClick: {
      defaultValue: null,
    },
  },
} as Meta<typeof Chip>;

const Template = (args) => <Chip {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "Basic Chip",
};

export const Variant = (args: typeof Chip) => (
  <Stack spacing={2}>
    <Chip variant="contained" {...args}>
      Contained
    </Chip>
    <Chip variant="outlined" {...args}>
      Outlined
    </Chip>
  </Stack>
);

export const Color = (args: typeof Chip) => (
  <Stack spacing={2}>
    <Chip color="primary" variant="contained" {...args}>
      Primary
    </Chip>
    <Chip color="secondary" variant="contained" {...args}>
      Secondary
    </Chip>
  </Stack>
);

export const Round = Template.bind({});
Round.args = {
  children: "Round",
  round: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: "Clickable",
  onClick: () => alert("Message"),
};

export const DeleteButton = Template.bind({});
DeleteButton.args = {
  children: "With Delete Button",
  onClick: () => alert("Click"),
  onDelete: () => alert("Delete"),
};

export const CustomDeleteIcon = Template.bind({});
CustomDeleteIcon.args = {
  children: "With Delete Button",
  deleteIcon: <PlusIcon />,
  onClick: () => alert("Click"),
  onDelete: () => alert("Delete"),
};
