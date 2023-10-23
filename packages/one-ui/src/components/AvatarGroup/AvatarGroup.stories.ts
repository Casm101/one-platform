import type { Meta, StoryObj } from '@storybook/react';

import { AvatarGroup } from '.';


const meta = {
  title: 'User UX/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    avatars: [
      {
        image: `https://picsum.photos/seed/${Math.random()}/50/50`,
        userName: 'Jane Doe',
        notification: 5
      },
      {
        userName: 'Stephen Fry',
        notification: 1,
        notificationColor: '#DC362D'
      },
      {
        image: `https://picsum.photos/seed/${Math.random()}/50/50`,
        userName: 'Peter Malarky'
      },
      {
        userName: 'Samantha Smith',
        notification: 3,
        notificationColor: '#E88F21'
      },
      {
        image: `https://picsum.photos/seed/${Math.random()}/50/50`,
        userName: 'Joline Summint',
        notification: 5,
        notificationColor: 'hotpink'
      },
    ]
  },
};

