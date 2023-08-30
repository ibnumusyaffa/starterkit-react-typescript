import React from 'react'
import { Button, ButtonGroup, Color } from '@/components/button'
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { NativeSelect } from '@/components/native-select'

function Page() {
  const [color, setColor] = React.useState<Color>('primary')

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Button</div>
        <div className="text-gray-700">
          Button component is used to trigger an action or event
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
          <div className="text-xl font-semibold text-gray-700">Variant</div>
          <div className="flex flex-wrap gap-5">
            <Button color={color} variant="solid">
              Solid
            </Button>
            <Button color={color} variant="light">
              Light
            </Button>
            <Button color={color} variant="outline">
              Outline
            </Button>
            <Button color={color} variant="subtle">
              Subtle
            </Button>
            <Button color={color} variant="default">
              Default
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">State</div>

          <div className="flex flex-wrap gap-5">
            <Button color={color} loading variant="solid">
              Loading
            </Button>
            <Button color={color} loading variant="light">
              Loading
            </Button>
            <Button color={color} loading variant="outline">
              Loading
            </Button>
            <Button color={color} loading variant="subtle">
              Loading
            </Button>
            <Button color={color} loading variant="default">
              Loading
            </Button>
          </div>
          <div className="flex flex-wrap gap-5">
            <Button color={color} disabled variant="solid">
              Disabled
            </Button>
            <Button color={color} disabled variant="light">
              Disabled
            </Button>
            <Button color={color} disabled variant="outline">
              Disabled
            </Button>
            <Button color={color} disabled variant="subtle">
              Disabled
            </Button>
            <Button color={color} disabled variant="default">
              Disabled
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Size</div>
          <div className="flex flex-wrap gap-5">
            <Button color={color} size="sm">
              Button sm
            </Button>
            <Button color={color} size="md">
              Button md
            </Button>
            <Button color={color} size="lg">
              Button lg
            </Button>
            <Button color={color} size="xl">
              Button xl
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">With Icon</div>
          <div className="space-y-5">
            <div className="flex flex-wrap gap-5">
              <Button
                color={color}
                variant="light"
                leftIcon={
                  <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
                }
              >
                Left Icon
              </Button>
              <Button
                color={color}
                variant="light"
                leftIcon={
                  <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
                }
                rightIcon={
                  <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
                }
              >
                Left Right Icon
              </Button>
              <Button
                color={color}
                variant="light"
                rightIcon={
                  <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
                }
              >
                Right icon
              </Button>
            </div>
            <div className="flex flex-wrap gap-5">
              <Button
                color={color}
                variant="outline"
                leftIcon={
                  <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
                }
              >
                Left Icon
              </Button>
              <Button
                color={color}
                variant="outline"
                leftIcon={
                  <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
                }
                rightIcon={
                  <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
                }
              >
                Left Right Icon
              </Button>
              <Button
                color={color}
                variant="outline"
                rightIcon={
                  <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
                }
              >
                Right icon
              </Button>
            </div>
            <div className="flex flex-wrap gap-5">
              <Button
                color={color}
                variant="solid"
                leftIcon={
                  <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
                }
              >
                Left Icon
              </Button>
              <Button
                color={color}
                variant="solid"
                leftIcon={
                  <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
                }
                rightIcon={
                  <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
                }
              >
                Left Right Icon
              </Button>
              <Button
                color={color}
                variant="solid"
                rightIcon={
                  <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
                }
              >
                Right icon
              </Button>
            </div>
            <div className="flex flex-wrap gap-5">
              <Button
                color={color}
                variant="subtle"
                leftIcon={
                  <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
                }
              >
                Left Icon
              </Button>
              <Button
                color={color}
                variant="subtle"
                leftIcon={
                  <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
                }
                rightIcon={
                  <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
                }
              >
                Left Right Icon
              </Button>
              <Button
                color={color}
                variant="subtle"
                rightIcon={
                  <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
                }
              >
                Right icon
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">
            Button Group
          </div>
          <div className="space-y-3">
            <ButtonGroup>
              <Button color={color} variant="outline">
                Button 1
              </Button>
              <Button color={color} variant="outline">
                Button 2
              </Button>
              <Button color={color} variant="outline">
                Button 3
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button color={color} variant="light">
                Button 1
              </Button>
              <Button color={color} variant="light">
                Button 2
              </Button>
              <Button color={color} variant="light">
                Button 3
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color={color} variant="solid">
                Button 1
              </Button>
              <Button color={color} variant="solid">
                Button 2
              </Button>
              <Button color={color} variant="solid">
                Button 3
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color={color} variant="subtle">
                Button 1
              </Button>
              <Button color={color} variant="subtle">
                Button 2
              </Button>
              <Button color={color} variant="subtle">
                Button 3
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Full Width</div>
          <div className="flex flex-wrap gap-5">
            <Button fullWidth color={color}>
              Button
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Polymorphic</div>
          <div className="flex flex-wrap gap-5">
            <Button
              color={color}
              asChild
              rightIcon={
                <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
              }
            >
              <a href="http://google.com" target="_blank">
                Render as link (a)
              </a>
            </Button>
            <Button loading color={color} asChild>
              <Link href="/docs/checkbox"> Render as Next/link</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
