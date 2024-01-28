import React from 'react'
import type { Preview } from '@storybook/react'

import theme from './theme'

import '@/styles/globals.css'

import { Inter as Font } from 'next/font/google'

const font = Font({
  subsets: ['latin'],
})
const preview: Preview = {
  globalTypes: {
    primaryColor: {
      name: 'Primary Color',
      defaultValue: 'sky',
      toolbar: {
        title: 'PrimaryColor',
        icon: 'circlehollow',
        dynamicTitle: true,
        items: [
          {
            value: 'sky',
            title: 'Sky Blue',
          },
          {
            value: 'purple',
            title: 'Purple',
          },
          {
            value: 'green',
            title: 'Green',
          },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <div className={`${context.globals.primaryColor} ${font.className}`}>
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    docs: {
      theme: theme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
