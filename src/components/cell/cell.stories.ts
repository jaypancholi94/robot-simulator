import { Meta, StoryObj } from "@storybook/react";
import { Cell } from ".";

const meta = {
  title: "Atoms/Cell",
  component: Cell,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Cell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CellStory: Story = {};
