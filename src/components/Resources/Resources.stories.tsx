import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Resources } from './Resources';

const meta: Meta<typeof Resources> = {
  title: 'Components/Resources',
  component: Resources,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof Resources>;

/**
 * Default Resources story.
 */
export const Default: Story = {
  render: () => <Resources />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the resources section with resource cards and links.',
      },
    },
  },
};
