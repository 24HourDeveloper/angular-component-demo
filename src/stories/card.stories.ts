import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

import type { Meta, StoryObj } from "@storybook/angular";
import { fn } from "@storybook/test";

import { CardComponent } from "./card.component";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CardComponent> = {
  title: "Example/Card",
  component: CardComponent,
  tags: ["autodocs"],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<CardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular: Story = {
  args: {
    title: "title",
    content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds
    of dog from Japan. A small, agile dog that copes very well with mountainous
    terrain, the Shiba Inu was originally bred for hunting.`,
    link: "learn more",
  },
};
