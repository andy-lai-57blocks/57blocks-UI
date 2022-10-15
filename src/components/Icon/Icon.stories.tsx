import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Icon from './icon';

import '../../styles/index.scss';

library.add(fas);

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: 'coffee',
  theme: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: 'coffee',
  theme: 'secondary'
};

export const Large = Template.bind({});
Large.args = {
  icon: 'coffee',
  theme: 'primary',
  size: 'lg'
};

export const Small = Template.bind({});
Small.args = {
  icon: 'coffee',
  theme: 'primary',
  size: 'sm'
};
