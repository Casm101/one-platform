import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';


const meta = {
  title: 'User UX/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    shape: {
      options: ['round', 'square'],
      control: { type: 'radio' }
    }
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    image: `https://picsum.photos/seed/${Math.random()}/50/50`,
    userName: 'Jane Doe',
    notification: 5
  },
};

export const Square: Story = {
  args: {
    image: `https://picsum.photos/seed/${Math.random()}/50/50`,
    shape: 'square',
    userName: 'Jane Doe',
    notification: 2,
    notificationColor: '#6B39BD'
  },
};

export const NoImage: Story = {
  args: {
    userName: 'Jane Doe',
  },
};

