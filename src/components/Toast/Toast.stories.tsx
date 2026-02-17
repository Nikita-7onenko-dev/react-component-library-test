import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";
import { ToastProvider } from "../../context/ToastContext";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const ShortToast: Story = {
  args: {
    toast: {
      type: "success",
      message: "Hello!",
      id: "toast-1",
    },
  },
};

export const LongMessageToast: Story = {
  args: {
    toast: {
      type: "success",
      message: "This is a longer toast message!",
      id: "toast-2",
    },
  },
};

export const LongTimeToast: Story = {
  args: {
    toast: {
      type: "success",
      message: "This will be displayed for 7 seconds",
      id: "toast-3",
      duration: 7000
    }
  }
}