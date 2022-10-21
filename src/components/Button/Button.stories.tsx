import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: '57blocks/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Test Button</Button>;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  type: 'primary'
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  type: 'warning',
  disabled: true
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: 'circle-user',
  type: 'info',
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  type: 'primary',
  loading: true,
};

export const Sizes = Template.bind({});
Sizes.args = {
  type: 'primary',
  size: 'large',
  icon: 'truck'
};
