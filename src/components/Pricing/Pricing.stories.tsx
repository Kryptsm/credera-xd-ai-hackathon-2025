import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pricing } from './Pricing';

const meta: Meta<typeof Pricing> = {
  title: 'Components/Pricing',
  component: Pricing,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof Pricing>;

/**
 * Default Pricing story.
 */
export const Default: Story = {
  render: () => <Pricing />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the pricing section with subscription plans.',
      },
    },
  },
};
