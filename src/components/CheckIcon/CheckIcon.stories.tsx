import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { CheckIcon } from './CheckIcon'

const meta: Meta<typeof CheckIcon> = {
  title: 'Components/CheckIcon',
  component: CheckIcon,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof CheckIcon>

/**
 * Default CheckIcon story.
 */
export const Default: Story = {
  render: () => <CheckIcon className="h-8 w-8 text-green-500" />,
  parameters: {
    docs: {
      description: {
        story:
          'Renders a checkmark icon, commonly used for success or completion states.',
      },
    },
  },
}
