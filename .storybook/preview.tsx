import React from 'react'
import type { Preview } from '@storybook/react'
import theme from './theme'

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
        <div className={context.globals.primaryColor}>
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
