/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components/pagination'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    totalPages: 100,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = React.useState(1)
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      ></Pagination>
    )
  },
}
