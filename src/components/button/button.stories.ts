import { BUTTON_ICON_TYPES } from "../../constants";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    label: { control: { type: "text" } },
    icon: {
      control: { type: "select" },
      options: Object.values(BUTTON_ICON_TYPES),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  args: { label: "Just a button" },
};
export const ForwardButtonStory: Story = {
  args: { label: "Forward", icon: BUTTON_ICON_TYPES.FORWARD },
};
export const LeftButtonStory: Story = {
  args: { label: "Left", icon: BUTTON_ICON_TYPES.LEFT },
};
export const RightButtonStory: Story = {
  args: { label: "Right", icon: BUTTON_ICON_TYPES.RIGHT },
};
