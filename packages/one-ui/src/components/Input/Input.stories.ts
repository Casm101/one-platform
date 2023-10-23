import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';


const meta = {
  title: 'Basic Inputs/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    primary: true,
    label: 'User Name',
    placeholder: 'John Smith',
    name: 'username'
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    placeholder: 'John Smith',
    name: 'username'
  },
};

export const Password: Story = {
  args: {
    primary: true,
    label: 'Password',
    placeholder: 'New Password',
    type: 'password',
    name: 'password'
  },
};
