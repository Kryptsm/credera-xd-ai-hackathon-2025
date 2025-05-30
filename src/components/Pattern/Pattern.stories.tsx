import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pattern } from './Pattern';

const meta: Meta<typeof Pattern> = {
  title: 'Components/Pattern',
  component: Pattern,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof Pattern>;

/**
 * Default Pattern story.
 */
export const Default: Story = {
  render: () => <Pattern />, // Example props
  parameters: {
    docs: {
      description: {
        story: 'Displays the SVG pattern background.',
      },
    },
  },
};
