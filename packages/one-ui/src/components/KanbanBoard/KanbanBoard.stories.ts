import type { Meta, StoryObj } from '@storybook/react';

import { KanbanBoard } from '.';


const meta = {
  title: 'Kanban/KanbanBoard',
  component: KanbanBoard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof KanbanBoard>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {

  },
};