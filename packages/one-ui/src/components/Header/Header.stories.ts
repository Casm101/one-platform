import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';


const meta = {
  title: 'layout/Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    logo: './logo-v1-notext_small.png',
    siteName: 'OnePlatform'
  },
};
