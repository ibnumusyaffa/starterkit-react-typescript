/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import type { StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import {
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogFooter,
  DialogHeader,
  Size as SizeType,
} from '@/components/dialog'

const meta = {
  title: 'Components/Dialog',
}

export default meta

// type Story = StoryObj<typeof meta>

export const BasicUsage: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <React.Fragment>
        <Button variant="default" onClick={() => setOpen(!open)}>
          Simple
        </Button>
        <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
          <DialogCloseButton></DialogCloseButton>
          <DialogHeader>Modal Title</DialogHeader>
          <DialogContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </DialogContent>
          <DialogFooter>
            <Button
              color="danger"
              variant="default"
              onClick={() => setOpen(!open)}
            >
              Cancel
            </Button>

            <Button variant="solid">Submit</Button>
          </DialogFooter>
        </Dialog>
      </React.Fragment>
    )
  },
}

export const VerticalCentre: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <React.Fragment>
        <Button variant="default" onClick={() => setOpen(!open)}>
          Vertical center
        </Button>
        <Dialog
          open={open}
          verticalCentered
          onOpenChange={(value) => setOpen(value)}
        >
          <DialogCloseButton></DialogCloseButton>
          <DialogHeader>Modal Title</DialogHeader>
          <DialogContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </DialogContent>
          <DialogFooter>
            <Button
              color="danger"
              variant="default"
              onClick={() => setOpen(!open)}
            >
              Cancel
            </Button>

            <Button variant="solid">Submit</Button>
          </DialogFooter>
        </Dialog>
      </React.Fragment>
    )
  },
}

export const ScrollBehavior: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [scrollBehavior, setScrollBehavior] = useState<'inside' | 'outside'>(
      'inside'
    )
    return (
      <div className="space-x-3">
        <Button
          variant="default"
          onClick={() => {
            setOpen(!open)
            setScrollBehavior('inside')
          }}
        >
          Overflow Inside
        </Button>
        <Button
          variant="default"
          onClick={() => {
            setOpen(!open)
            setScrollBehavior('outside')
          }}
        >
          Overflow Outside
        </Button>
        <Dialog
          scrollBehavior={scrollBehavior}
          open={open}
          onOpenChange={(value) => setOpen(value)}
        >
          <DialogCloseButton></DialogCloseButton>
          <DialogHeader>Modal Title</DialogHeader>
          <DialogContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </DialogContent>
          <DialogFooter>
            <Button
              color="danger"
              variant="default"
              onClick={() => setOpen(!open)}
            >
              Cancel
            </Button>

            <Button variant="solid">Submit</Button>
          </DialogFooter>
        </Dialog>
      </div>
    )
  },
}

export const Size: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [size, setSize] = useState<SizeType>('md')
    const sizes: SizeType[] = ['xs', 'sm', 'md', 'lg', 'xl']
    return (
      <div className="space-x-3">
        {sizes.map((item) => {
          return (
            <Button
              key={item}
              variant="default"
              onClick={() => {
                setOpen(!open)
                setSize(item)
              }}
            >
              {item}
            </Button>
          )
        })}

        <Dialog
          size={size}
          open={open}
          onOpenChange={(value) => setOpen(value)}
        >
          <DialogCloseButton></DialogCloseButton>
          <DialogHeader>Modal Title</DialogHeader>
          <DialogContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </DialogContent>
          <DialogFooter>
            <Button
              color="danger"
              variant="default"
              onClick={() => setOpen(!open)}
            >
              Cancel
            </Button>

            <Button variant="solid">Submit</Button>
          </DialogFooter>
        </Dialog>
      </div>
    )
  },
}
