import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'Components/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof StarRating>;

/**
 * Default StarRating story.
 */
export const Default: Story = {
  render: () => <StarRating rating={5} />, // Example prop
  parameters: {
    docs: {
      description: {
        story: 'Displays a star rating with five stars.',
      },
    },
  },
};
