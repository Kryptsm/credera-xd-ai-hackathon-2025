import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Screencasts } from './Screencasts';

const meta: Meta<typeof Screencasts> = {
  title: 'Components/Screencasts',
  component: Screencasts,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof Screencasts>;

/**
 * Default Screencasts story.
 */
export const Default: Story = {
  render: () => <Screencasts />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the screencasts section with video tutorials.',
      },
    },
  },
};
