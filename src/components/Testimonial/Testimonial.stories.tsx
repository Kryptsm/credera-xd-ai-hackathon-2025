import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Testimonial } from './Testimonial';

const meta: Meta<typeof Testimonial> = {
  title: 'Components/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof Testimonial>;

/**
 * Default Testimonial story.
 */
export const Default: Story = {
  render: () => (
    <Testimonial id="t1" author={{ name: 'Jane Doe', role: 'CEO', image: '' }}>
      This is a sample testimonial.
    </Testimonial>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays a testimonial card with author and content.',
      },
    },
  },
};
