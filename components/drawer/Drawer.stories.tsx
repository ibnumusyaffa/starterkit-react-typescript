/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@/components/drawer'

const meta = {
  title: 'Overlay/Drawer',
}

export default meta

export const BasicUsage: StoryObj = {
  args: {},
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    const [placement, setPlacement] = React.useState<'right' | 'left'>('right')
    return (
      <div className="space-x-3">
        <Button
          variant="default"
          onClick={() => {
            setOpen(!open)
            setPlacement('left')
          }}
        >
          Left drawer
        </Button>
        <Button
          variant="default"
          onClick={() => {
            setOpen(!open)
            setPlacement('right')
          }}
        >
          Right drawer
        </Button>

        <Drawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          placement={placement}
        >
          <DrawerCloseButton></DrawerCloseButton>
          <DrawerHeader>Modal Title</DrawerHeader>
          <DrawerContent>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
            amet.., comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et
            by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </DrawerContent>
          <DrawerFooter>
            <Button variant="default" onClick={() => setOpen(!open)}>
              Cancel
            </Button>

            <Button variant="solid">Submit</Button>
          </DrawerFooter>
        </Drawer>
      </div>
    )
  },
}
