import React from 'react'
import type { StoryObj } from '@storybook/react'

import { OptionType, ReactSelect } from '@/components/react-select'

const meta = {
  title: 'Components/ReactSelect',
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  render: () => {
    const [value, setValue] = React.useState<OptionType | null>(null)
    return (
      <ReactSelect
        placeholder="Select Option"
        value={value}
        onChange={(v: OptionType) => setValue(v)}
        isClearable
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]}
      />
    )
  },
}
