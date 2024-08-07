import { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta = {
  title: "Atoms/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {};
