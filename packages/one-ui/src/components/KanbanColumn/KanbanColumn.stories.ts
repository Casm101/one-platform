import type { Meta, StoryObj } from '@storybook/react';

import { KanbanColumn } from '.';


const meta = {
  title: 'Kanban/KanbanColumn',
  component: KanbanColumn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof KanbanColumn>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    
  },
};