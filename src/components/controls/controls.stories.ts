import { DIRECTION_ARRAY } from "../../constants";
import { Meta, StoryObj } from "@storybook/react";
import { Controls } from ".";

const meta = {
  title: "Atoms/Controls",
  component: Controls,
  argTypes: {
    direction: {
      control: {
        type: "select",
      },
      options: DIRECTION_ARRAY,
    },
  },

  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Controls>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlsStory: Story = {
  args: {
    isForwardAllowed: true,
    isBackwardAllowed: true,
    direction: DIRECTION_ARRAY[0],
    position: { x: 2, y: 2 },
    leftOnClick: () => {},
    rightOnClick: () => {},
    forwardOnClick: () => {},
    backwardOnClick: () => {},
  },
};
