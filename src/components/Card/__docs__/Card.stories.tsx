import { Meta } from "@storybook/react";

import { Stack } from "../../index";
import Card from "../Card";

export default {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    hasBorder: {
      type: "boolean",
      defaultValue: false,
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Card>;

const Template: (args) => JSX.Element = (args) => <Card {...args} />;

export const Basic = (args: typeof Card) => {
  return (
    <Card {...args}>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which do not look even slightly believable. If you are
      going to use a passage of Lorem Ipsum, you need to be sure there is not
      anything embarrassing hidden in the middle of text. All the Lorem Ipsum
      generators on the Internet tend to repeat predefined chunks as necessary,
      making this the first true generator on the Internet. It uses a dictionary
      of over 200 Latin words, combined with a handful of model sentence
      structures, to generate Lorem Ipsum which looks reasonable. The generated
      Lorem Ipsum is therefore always free from repetition, injected humour, or
      non-characteristic words etc.
    </Card>
  );
};
export const Elevation = (args: typeof Card) => {
  return (
    <Stack spacing={4} justify="center">
      <Card {...args} elevation={1}>
        Elevation 1
      </Card>
      <Card {...args} elevation={2}>
        Elevation 2
      </Card>
      <Card {...args} elevation={3}>
        Elevation 3
      </Card>
      <Card {...args} elevation={4}>
        Elevation 4
      </Card>
    </Stack>
  );
};

export const Bordered = Template.bind({});
Bordered.args = {
  children: "Card With Border",
  elevation: 0,
  hasBorder: true,
};

export const BorderedColor = Template.bind({});
BorderedColor.args = {
  children: "Card With Border Color",
  elevation: 0,
  hasBorder: true,
  borderColor: "blue",
};
