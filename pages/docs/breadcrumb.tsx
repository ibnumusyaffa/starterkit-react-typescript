import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Breadcrumb, BreadcrumbItem } from '@/components/breadcrumb'

function breadcrumb() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Breadcrumb</div>
        <div className="text-gray-700">-</div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Default</div>
        <div className="space-y-5">
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Product</BreadcrumbItem>
            <BreadcrumbItem>Bycycle</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">
          Custom Separator
        </div>
        <div className="space-y-5">
          <Breadcrumb separator="-">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Product</BreadcrumbItem>
            <BreadcrumbItem>Using String</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb
            separator={
              <ChevronRightIcon className="h-3.5 w-3.5"></ChevronRightIcon>
            }
          >
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Product</BreadcrumbItem>
            <BreadcrumbItem>Using Icon</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">
          Usage with next/link
        </div>
        <div className="space-y-5">
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
        </div>
      </div>
    </div>
  )
}

export default breadcrumb
