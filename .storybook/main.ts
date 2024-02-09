import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: true,
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../.'),
      }
    }
    return config
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      savePropValueAsString: false,
      shouldExtractValuesFromUnion: false,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false,
      propFilter: (prop, component) => {
        console.log(prop)
        if (
          [
            'children',
            'onChange',
            'value',
            'placeholder',
            'type',
            'disabled',
            'name',
          ].includes(prop.name)
        ) {
          return true
        }

        const hides = ['className', 'asChild']

        if (hides.includes(prop.name)) {
          return false
        }
        if (prop.parent?.fileName.includes('@radix-ui')) {
          return true
        }

        if (prop.parent?.fileName.includes('@react-types')) {
          return true
        }

        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find(
            (declaration) => {
              return !declaration.fileName.includes('node_modules')
            }
          )

          return Boolean(hasPropAdditionalDescription)
        }

        return true
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
