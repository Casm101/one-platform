import type { Meta, StoryObj } from '@storybook/react';

import { HeroSection } from '.';


const meta = {
  title: 'Sections/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    thing: ''
  },
};
