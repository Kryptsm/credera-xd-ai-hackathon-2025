import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CrederaBlog from './CrederaBlog'

const meta: Meta<typeof CrederaBlog> = {
  title: 'Components/CrederaBlog',
  component: CrederaBlog,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof CrederaBlog>

/**
 * Default CrederaBlog story.
 */
export const Default: Story = {
  render: () => <CrederaBlog />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the Credera blog section with sample posts.',
      },
    },
  },
}
