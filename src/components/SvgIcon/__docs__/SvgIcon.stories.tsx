import PlusIcon from "../../../assets/icons/PlusIcon";
import { Stack } from "../../index";

import SvgIcon from "../SvgIcon";

export default {
  title: "SvgIcon",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "SvgIcon component for render and style svg icons.",
      },
    },
  },
  component: SvgIcon,
};

export const Basic = () => (
  <Stack justify="center" spacing={4}>
    <SvgIcon icon={PlusIcon} color="primary" />
  </Stack>
);

export const Color = () => (
  <Stack justify="center" spacing={4}>
    <SvgIcon icon={PlusIcon} color="inherit" />
    <SvgIcon icon={PlusIcon} color="primary" />
    <SvgIcon icon={PlusIcon} color="secondary" />
    <SvgIcon icon={PlusIcon} color="error" />
    <SvgIcon icon={PlusIcon} color="success" />
    <SvgIcon icon={PlusIcon} color="info" />
    <SvgIcon icon={PlusIcon} color="warning" />
  </Stack>
);

export const Size = () => (
  <Stack justify="center" align="center" spacing={4}>
    <SvgIcon icon={PlusIcon} fontSize="small" color="primary" />
    <SvgIcon icon={PlusIcon} fontSize="medium" color="primary" />
    <SvgIcon icon={PlusIcon} fontSize="large" color="primary" />
  </Stack>
);
