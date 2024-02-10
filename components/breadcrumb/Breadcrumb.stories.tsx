import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import type { StoryObj } from '@storybook/react'

import { Breadcrumb, BreadcrumbItem } from '@/components/breadcrumb'

const meta = {
  title: 'Navigation/Breadcrumb',
}

export default meta

export const BasicUsage: StoryObj = {
  render: () => {
    return (
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
        <BreadcrumbItem>Bycycle</BreadcrumbItem>
      </Breadcrumb>
    )
  },
}
export const CustomSeparator: StoryObj = {
  render: () => {
    return (
      <Breadcrumb
        separator={
          <ChevronRightIcon className="h-3.5 w-3.5"></ChevronRightIcon>
        }
      >
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
        <BreadcrumbItem>Using Icon</BreadcrumbItem>
      </Breadcrumb>
    )
  },
}

export const RenderAsLink: StoryObj = {
  render: () => {
    return (
      <Breadcrumb>
        <BreadcrumbItem asChild>
          <Link href="/docs/button">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem asChild>
          <Link href="/docs/button">Product</Link>
        </BreadcrumbItem>
        <BreadcrumbItem asChild>
          <Link href="/docs/button">Detail</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    )
  },
}
