// scripts/watch-components.js
// Watches for new .tsx files in src/components and generates .stories.tsx and JSDoc

const chokidar = require('chokidar')
const fs = require('fs')
const path = require('path')

const componentsDir = path.join(__dirname, '../src/components')

function getStoryTemplate(componentName) {
  return `import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ${componentName} from './${componentName}.tsx';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
};
export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {},
};
`
}

function addJsDocIfMissing(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  if (!content.trim().startsWith('/**')) {
    const base = path.basename(filePath)
    const jsdoc = `/**\n * ${base} - React component\n */\n`
    content = jsdoc + content
    fs.writeFileSync(filePath, content)
  }
}

chokidar
  .watch(componentsDir, { ignoreInitial: true, depth: 2 })
  .on('add', (filePath) => {
    if (filePath.endsWith('.tsx') && !filePath.endsWith('.stories.tsx')) {
      const dir = path.dirname(filePath)
      const base = path.basename(filePath, '.tsx')
      const storyPath = path.join(dir, `${base}.stories.tsx`)
      if (!fs.existsSync(storyPath)) {
        fs.writeFileSync(storyPath, getStoryTemplate(base))
        console.log(`Created: ${storyPath}`)
      }
      addJsDocIfMissing(filePath)
      console.log(`Ensured JSDoc for: ${filePath}`)
    }
  })

console.log('Watching for new components in src/components...')
