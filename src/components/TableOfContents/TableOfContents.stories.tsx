import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableOfContents } from './TableOfContents';

const meta: Meta<typeof TableOfContents> = {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
};
export default meta;

type Story = StoryObj<typeof TableOfContents>;

/**
 * Default TableOfContents story.
 */
export const Default: Story = {
  render: () => <TableOfContents />,
  parameters: {
    docs: {
      description: {
        story: 'Displays the table of contents section with chapters.',
      },
    },
  },
};
