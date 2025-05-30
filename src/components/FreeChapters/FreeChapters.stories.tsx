import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { FreeChapters } from './FreeChapters'

const meta: Meta<typeof FreeChapters> = {
  title: 'Components/FreeChapters',
  component: FreeChapters,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof FreeChapters>

/**
 * Default FreeChapters story.
 */
export const Default: Story = {
  render: () => <FreeChapters />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the free chapters signup section.',
      },
    },
  },
}
