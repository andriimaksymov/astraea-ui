import { Meta } from "@storybook/react";
import { ChangeEvent, useState } from "react";

import PlusIcon from "../../../assets/icons/PlusIcon";
import {
  Combobox,
  ComboboxItem,
  IconButton,
  Input,
  Stack,
  Typography,
} from "../../index";

import Tooltip, { TooltipProps } from "../Tooltip";

export default {
  title: "Tooltip",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component that displays a tooltip when triggered by user action.",
      },
    },
  },
  component: Tooltip,
} as Meta<typeof Tooltip>;

export const Basic = (args: typeof Tooltip) => (
  <Stack justify="center">
    <Tooltip content="Basic tooltip" {...args}>
      <IconButton icon={PlusIcon} />
    </Tooltip>
  </Stack>
);

export const Arrow = (args: typeof Tooltip) => (
  <Stack justify="center">
    <Tooltip arrow content="With arrow" {...args}>
      <IconButton icon={PlusIcon} />
    </Tooltip>
  </Stack>
);

export const Action = (args: typeof Tooltip) => (
  <Stack justify="center" spacing="5rem">
    <Stack direction="column" align="center" spacing={2}>
      <Typography>Show tooltip on hover</Typography>
      <Tooltip action="hover" content="Tooltip" {...args}>
        <IconButton icon={PlusIcon} />
      </Tooltip>
    </Stack>
    <Stack direction="column" align="center" spacing={2}>
      <Typography>Show tooltip on click</Typography>
      <Tooltip action="click" content="Tooltip" {...args}>
        <IconButton icon={PlusIcon} />
      </Tooltip>
    </Stack>
  </Stack>
);

export const Delay = (args: typeof Tooltip) => {
  const [delay, setDelay] = useState<number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const delay = +e.target.value;
    if (delay > 0) {
      setDelay(delay);
    }
  };

  return (
    <Stack justify="center" spacing="5rem">
      <Stack direction="column" align="center" spacing={2}>
        <Typography>Show tooltip on hover</Typography>
        <Input type="number" value={delay} onChange={handleChange} />
      </Stack>
      <Stack direction="column" align="center" spacing={2}>
        <Tooltip delay={delay} content="Tooltip" {...args}>
          <IconButton icon={PlusIcon} />
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export const Position = (args: typeof Tooltip) => {
  const [placement, setPlacement] =
    useState<TooltipProps["placement"]>("bottom");

  const handleSetPlacement = (v: ComboboxItem | null | undefined) => {
    if (v) {
      setPlacement(v.value as TooltipProps["placement"]);
    }
  };

  return (
    <Stack direction="column" spacing="5rem">
      <Stack direction="column" align="center" spacing={2}>
        <Typography>Placement</Typography>
        <Combobox
          maxItems={12}
          value={placement}
          items={[
            { value: "bottom", key: "bottom" },
            { value: "bottom-start", key: "bottom-start" },
            { value: "bottom-end", key: "bottom-end" },
            { value: "top", key: "top" },
            { value: "top-start", key: "top-start" },
            { value: "top-end", key: "top-end" },
            { value: "left", key: "left" },
            { value: "left-start", key: "left-start" },
            { value: "left-end", key: "left-end" },
            { value: "right", key: "right" },
            { value: "right-start", key: "right-start" },
            { value: "right-end", key: "right-end" },
          ]}
          onSelect={handleSetPlacement}
        />
      </Stack>
      <Stack direction="column" align="center" spacing={2}>
        <Tooltip placement={placement} content="Tooltip" {...args}>
          <IconButton icon={PlusIcon} />
        </Tooltip>
      </Stack>
    </Stack>
  );
};
