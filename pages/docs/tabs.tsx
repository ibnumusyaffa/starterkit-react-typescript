import React from 'react'
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  Variant,
} from '@/components/tabs'
import { Radio } from '@/components/radio'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function Page() {
  const [variant, setVariant] = React.useState<Variant>('default')
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Tabs</div>
        <div className="text-gray-700">-</div>
      </div>

      <div className="space-y-16">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Variant</div>
          <div className="flex space-x-5">
            <Radio
              checked={variant === 'default'}
              onChange={(e) => setVariant(e.target.value as Variant)}
              label="Default"
              value="default"
            ></Radio>
            <Radio
              checked={variant === 'outline'}
              onChange={(e) => setVariant(e.target.value as Variant)}
              label="Outline"
              value="outline"
            ></Radio>
            <Radio
              checked={variant === 'pills'}
              onChange={(e) => setVariant(e.target.value as Variant)}
              label="Pills"
              value="pills"
            ></Radio>
          </div>
        </div>

        <div className="space-y-3 overflow-x-auto">
          <div className="text-xl font-semibold text-gray-700">Horizontal</div>
          <div className="">
            <TabsRoot
              variant={variant}
              orientation="horizontal"
              defaultValue="tab1"
            >
              <TabsList>
                <TabsTrigger value="tab1">Account</TabsTrigger>
                <TabsTrigger value="tab2">Password</TabsTrigger>
                <TabsTrigger
                  leftSection={
                    <Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>
                  }
                  value="tab3"
                >
                  With Icon
                </TabsTrigger>

                <TabsTrigger
                  rightSection={
                    <Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>
                  }
                  value="tab4"
                >
                  With Icon
                </TabsTrigger>
                <TabsTrigger value="tab5" asChild>
                  <button onClick={() => alert('here')}>Button</button>
                </TabsTrigger>
                <TabsTrigger asChild value="tab6">
                  <Link href="/docs/button"> Render as next/link</Link>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab1</TabsContent>
              <TabsContent value="tab2">Tab2</TabsContent>
              <TabsContent value="tab3">Tab3</TabsContent>
              <TabsContent value="tab4">Tab4</TabsContent>
            </TabsRoot>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Vertical</div>
          <div className="">
            <TabsRoot
              variant={variant}
              orientation="vertical"
              defaultValue="tab1"
            >
              <TabsList>
                <TabsTrigger
                  rightSection={
                    <div className="flex items-center justify-center">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs text-white group-data-[state=active]:bg-primary-500">
                        <div>3</div>
                      </div>
                    </div>
                  }
                  value="tab1"
                >
                  Account
                </TabsTrigger>
                <TabsTrigger value="tab2">Password</TabsTrigger>
                <TabsTrigger value="tab3" disabled>
                  Disabled
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">tab1</TabsContent>
              <TabsContent value="tab2">tab2</TabsContent>
              <TabsContent value="tab3">tab3</TabsContent>
            </TabsRoot>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
