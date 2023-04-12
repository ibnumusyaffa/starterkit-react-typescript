/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react'
import { createPolymorphicComponent } from '../createPolymorphicComponent'

interface ButtonProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant: 'solid' | 'light' | 'default' | 'outline' | 'subtle'
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'
  children?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth: boolean
  loading: boolean
}

const defaultProps: Partial<ButtonProps> = {
  size: 'md',
  variant: 'solid',
  color: 'primary',
  fullWidth: false,
  loading: false,
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps & { as: any }>(
  (props, ref) => {
    const {
      as,
      size,
      variant,
      color,
      children,
      leftIcon,
      rightIcon,
      fullWidth,
      loading,
    } = { ...defaultProps, ...props }
    const Element = props.as || 'button'

    return (
      <Element onClick ref={ref}>
        {props.children}
      </Element>
    )
  }
)

_Button.displayName = 'Button'

export const Button = createPolymorphicComponent<'button', ButtonProps>(_Button)
