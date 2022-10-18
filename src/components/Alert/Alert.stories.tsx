import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from './Alert';

export default {
  title: '57blocks/Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  title: 'success alert',
  type: 'success'
};

export const CustomizableCloseButton = Template.bind({});
CustomizableCloseButton.args = {
  title: 'customized close-text',
  type: 'warning',
  closeText: 'close'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'info alert',
  type: 'info',
  showIcon: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'error alert',
  type: 'error',
  description: 'more text description',
  showIcon: true,
};
