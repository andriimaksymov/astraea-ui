import { Meta } from "@storybook/react";

import { Stack } from "../../index";

import Card from "../Card";

export default {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Card component is a versatile container that can be used to display various types of content.",
      },
    },
  },
  argTypes: {
    hasBorder: {
      type: "boolean",
      defaultValue: false,
    },
    borderColor: {
      type: "string",
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Card>;

/**
 * Basic card example.
 */
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

/**
 * For diverse levels of card shadows use the <b>elevation</b> prop.
 */
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

/**
 * For card with border use the <b>hasBorder</b> prop.
 */
export const WithBorder = (args: typeof Card) => {
  return (
    <Stack spacing={4} justify="center">
      <Card {...args} elevation={0} hasBorder>
        Card With Border
      </Card>
    </Stack>
  );
};

/**
 * Card with custom border color, use the <b>borderColor</b> prop.
 */
export const WithCustomBorderColor = (args: typeof Card) => {
  return (
    <Stack spacing={4} justify="center">
      <Card {...args} elevation={0} borderColor="blue">
        Card With Custom Border Color
      </Card>
    </Stack>
  );
};
