import type { Meta, StoryObj } from '@storybook/react';

import { KanbanTask } from '.';


const meta = {
  title: 'Kanban/KanbanTask',
  component: KanbanTask,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof KanbanTask>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    task: {
      id: '42',
      title: 'The meaning of life',
      description: '... the universe and everything'
    },
    index: '42'
  },
};