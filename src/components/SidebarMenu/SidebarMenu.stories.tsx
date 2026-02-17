import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMenu } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const oneLevelItems = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
];

const twoLevelItems = [
  { id: "1", title: "Item 1" },
  {
    id: "2",
    title: "Item 2",
    children: [
      { id: "2-1", title: "Subitem 1" },
      { id: "2-2", title: "Subitem 2" },
    ],
  },
];

export const OneLevelMenu = {
    args: {
    isOpen: true,
    items: oneLevelItems,
    onClose: () => {},
  },
};

export const OpenTwoLevel: Story = {
  args: {
    isOpen: true,
    items: twoLevelItems,
    onClose: () => {},
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    items: twoLevelItems,
    onClose: () => {},
  },
};