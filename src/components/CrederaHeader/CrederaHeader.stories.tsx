import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CrederaHeader from './CrederaHeader'

const meta: Meta<typeof CrederaHeader> = {
  title: 'Components/CrederaHeader',
  component: CrederaHeader,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof CrederaHeader>

/**
 * Default CrederaHeader story.
 */
export const Default: Story = {
  render: () => (
    <CrederaHeader
      title="Welcome to Credera"
      subtitle="Our mission and values"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays the Credera header section with a title and subtitle.',
      },
    },
  },
}
