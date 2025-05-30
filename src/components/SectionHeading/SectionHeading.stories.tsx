import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SectionHeading } from './SectionHeading';

const meta: Meta<typeof SectionHeading> = {
  title: 'Components/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof SectionHeading>;

/**
 * Default SectionHeading story.
 */
export const Default: Story = {
  render: () => <SectionHeading number="1">Section Title</SectionHeading>,
  parameters: {
    docs: {
      description: {
        story: 'Displays a section heading with a number and title.',
      },
    },
  },
};
