import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button/Button';
import Badge from './Badge';

export default {
  title: '57blocks/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}><Button>Primary Button</Button></Badge>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  value: 8
};

export const MaxValue = Template.bind({});
MaxValue.args = {
  value: 150,
  max: 99
};

export const Customizations = Template.bind({});
Customizations.args = {
  value: 'new'
};

export const LittleRedDot = Template.bind({});
LittleRedDot.args = {
  isDot: true,
};
