"use client"
import React, { createContext, useContext } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { UserIcon } from '@heroicons/react/24/solid'
import { generateColor } from './generateColor'
import cx from 'clsx'
import { Slot, Slottable } from '@radix-ui/react-slot'

const AvatarCtx = createContext({ isGroup: false })

function getInitials(name: string) {
  if (name.length <= 1) {
    return name
  }
  const [firstName, lastName] = name.toUpperCase().trim().split(' ')
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

export type AvatarProps =  {
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children?:React.ReactNode

  name?: string
  src?: string
  asChild?: boolean
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ name, asChild, size = 'sm', src, ...props }: AvatarProps, ref) => {
    const Component = asChild ? Slot : 'span'
    const color = generateColor(name)
    const { isGroup } = useContext(AvatarCtx)

    return (
      <AvatarPrimitive.Root asChild>
        <Component
          {...props}
          ref={ref}
          className={cx(
            'block rounded-full bg-gray-400 ring-2 ring-white',
            {
              '-mr-3': isGroup,
            },
            {
              'h-8  w-8': size === 'xs',
              'h-10  w-10': size === 'sm',
              'h-12  w-12': size === 'md',
              'h-14  w-14': size === 'lg',
              'h-16  w-16': size === 'xl',
            }
          )}
        >
          <Slottable>{props.children}</Slottable>
          <AvatarPrimitive.Image
            className="h-full w-full object-cover"
            style={{ borderRadius: 'inherit' }}
            src={src}
            alt={name}
          />

          {name ? (
            <AvatarPrimitive.Fallback
              className={cx(
                'flex h-full w-full items-center justify-center font-medium uppercase text-white',
                {
                  'text-xs': size === 'xs',
                  'text-sm': size === 'sm',
                  'text-base': size === 'md',
                  'text-lg': size === 'lg',
                  'text-xl': size === 'xl',
                }
              )}
              style={{ borderRadius: 'inherit', backgroundColor: color }}
            >
              {getInitials(name)}
            </AvatarPrimitive.Fallback>
          ) : (
            <AvatarPrimitive.Fallback
              className="flex h-full w-full items-center justify-center text-white"
              style={{ borderRadius: 'inherit' }}
            >
              <UserIcon
                className={cx({
                  'h-5  w-5': size === 'xs',
                  'h-6  w-6': size === 'sm',
                  'h-8  w-8': size === 'md',
                  'h-10  w-10': size === 'lg',
                  'h-12  w-12': size === 'xl',
                })}
              ></UserIcon>
            </AvatarPrimitive.Fallback>
          )}
        </Component>
      </AvatarPrimitive.Root>
    )
  }
)
Avatar.displayName = AvatarPrimitive.Root.displayName

export function AvatarGroup({ children }: { children: React.ReactNode }) {
  return (
    <AvatarCtx.Provider value={{ isGroup: true }}>
      <div className="flex ">{children}</div>
    </AvatarCtx.Provider>
  )
}

type AvatarMoreProps = {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function AvatarMore({ children, size = 'md' }: AvatarMoreProps) {
  const { isGroup } = useContext(AvatarCtx)
  return (
    <AvatarPrimitive.Root asChild>
      <span
        className={cx(
          'inline-block rounded-full bg-gray-300 ring-1 ring-white',
          {
            '-mr-3': isGroup,
          },
          {
            'h-8  w-8': size === 'xs',
            'h-10  w-10': size === 'sm',
            'h-12  w-12': size === 'md',
            'h-14  w-14': size === 'lg',
            'h-16  w-16': size === 'xl',
          }
        )}
      >
        <span
          className={cx(
            'flex h-full w-full items-center justify-center text-gray-600',
            {
              'text-xs': size === 'xs',
              'text-sm': size === 'sm',
              'text-base': size === 'md',
              'text-lg': size === 'lg',
              'text-xl': size === 'xl',
            }
          )}
          style={{ borderRadius: 'inherit' }}
        >
          {children}
        </span>
      </span>
    </AvatarPrimitive.Root>
  )
}
