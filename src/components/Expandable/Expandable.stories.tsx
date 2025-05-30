import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Expandable, ExpandableItems, ExpandableButton } from './Expandable'

const meta: Meta<typeof Expandable> = {
  title: 'Components/Expandable',
  component: Expandable,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
}
export default meta

type Story = StoryObj<typeof Expandable>

/**
 * Default Expandable story with two items.
 */
export const Default: Story = {
  render: () => (
    <Expandable>
      <ExpandableItems limit={2}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ExpandableItems>
      <ExpandableButton>Show more</ExpandableButton>
    </Expandable>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Expandable section showing two items by default, expandable to show all.',
      },
    },
  },
}
