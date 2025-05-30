import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CrederaStore from './CrederaStore'

const meta: Meta<typeof CrederaStore> = {
  title: 'Components/CrederaStore',
  component: CrederaStore,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof CrederaStore>

/**
 * Default CrederaStore story.
 */
export const Default: Story = {
  render: () => <CrederaStore />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the Credera store section with product details.',
      },
    },
  },
}
