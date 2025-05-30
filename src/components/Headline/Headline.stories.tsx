import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Headline } from './Headline'

const meta: Meta<typeof Headline> = {
  title: 'Components/Headline',
  component: Headline,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof Headline>

/**
 * Default Headline story.
 */
export const Default: Story = {
  render: () => <Headline tagline="Welcome" headline="Main Title" />, // Example props
  parameters: {
    docs: {
      description: {
        story: 'Displays the headline section with tagline and main title.',
      },
    },
  },
}
