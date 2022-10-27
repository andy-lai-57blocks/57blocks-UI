import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Progress from './Progress';

export default {
  title: '57blocks/Progress',
  component: Progress,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  percentage: 80
};

export const LinearProgress = Template.bind({});
LinearProgress.args = {
  percentage: 80,
  strokeHeight: 20,
  textInside: true,
  status: 'success',
};

export const CircularProgress = Template.bind({});
CircularProgress.args = {
  type: 'circle',
  percentage: 50,
  status: 'exception',
};
