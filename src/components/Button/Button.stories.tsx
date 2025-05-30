// Storybook story for Button
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: { autodocs: true },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
    },
    color: {
      control: { type: 'select' },
      options: ['slate', 'blue', 'white'],
    },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'slate',
    disabled: false,
  },
}
export default meta

type Story = StoryObj<typeof Button>

// Solid Variants
export const SolidSlate: Story = {
  args: { variant: 'solid', color: 'slate', children: 'Solid Slate' },
  parameters: {
    docs: {
      description: {
        story:
          'Solid variant with slate color. This is the default button style for primary actions.',
      },
    },
  },
}

export const SolidBlue: Story = {
  args: { variant: 'solid', color: 'blue', children: 'Solid Blue' },
  parameters: {
    docs: {
      description: {
        story:
          'Solid variant with blue color. Use for primary actions that require emphasis.',
      },
    },
  },
}

export const SolidWhite: Story = {
  args: { variant: 'solid', color: 'white', children: 'Solid White' },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Solid variant with white color. Best used on dark backgrounds.',
      },
    },
  },
}

// Outline Variants
export const OutlineSlate: Story = {
  args: { variant: 'outline', color: 'slate', children: 'Outline Slate' },
  parameters: {
    docs: {
      description: {
        story:
          'Outline variant with slate color. Use for secondary or less prominent actions.',
      },
    },
  },
}

export const OutlineBlue: Story = {
  args: { variant: 'outline', color: 'blue', children: 'Outline Blue' },
  parameters: {
    docs: {
      description: {
        story:
          'Outline variant with blue color. Use for secondary actions that need some emphasis.',
      },
    },
  },
}

// Disabled States
export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
  parameters: {
    docs: {
      description: {
        story: 'Solid button in a disabled state. Not interactive.',
      },
    },
  },
}

export const DisabledOutline: Story = {
  args: {
    variant: 'outline',
    color: 'blue',
    disabled: true,
    children: 'Disabled Outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline button in a disabled state. Not interactive.',
      },
    },
  },
}

// As Link
export const AsLink: Story = {
  args: { href: '/test', children: 'As Link' },
  parameters: {
    docs: {
      description: {
        story: 'Renders the button as a Next.js Link for navigation.',
      },
    },
  },
}

export const AsLinkOutline: Story = {
  args: {
    variant: 'outline',
    color: 'slate',
    href: '/test',
    children: 'As Link Outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline variant rendered as a Next.js Link.',
      },
    },
  },
}

// Playground
export const Playground: Story = {
  args: {
    children: 'Playground',
    variant: 'solid',
    color: 'slate',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for testing different Button props.',
      },
    },
  },
}
