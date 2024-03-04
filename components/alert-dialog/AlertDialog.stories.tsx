/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import type { StoryObj } from '@storybook/react'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/alert-dialog'
import { Button } from '@/components/button'

const meta = {
  title: 'Components/AlertDialog',
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
      </React.Fragment>
    )
  },
}
