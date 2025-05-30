import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProductCardGroup } from './ProductCardGroup';

const meta: Meta<typeof ProductCardGroup> = {
  title: 'Components/ProductCardGroup',
  component: ProductCardGroup,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof ProductCardGroup>;

/**
 * Default ProductCardGroup story.
 */
export const Default: Story = {
  render: () => <ProductCardGroup />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the product card group section with Credera products.',
      },
    },
  },
};
