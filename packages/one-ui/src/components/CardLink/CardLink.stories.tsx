import type { Meta, StoryObj } from '@storybook/react';

import { CardLink } from '.';


const meta = {
  title: 'Cards/CardLink',
  component: CardLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof CardLink>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    title: 'OnePlatform',
    image: 'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/SendGrid-Logo_0375766527.png',
    description: 'Unified service platform for TWS',
    link: {
      label: 'see more',
      href: 'https://theworkshop.com/'
    }
  },
};

