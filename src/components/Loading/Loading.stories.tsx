import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loading from './Loading';

export default {
  title: '57blocks/Loading',
  component: Loading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
};

export const LoadingText = Template.bind({});
LoadingText.args = {
  text: 'Loading'
};
