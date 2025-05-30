import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { GridPattern } from './GridPattern'

const meta: Meta<typeof GridPattern> = {
  title: 'Components/GridPattern',
  component: GridPattern,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof GridPattern>

/**
 * Default GridPattern story.
 */
export const Default: Story = {
  render: () => <GridPattern x="50%" />, // Example prop
  parameters: {
    docs: {
      description: {
        story: 'Displays the SVG grid pattern background.',
      },
    },
  },
}
