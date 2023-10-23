import type { Meta, StoryObj } from '@storybook/react';

import { TabGroup } from '.';


const meta = {
  title: 'Advanced Inputs/TabGroup',
  component: TabGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    tabs: ['Notifications', 'Alerts', 'Others']
  },
};

