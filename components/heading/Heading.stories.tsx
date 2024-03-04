/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { H1, H2, H3, H4, H5, H6 } from '@/components/heading'

const meta = {
  title: 'Components/Heading',
  component: H1,
} satisfies Meta<typeof H1>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  render: () => {
    return (
      <div className="space-y-5">
        <H1>The quick brown fox jumps over the lazy dog</H1>
        <H2>The quick brown fox jumps over the lazy dog2</H2>
        <H3>The quick brown fox jumps over the lazy dog</H3>
        <H4>The quick brown fox jumps over the lazy dog</H4>
        <H5>The quick brown fox jumps over the lazy dog</H5>
        <H6>The quick brown fox jumps over the lazy dog</H6>
      </div>
    )
  },
}
