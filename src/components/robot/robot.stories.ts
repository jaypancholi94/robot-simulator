import { DIRECTION_ARRAY } from "../../constants";
import { Meta, StoryObj } from "@storybook/react";
import { Robot } from ".";

const meta = {
  title: "Atoms/Robot",
  component: Robot,
  parameters: { layout: "centered" },
  argTypes: {
    direction: {
      control: {
        type: "select",
      },
      options: DIRECTION_ARRAY,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Robot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RobotStory: Story = {
  args: { direction: "east" },
};
