import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Author } from './Author'

const meta: Meta<typeof Author> = {
  title: 'Components/Author',
  component: Author,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof Author>

/**
 * Default Author story.
 */
export const Default: Story = {
  render: () => <Author />,
  parameters: {
    docs: {
      description: {
        story:
          'Displays the default Author section with biography and follow link.',
      },
    },
  },
}
