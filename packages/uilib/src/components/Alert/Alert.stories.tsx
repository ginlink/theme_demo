import React from 'react'
import Alert from './Alert'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
} as Meta

const Template = (args) => <Alert {...args} />

export const Primary = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}
