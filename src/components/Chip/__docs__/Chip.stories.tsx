import { Meta } from "@storybook/react";

import TrashIcon from "../../../assets/icons/TrashIcon";
import { Stack } from "../../index";

import Chip from "../Chip";

export default {
  title: "Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Chips are compact elements that represent an input, attribute, or action.",
      },
    },
  },
  args: {
    onDelete: null,
  },
} as Meta<typeof Chip>;

/**
 * Chips are compact elements that represent an input, attribute, or action.
 */
export const Basic = ({ ...args }) => (
  <Stack spacing={2} align="center" justify="center">
    <Chip variant="contained" {...args}>
      Basic Chip
    </Chip>
  </Stack>
);

/**
 * The <b>Chip</b> component supports outlined and filled styling, use <b>variant</b> prop.
 */
export const Variant = (args: typeof Chip) => (
  <Stack spacing={2} align="center" justify="center">
    <Chip variant="contained" {...args}>
      Contained
    </Chip>
    <Chip variant="outlined" {...args}>
      Outlined
    </Chip>
  </Stack>
);

/**
 * You can use the <b>color</b> prop to define a color from theme palette.
 */
export const Color = (args: typeof Chip) => (
  <Stack spacing={2} align="center" justify="center">
    <Chip color="primary" variant="contained" {...args}>
      Primary
    </Chip>
    <Chip color="secondary" variant="contained" {...args}>
      Secondary
    </Chip>
  </Stack>
);

/**
 * You can use the <b>round</b> prop to define a rounded style.
 */
export const Rounded = (args: typeof Chip) => (
  <Stack spacing={2} align="center" justify="center">
    <Chip round color="primary" {...args}>
      Primary
    </Chip>
    <Chip round color="secondary" {...args}>
      Secondary
    </Chip>
    <Chip round color="primary" variant="outlined" {...args}>
      Primary
    </Chip>
    <Chip round color="secondary" variant="outlined" {...args}>
      Secondary
    </Chip>
  </Stack>
);

export const Clickable = (args: typeof Chip) => (
  <Stack spacing={2} align="center" justify="center">
    <Chip
      color="primary"
      {...args}
      onClick={() => alert("You've just clicked on the chip element")}
    >
      Clickable
    </Chip>
  </Stack>
);

export const ClickableAndDeletable = (args: typeof Chip) => (
  <Stack spacing={2} align="center" justify="center">
    <Chip
      color="primary"
      {...args}
      onClick={() => alert("You've just clicked on the chip element")}
      onDelete={() =>
        alert(
          "You've just clicked on the delete button inside the chip element",
        )
      }
    >
      Clickable And Deletable
    </Chip>
  </Stack>
);

export const WithCustomDeleteIcon = (args: typeof Chip) => (
  <Stack spacing={2} align="center" justify="center">
    <Chip
      color="primary"
      deleteIcon={TrashIcon}
      {...args}
      onClick={() => alert("You've just clicked on the chip element")}
      onDelete={() =>
        alert(
          "You've just clicked on the delete button inside the chip element",
        )
      }
    >
      Custom delete icon
    </Chip>
  </Stack>
);
