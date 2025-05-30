import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof Hero>

/**
 * Default Hero story.
 */
export const Default: Story = {
  render: () => <Hero />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the hero section with cover image and testimonial.',
      },
    },
  },
}
