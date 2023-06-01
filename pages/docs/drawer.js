import React, { useState } from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
} from '@/components/drawer'
import { Button } from '@/components/button'

function Page() {
  let [open1, setOpen1] = useState(false)
  let [open2, setOpen2] = useState(false)
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Drawer</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-x-5">
        <Button variant="default" onClick={() => setOpen2(!open2)}>
          Left Drawer
        </Button>
        <Button variant="default" onClick={() => setOpen1(!open1)}>
          Right Drawer
        </Button>
        <Drawer open={open1} onOpenChange={setOpen1} placement="right">
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
            <Button
              color="red"
              variant="default"
              onClick={() => setOpen1(!open1)}
            >
              Cancel
            </Button>

            <Button variant="solid">Submit</Button>
          </DrawerFooter>
        </Drawer>
        <Drawer open={open2} onOpenChange={setOpen2} placement="left">
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
            <Button
              color="red"
              variant="default"
              onClick={() => setOpen2(!open2)}
            >
              Cancel
            </Button>

            <Button variant="solid">Submit</Button>
          </DrawerFooter>
        </Drawer>
      </div>
    </div>
  )
}

export default Page
