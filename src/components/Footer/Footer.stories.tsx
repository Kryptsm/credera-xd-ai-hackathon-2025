import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof Footer>

/**
 * Default Footer story.
 */
export const Default: Story = {
  render: () => <Footer />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the site footer with copyright.',
      },
    },
  },
}
