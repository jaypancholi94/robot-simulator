import { Meta, StoryObj } from "@storybook/react";
import { Grid } from ".";

const meta = {
  title: "Atoms/Grid",
  component: Grid,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GridStory: Story = { args: { size: 5 } };
