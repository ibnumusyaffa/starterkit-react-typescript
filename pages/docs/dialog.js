import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogCloseButton,
} from '@/components/dialog'
import { Button } from '@/components/button'

function Page() {
  let [open1, setOpen1] = useState(false)
  let [open2, setOpen2] = useState(false)
  let [open3, setOpen3] = useState(false)
  let [open4, setOpen4] = useState(false)
  let [open5, setOpen5] = useState(false)

  let [size, setSize] = useState('md')

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Dialog</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Simple Usage</div>
        <div className="flex space-x-5">
          <Button variant="default" onClick={() => setOpen1(!open1)}>
            Simple
          </Button>
          <Dialog open={open1} onOpenChange={(value) => setOpen1(value)}>
            <DialogCloseButton></DialogCloseButton>
            <DialogHeader>Modal Title</DialogHeader>
            <DialogContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </DialogContent>
            <DialogFooter>
              <Button
                color="red"
                variant="default"
                onClick={() => setOpen1(!open1)}
              >
                Cancel
              </Button>

              <Button variant="solid">Submit</Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">
          Vertical Center
        </div>
        <div className="flex space-x-5">
          <Button variant="default" onClick={() => setOpen2(!open2)}>
            Vertical center
          </Button>
          <Dialog
            open={open2}
            verticalCentered
            onOpenChange={(value) => setOpen2(value)}
          >
            <DialogCloseButton></DialogCloseButton>
            <DialogHeader>Modal Title</DialogHeader>
            <DialogContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </DialogContent>
            <DialogFooter>
              <Button
                color="red"
                variant="default"
                onClick={() => setOpen2(!open2)}
              >
                Cancel
              </Button>

              <Button variant="solid">Submit</Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">
          Scroll behavior
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="default" onClick={() => setOpen3(!open3)}>
            Overflow Inside
          </Button>
          <Dialog open={open3} onOpenChange={(value) => setOpen3(value)}>
            <DialogCloseButton></DialogCloseButton>
            <DialogHeader>Modal Title</DialogHeader>
            <DialogContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </DialogContent>
            <DialogFooter>
              <Button
                color="red"
                variant="default"
                onClick={() => setOpen3(!open3)}
              >
                Cancel
              </Button>

              <Button variant="solid">Submit</Button>
            </DialogFooter>
          </Dialog>
          <Button variant="default" onClick={() => setOpen4(!open4)}>
            Overflow Outside
          </Button>
          <Dialog
            scrollBehavior="outside"
            open={open4}
            onOpenChange={(value) => setOpen4(value)}
          >
            <DialogCloseButton></DialogCloseButton>
            <DialogHeader>Modal Title</DialogHeader>
            <DialogContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </DialogContent>
            <DialogFooter>
              <Button
                color="red"
                variant="default"
                onClick={() => setOpen4(!open4)}
              >
                Cancel
              </Button>

              <Button variant="solid">Submit</Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Size</div>
        <div className="flex space-x-5">
          <Button
            variant="default"
            onClick={() => {
              setSize('xs')
              setOpen5(!open5)
            }}
          >
            xs
          </Button>
          <Button
            variant="default"
            onClick={() => {
              setSize('sm')
              setOpen5(!open5)
            }}
          >
            sm
          </Button>
          <Button
            variant="default"
            onClick={() => {
              setSize('md')
              setOpen5(!open5)
            }}
          >
            md
          </Button>
          <Button
            variant="default"
            onClick={() => {
              setSize('lg')
              setOpen5(!open5)
            }}
          >
            lg
          </Button>
          <Button
            variant="default"
            onClick={() => {
              setSize('xl')
              setOpen5(!open5)
            }}
          >
            xl
          </Button>
          <Dialog
            size={size}
            open={open5}
            onOpenChange={(value) => setOpen5(value)}
          >
            <DialogCloseButton></DialogCloseButton>
            <DialogHeader>Modal Title</DialogHeader>
            <DialogContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it.
            </DialogContent>
            <DialogFooter>
              <Button
                color="red"
                variant="default"
                onClick={() => setOpen5(!open5)}
              >
                Cancel
              </Button>

              <Button variant="solid">Submit</Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default Page
