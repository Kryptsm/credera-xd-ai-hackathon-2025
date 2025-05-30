import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof NavBar>;

/**
 * Default NavBar story.
 */
export const Default: Story = {
  render: () => <NavBar />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the navigation bar with menu icon and sections.',
      },
    },
  },
};
