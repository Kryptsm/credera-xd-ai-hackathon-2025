import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Testimonials } from './Testimonials';

const meta: Meta<typeof Testimonials> = {
  title: 'Components/Testimonials',
  component: Testimonials,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof Testimonials>;

/**
 * Default Testimonials story.
 */
export const Default: Story = {
  render: () => <Testimonials />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the testimonials section with multiple testimonial cards.',
      },
    },
  },
};
