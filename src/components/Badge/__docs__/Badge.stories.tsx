import { Meta } from "@storybook/react";
import { ChangeEvent, useState } from "react";

import { Radio, Stack, SvgIcon, Switch, Typography } from "../../index";
import MailIcon from "../../../assets/icons/MailIcon";

import Badge, { BadgeOrigin, BadgeProps } from "../Badge";

export default {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The badge component is a small visual indicator used to convey specific information or status within an interface. It is commonly used to highlight new items, notifications, or other important updates to users.",
      },
    },
  },
  argTypes: {
    anchorOrigin: {
      options: ["Top Right", "Top Left", "Bottom Right", "Bottom Left"],
      mapping: {
        "Top Right": { vertical: "top", horizontal: "right" },
        "Top Left": { vertical: "top", horizontal: "left" },
        "Bottom Right": { vertical: "bottom", horizontal: "right" },
        "Bottom Left": { vertical: "bottom", horizontal: "left" },
      },
    },
    badgeContent: {
      control: "text",
    },
    className: {
      control: "text",
    },
    color: {
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
    invisible: {
      control: "boolean",
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["dot", "standard"],
    },
  },
} as Meta<typeof Badge>;

/**
 * Examples of badges containing text. The badge is applied to its children.
 */
export const BasicBadge = (args: BadgeProps) => (
  <Stack justify="center" spacing={2} style={{ padding: "1rem" }}>
    <Badge badgeContent={5} {...args}>
      <SvgIcon color="primary" icon={MailIcon} />
    </Badge>
  </Stack>
);

/**
 * The <code>dot</code> prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.
 */
export const DotBadge = (args: BadgeProps) => (
  <Stack justify="center" spacing={2} style={{ padding: "1rem" }}>
    <Badge color="primary" variant="dot" {...args}>
      <SvgIcon icon={MailIcon} />
    </Badge>
  </Stack>
);

/**
 * Use <code>color</code> prop to apply theme palette to component.
 */
export const BadgeColor = (args: BadgeProps) => (
  <Stack justify="center" spacing={4}>
    <Badge badgeContent={5} color="default" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="primary" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="secondary" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="info" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="success" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="warning" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="error" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
  </Stack>
);

/**
 * The visibility of badges can be controlled using the <code>invisible</code> prop.
 */
export const BadgeVisibility = (args: BadgeProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(args.invisible || true);

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="column" align="center" spacing={4}>
        <Switch
          checked={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
          label="Show Badge"
          labelPlacement="end"
        />
        <Stack justify="center" spacing={4}>
          <Badge invisible={!isVisible} variant="dot" color="primary" {...args}>
            <SvgIcon color="muted" icon={MailIcon} />
          </Badge>
          <Badge
            badgeContent={5}
            invisible={!isVisible}
            color="primary"
            {...args}
          >
            <SvgIcon color="muted" icon={MailIcon} />
          </Badge>
        </Stack>
      </Stack>
    </Stack>
  );
};

/**
 * You can use the <code>anchorOrigin</code> prop to move the badge to any corner of the wrapped element.
 */
export const BadgeAlignment = (args: BadgeProps) => {
  const [vertical, setVertical] = useState<BadgeOrigin["vertical"]>(
    args.anchorOrigin?.vertical || "top",
  );
  const [horizontal, setHorizontal] = useState<BadgeOrigin["horizontal"]>(
    args.anchorOrigin?.horizontal || "right",
  );

  const handleChangeVertical = (e: ChangeEvent<HTMLInputElement>) => {
    setVertical(e.target.value as typeof vertical);
  };

  const handleChangeHorizontal = (e: ChangeEvent<HTMLInputElement>) => {
    setHorizontal(e.target.value as typeof horizontal);
  };

  return (
    <Stack direction="column" spacing={3} align="center">
      <Stack spacing={4}>
        <Stack direction="column" spacing={2}>
          <Typography component="p">Vertical</Typography>
          <Radio
            label="Top"
            name="vertical-1"
            value="top"
            checked={vertical === "top"}
            onChange={handleChangeVertical}
          />
          <Radio
            label="Bottom"
            name="vertical-1"
            value="bottom"
            checked={vertical === "bottom"}
            onChange={handleChangeVertical}
          />
        </Stack>
        <Stack direction="column" spacing={2}>
          <Typography component="p">Horizontal</Typography>
          <Radio
            label="Right"
            name="horizontal"
            value="right"
            checked={horizontal === "right"}
            onChange={handleChangeHorizontal}
          />
          <Radio
            label="Left"
            name="horizontal"
            value="left"
            checked={horizontal === "left"}
            onChange={handleChangeHorizontal}
          />
        </Stack>
      </Stack>
      <Stack spacing={4}>
        <Badge
          variant="dot"
          color="primary"
          anchorOrigin={{
            vertical,
            horizontal,
          }}
          {...args}
        >
          <SvgIcon color="muted" icon={MailIcon} />
        </Badge>
        <Badge
          color="primary"
          anchorOrigin={{
            vertical,
            horizontal,
          }}
          badgeContent={5}
          {...args}
        >
          <SvgIcon color="muted" icon={MailIcon} />
        </Badge>
        <Badge
          color="primary"
          anchorOrigin={{
            vertical,
            horizontal,
          }}
          badgeContent={999}
          {...args}
        >
          <SvgIcon color="muted" icon={MailIcon} />
        </Badge>
      </Stack>
    </Stack>
  );
};
