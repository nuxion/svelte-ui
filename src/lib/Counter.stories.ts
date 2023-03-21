import type { Meta, StoryObj } from '@storybook/svelte';
import "../lib.postcss";
import Counter from './Counter.svelte';
  

const meta = {
  title: 'Example/Counter',
  component: Counter,
  tags: ['autodocs'],
} satisfies Meta<Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    // label: 'Counter',
  },
};