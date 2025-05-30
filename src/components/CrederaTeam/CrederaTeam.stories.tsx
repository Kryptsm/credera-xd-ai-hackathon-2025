import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CrederaTeam from './CrederaTeam'

const meta: Meta<typeof CrederaTeam> = {
  title: 'Components/CrederaTeam',
  component: CrederaTeam,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof CrederaTeam>

/**
 * Default CrederaTeam story.
 */
export const Default: Story = {
  render: () => <CrederaTeam />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the Credera team section with leadership cards.',
      },
    },
  },
}
