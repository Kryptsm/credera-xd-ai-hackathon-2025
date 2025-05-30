// Storybook story for Button
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
}

export const SolidBlue: Story = {
  args: { variant: 'solid', color: 'blue', children: 'Solid Blue' },
}

export const SolidWhite: Story = {
  args: { variant: 'solid', color: 'white', children: 'Solid White' },
  parameters: { backgrounds: { default: 'dark' } },
}

// Outline Variants
export const OutlineSlate: Story = {
  args: { variant: 'outline', color: 'slate', children: 'Outline Slate' },
}

export const OutlineBlue: Story = {
  args: { variant: 'outline', color: 'blue', children: 'Outline Blue' },
}

// Disabled States
export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
}

export const DisabledOutline: Story = {
  args: {
    variant: 'outline',
    color: 'blue',
    disabled: true,
    children: 'Disabled Outline',
  },
}

// As Link
export const AsLink: Story = {
  args: { href: '/test', children: 'As Link' },
}

export const AsLinkOutline: Story = {
  args: {
    variant: 'outline',
    color: 'slate',
    href: '/test',
    children: 'As Link Outline',
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
}
