import React from 'react'
import Link from 'next/link'
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ButtonGroup, ButtonIcon, Color } from '@/components/button'
import { NativeSelect } from '@/components/native-select'

function Page() {
  const [color, setColor] = React.useState<Color>('primary')
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">ButtonIcon</div>
        <div className="text-gray-700">
          ButtonIcon component is used to trigger an action or event
        </div>
      </div>
      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Color</div>
          <div className="flex flex-wrap gap-5">
            <NativeSelect
              value={color}
              onChange={(e) => setColor(e.target.value as Color)}
              fullWidth={false}
            >
              <option value="primary">Primary</option>
              <option value="secondary">Seconday</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="info">Info</option>
              <option value="danger">Danger</option>
            </NativeSelect>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Usage</div>
          <div className="flex flex-wrap gap-5">
            <ButtonIcon color="danger" variant="subtle">
              <TrashIcon className="h-5 w-5"></TrashIcon>
            </ButtonIcon>
            <ButtonIcon color="success" variant="subtle">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color="info" variant="subtle">
              <EyeIcon className="h-5 w-5"></EyeIcon>
            </ButtonIcon>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Variant</div>
          <div className="flex flex-wrap gap-5">
            <ButtonIcon color={color} variant="solid">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} variant="light">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} variant="outline">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} variant="subtle">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} variant="default">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">State</div>

          <div className="flex flex-wrap gap-5">
            <ButtonIcon color={color} loading variant="solid">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} loading variant="light">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} loading variant="outline">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} loading variant="subtle">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} loading variant="default">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
          </div>
          <div className="flex flex-wrap gap-5">
            <ButtonIcon color={color} disabled variant="solid">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} disabled variant="light">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} disabled variant="outline">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} disabled variant="subtle">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} disabled variant="default">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Size</div>
          <div className="flex flex-wrap gap-5">
            <ButtonIcon color={color} size="sm">
              <PencilIcon className="h-4 w-4"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} size="md">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} size="lg">
              <PencilIcon className="h-6 w-6"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon color={color} size="xl">
              <PencilIcon className="h-7 w-7"></PencilIcon>
            </ButtonIcon>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">
            ButtonIcon Group
          </div>
          <div className="space-y-3">
            <ButtonGroup>
              <ButtonIcon color={color} variant="outline">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
              <ButtonIcon color={color} variant="outline">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
              <ButtonIcon color={color} variant="outline">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
            </ButtonGroup>

            <ButtonGroup>
              <ButtonIcon color={color} variant="light">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
              <ButtonIcon color={color} variant="light">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
              <ButtonIcon color={color} variant="light">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
            </ButtonGroup>
            <ButtonGroup>
              <ButtonIcon color={color} variant="solid">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
              <ButtonIcon color={color} variant="solid">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
              <ButtonIcon color={color} variant="solid">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
            </ButtonGroup>
            <ButtonGroup>
              <ButtonIcon color={color} variant="subtle">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
              <ButtonIcon color={color} variant="subtle">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
              <ButtonIcon color={color} variant="subtle">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </ButtonIcon>
            </ButtonGroup>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Polymorphic</div>
          <div className="flex flex-wrap gap-5">
            <ButtonIcon color={color} asChild>
              <a href="http://google.com" target="_blank">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </a>
            </ButtonIcon>
            <ButtonIcon color={color} asChild>
              <Link href="/docs/checkbox">
                <PencilIcon className="h-5 w-5"></PencilIcon>
              </Link>
            </ButtonIcon>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
