import React from 'react'
import { Badge } from '@/components/badge'
import Link from 'next/link'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  SignalIcon,
} from '@heroicons/react/24/solid'

function Page() {
  // let colors = ['sky', 'red', 'green'];
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Badge</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Variant</div>
        <div className="space-y-5">
          <div className="flex flex-wrap gap-5">
            <div className="w-24">light</div>
            <Badge color="primary" variant="light">
              Badge
            </Badge>
            <Badge color="secondary" variant="light">
              Badge
            </Badge>
            <Badge color="success" variant="light">
              Badge
            </Badge>
            <Badge color="warning" variant="light">
              Badge
            </Badge>
            <Badge color="info" variant="light">
              Badge
            </Badge>
            <Badge color="danger" variant="light">
              Badge
            </Badge>
            <Badge color="neutral" variant="light">
              Badge
            </Badge>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="w-24">solid</div>
            <Badge color="primary" variant="solid">
              Badge
            </Badge>
            <Badge color="secondary" variant="solid">
              Badge
            </Badge>
            <Badge color="success" variant="solid">
              Badge
            </Badge>
            <Badge color="warning" variant="solid">
              Badge
            </Badge>
            <Badge color="info" variant="solid">
              Badge
            </Badge>
            <Badge color="danger" variant="solid">
              Badge
            </Badge>
            <Badge color="neutral" variant="solid">
              Badge
            </Badge>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="w-24">outline</div>
            <Badge color="primary" variant="outline">
              Badge
            </Badge>
            <Badge color="secondary" variant="outline">
              Badge
            </Badge>
            <Badge color="success" variant="outline">
              Badge
            </Badge>
            <Badge color="warning" variant="outline">
              Badge
            </Badge>
            <Badge color="info" variant="outline">
              Badge
            </Badge>
            <Badge color="danger" variant="outline">
              Badge
            </Badge>
            <Badge color="neutral" variant="outline">
              Badge
            </Badge>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="w-24">light-outline</div>
            <Badge color="primary" variant="light-outline">
              Badge
            </Badge>
            <Badge color="secondary" variant="light-outline">
              Badge
            </Badge>
            <Badge color="success" variant="light-outline">
              Badge
            </Badge>
            <Badge color="warning" variant="light-outline">
              Badge
            </Badge>
            <Badge color="info" variant="light-outline">
              Badge
            </Badge>
            <Badge color="danger" variant="light-outline">
              Badge
            </Badge>
            <Badge color="neutral" variant="light-outline">
              Badge
            </Badge>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Size</div>
        <div className="flex flex-wrap gap-5">
          <Badge size="xs" variant="solid">
            Badge xs
          </Badge>
          <Badge size="sm" variant="solid">
            Badge sm
          </Badge>
          <Badge size="md" variant="solid">
            Badge md
          </Badge>
          <Badge size="lg" variant="solid">
            Badge lg
          </Badge>
          <Badge size="xl" variant="solid">
            Badge xl
          </Badge>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">WithDot</div>
        <div className="flex flex-wrap gap-5">
          <Badge withDot variant="light">
            Badge
          </Badge>
          <Badge withDot variant="solid">
            Badge
          </Badge>
          <Badge withDot variant="outline">
            Badge
          </Badge>
          <Badge withDot variant="light-outline">
            Badge
          </Badge>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Rounded</div>
        <div className="flex flex-wrap gap-5">
          <Badge rounded="none" variant="outline">
            rounded none
          </Badge>
          <Badge rounded="xs" variant="outline">
            rounded xs
          </Badge>
          <Badge rounded="sm" variant="outline">
            rounded sm
          </Badge>
          <Badge rounded="md" variant="outline">
            rounded md
          </Badge>
          <Badge rounded="lg" variant="outline">
            rounded lg
          </Badge>
          <Badge rounded="xl" variant="outline">
            rounded xl
          </Badge>
          <Badge rounded="full" variant="outline">
            rounded full
          </Badge>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">With Icon</div>
        <div className="flex flex-wrap gap-5">
          <Badge
            color="primary"
            variant="light"
            rounded="full"
            leftSection={<SignalIcon className="mr-1 h-4 w-4"></SignalIcon>}
          >
            Live
          </Badge>
          <Badge
            color="primary"
            variant="solid"
            rounded="full"
            leftSection={<SignalIcon className="mr-1 h-4 w-4"></SignalIcon>}
          >
            Live
          </Badge>
          <Badge
            color="primary"
            variant="outline"
            rounded="full"
            leftSection={<SignalIcon className="mr-1 h-4 w-4"></SignalIcon>}
          >
            Live
          </Badge>

          <Badge color="success" variant="light" rounded="full">
            <ArrowUpIcon className="h-4 w-4"></ArrowUpIcon>
          </Badge>

          <Badge
            color="success"
            variant="light"
            rounded="full"
            leftSection={<ArrowUpIcon className="mr-1 h-4 w-4"></ArrowUpIcon>}
          >
            20%
          </Badge>
          <Badge
            color="danger"
            variant="light"
            rounded="full"
            leftSection={
              <ArrowDownIcon className="mr-1 h-4 w-4"></ArrowDownIcon>
            }
          >
            20%
          </Badge>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Polymorphic</div>
        <div className="flex flex-wrap gap-5">
          <Badge asChild variant="light">
            <button>render as button</button>
          </Badge>
          <Badge variant="light">
            <a href="http://google.com" target="_blank">
              rendar as link (a)
            </a>
          </Badge>
          <Badge asChild variant="light">
            <Link href="/docs/button"> render as next/link</Link>
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Page
