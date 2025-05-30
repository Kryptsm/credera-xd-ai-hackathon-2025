import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof Container>

/**
 * Default Container story.
 */
export const Default: Story = {
  render: () => (
    <Container size="md" className="bg-gray-100 p-8">
      <div>Container content goes here.</div>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive container with medium size and background.',
      },
    },
  },
}
