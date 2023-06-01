import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogCloseButton,
} from '@/components/alert-dialog'
import { Button } from '@/components/button'
function Page() {
  let [open, setOpen] = useState(false)
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Alert Dialog</div>
        <div className="text-gray-700">-</div>
      </div>
      <div>
        <Button variant="default" onClick={() => setOpen(!open)}>
          Alert Dialog
        </Button>
        <AlertDialog open={open} onOpenChange={(value) => setOpen(value)}>
          <AlertDialogCloseButton></AlertDialogCloseButton>
          <AlertDialogContent
            title="Delete post"
            description="Are you sure you want to delete this post ? This action cannot be undone."
          ></AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogCancel>
              <Button variant="default">Cancel</Button>
            </AlertDialogCancel>
            <Button color="danger" variant="solid">
              Submit
            </Button>
          </AlertDialogFooter>
        </AlertDialog>
      </div>
    </div>
  )
}

export default Page
