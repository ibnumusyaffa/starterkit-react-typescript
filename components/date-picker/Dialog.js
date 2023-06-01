import { useDialog } from 'react-aria'
import React from 'react'

export function Dialog({ children, ...props }) {
  let ref = React.useRef()
  let { dialogProps } = useDialog(props, ref)

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  )
}
