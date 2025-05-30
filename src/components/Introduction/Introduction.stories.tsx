import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Introduction } from './Introduction';

const meta: Meta<typeof Introduction> = {
  title: 'Components/Introduction',
  component: Introduction,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof Introduction>;

/**
 * Default Introduction story.
 */
export const Default: Story = {
  render: () => <Introduction />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the introduction section with book summary and features.',
      },
    },
  },
};
