import { CheckIcon } from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'

import { InputNumber } from '@/components/input-number'

const meta = {
  title: 'Components/InputNumber',
  component: InputNumber,
} satisfies Meta<typeof InputNumber>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    placeholder: 'Input Number',
  },
  render: (args) => {
    return <InputNumber {...args} />
  },
}

export const Disable: Story = {
  args: {
    disabled: true,
    placeholder: 'Input Number',
  },
  render: (args) => {
    return <InputNumber {...args} />
  },
}

export const ReadOnly: Story = {
  args: {
    placeholder: 'Input Number',
  },
  render: (args) => {
    return <InputNumber {...args} isReadOnly value={10} />
  },
}

export const HideStepper: Story = {
  args: {
    placeholder: 'Input Number',
  },
  render: (args) => {
    return <InputNumber {...args} hideStepper />
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: 'Input Number',
  },
  render: (args) => {
    return (
      <InputNumber
        {...args}
        icon={<CheckIcon className="h-4 w-4"> </CheckIcon>}
      />
    )
  },
}

export const MinAndMaxValue: Story = {
  args: {
    placeholder: 'Input Number',
  },
  render: (args) => {
    return (
      <InputNumber
        {...args}
        placeholder="Min 1 Max 10"
        minValue={1}
        maxValue={10}
      />
    )
  },
}

export const Step: Story = {
  args: {
    placeholder: 'Input Number',
  },
  render: (args) => {
    return (
      <InputNumber
        {...args}
        placeholder="Min 0 Max 50 With Step 5"
        minValue={0}
        maxValue={50}
        step={5}
      />
    )
  },
}

export const Size: Story = {
  render: () => {
    return (
      <div className="space-y-5">
        <InputNumber placeholder="sm" size="sm" />
        <InputNumber placeholder="md" size="md" />
        <InputNumber placeholder="lg" size="lg" />
        <InputNumber placeholder="xl" size="xl" />
      </div>
    )
  },
}

export const Decimal: Story = {
  render: () => {
    return (
      <InputNumber
        placeholder="Decimal value"
        formatOptions={{
          signDisplay: 'auto',
          minimumFractionDigits: 2,
          maximumFractionDigits: 3,
        }}
        locale="id-ID"
      ></InputNumber>
    )
  },
}

export const Percentage: Story = {
  render: () => {
    return (
      <InputNumber
        placeholder="Percentage value"
        formatOptions={{ style: 'percent' }}
        locale="id-ID"
      />
    )
  },
}

export const Currency: Story = {
  render: () => {
    return (
      <InputNumber
        placeholder="Currency value"
        formatOptions={{
          style: 'currency', //decimal, currency, unit, percent
          currency: 'IDR', //ISO 4217 currency codes
          currencyDisplay: 'narrowSymbol', //code,symbol,narrowSymbol,name
          currencySign: 'standard', //"standard" | "accounting"
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }}
        locale="id-ID"
      />
    )
  },
}

export const Unit: Story = {
  render: () => {
    return (
      <InputNumber
        placeholder="Unit value"
        formatOptions={{
          style: 'unit',
          unit: 'inch',
          unitDisplay: 'long',
        }}
        locale="id-ID"
      />
    )
  },
}

export const Locale: Story = {
  render: () => {
    return (
      <div className="space-y-5">
        <InputNumber placeholder="id-ID" locale="id-ID" />
        <InputNumber placeholder="en-US" locale="en-US" />
      </div>
    )
  },
}
