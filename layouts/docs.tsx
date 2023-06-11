import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'clsx'
import { Bars3Icon } from '@heroicons/react/24/solid'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
} from '@/components/drawer'
const menus = [
  {
    title: 'Forms',
    children: [
      {
        title: 'Button',
        href: '/docs/button',
      },
      {
        title: 'Button Icon',
        href: '/docs/button-icon',
      },
      {
        title: 'Form Control',
        href: '/docs/form-control',
      },
      {
        title: 'Input',
        href: '/docs/input',
      },
      {
        title: 'Native Select',
        href: '/docs/native-select',
      },
      {
        title: 'Checkbox',
        href: '/docs/checkbox',
      },
      {
        title: 'Radio Button',
        href: '/docs/radio',
      },
      {
        title: 'Switch',
        href: '/docs/switch',
      },
      {
        title: 'Text Area',
        href: '/docs/textarea',
      },
      {
        title: 'Slider',
        href: '/docs/slider',
      },
    ],
  },
  {
    title: 'Data Display',
    children: [
      {
        title: 'Accordion',
        href: '/docs/accordion',
      },
      {
        title: 'Table',
        href: '/docs/table',
      },
      {
        title: 'Badge',
        href: '/docs/badge',
      },
      {
        title: 'Avatar',
        href: '/docs/avatar',
      },
      {
        title: 'List',
        href: '/docs/list',
        soon: true,
      },
      {
        title: 'Empty State',
        href: '/docs/empty-state',
      },
      {
        title: 'Timeline',
        href: '/docs/timeline',
      },
      {
        title: 'Indicator',
        href: '/docs/indicator',
      },
    ],
  },
  {
    title: 'Date & Time',
    children: [
      {
        title: 'Date Picker',
        href: '/docs/date-picker',
      },
      {
        title: 'Date Range Picker',
        href: '/docs/date-range-picker',
      },
    ],
  },
  {
    title: 'Feedback',
    children: [
      {
        title: 'Alert',
        href: '/docs/alert',
      },
      {
        title: 'Progress',
        href: '/docs/progress',
      },
      {
        title: 'Spinner',
        href: '/docs/spinner',
      },
      {
        title: 'Toast',
        href: '/docs/toast',
      },
    ],
  },
  {
    title: 'Overlay',
    children: [
      {
        title: 'Dialog',
        href: '/docs/dialog',
      },
      {
        title: 'Alert Dialog',
        href: '/docs/alert-dialog',
      },
      {
        title: 'Drawer',
        href: '/docs/drawer',
      },
      {
        title: 'Dropdown Menu',
        href: '/docs/dropdown-menu',
      },
      {
        title: 'Context Menu',
        href: '/docs/context-menu',
      },
      {
        title: 'Popover',
        href: '/docs/popover',
      },
      {
        title: 'Hover Card',
        href: '/docs/hover-card',
      },
      {
        title: 'Tooltip',
        href: '/docs/tooltip',
      },
    ],
  },
  {
    title: 'Navigation',
    children: [
      {
        title: 'Tabs',
        href: '/docs/tabs',
      },
      {
        title: 'Pagination',
        href: '/docs/pagination',
      },
      {
        title: 'Breadcrumb',
        href: '/docs/breadcrumb',
      },
      {
        title: 'Stepper',
        href: '/docs/stepper',
        soon: true,
      },
    ],
  },
  {
    title: 'Typography',
    children: [
      {
        title: 'Heading',
        href: '/docs/heading',
      },
    ],
  },
  {
    title: 'Others',
    children: [
      {
        title: 'Divider',
        href: '/docs/divider',
      },
    ],
  },
]

function Menu({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}) {
  const router = useRouter()
  return (
    <div className="space-y-5">
      {menus.map((menu) => {
        return (
          <div key={menu.title}>
            <div className=" mb-1.5 font-semibold text-gray-800">
              {menu.title}
            </div>
            <div className=" text-gray-800">
              {menu.children.map((child) => {
                if (child.soon) {
                  return (
                    <div
                      key={child.title}
                      className={cx(
                        'pointer-events-none mb-1.5 cursor-not-allowed text-sm text-gray-400 '
                      )}
                    >
                      {child.title}
                    </div>
                  )
                }
                return (
                  <Link key={child.title} href={child.href} onClick={onClick}>
                    <div
                      className={cx(
                        'mb-1.5 text-sm text-gray-600 hover:text-primary-700 hover:underline',
                        {
                          'font-medium text-primary-700':
                            router.asPath === child.href,
                        }
                      )}
                    >
                      {child.title}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
function Index({ children }: { children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="relative z-0">
      <div className="sticky top-0 z-[1]  flex h-14 items-center space-x-3 border-b border-gray-300 bg-white px-5 md:px-9">
        <div className="block md:hidden">
          <button className="block md:hidden" onClick={() => setShowMenu(true)}>
            <Bars3Icon className="h-5 w-5 md:hidden"></Bars3Icon>
          </button>
        </div>

        <div className="font-semibold uppercase">Starterkit</div>
      </div>
      <div className="fixed hidden h-[calc(100vh-3.5rem)] w-1/6 overflow-y-auto px-12 py-6 md:block">
        <Menu></Menu>
      </div>
      <div className="relative z-0 md:ml-[calc(16%+10px)]">
        <div className="p-5 md:p-10">{children}</div>
      </div>
      <Drawer
        placement="left"
        open={showMenu}
        onOpenChange={setShowMenu}
        size="xs"
      >
        <DrawerCloseButton></DrawerCloseButton>
        <DrawerHeader>
          <div className="px-5">Menu</div>
        </DrawerHeader>
        <DrawerContent>
          <div className="px-5">
            <Menu onClick={() => setShowMenu(false)}></Menu>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Index
