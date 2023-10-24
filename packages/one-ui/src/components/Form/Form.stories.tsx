import type { Meta, StoryObj } from '@storybook/react';

import { Form } from '.';


const meta = {
  title: 'Layout/Form',
  component: Form,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    title: 'Form title',
    subTitle: 'Form subtitle longer'
  },
};

