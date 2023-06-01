import React from 'react'
import cx from 'clsx'

function Label({ children }) {
  return (
    <div className="translate-y-[-0.5px] text-xs leading-none text-white">
      {children}
    </div>
  )
}

export function Indicator({
  position = 'top-right',
  animatePing,
  color = 'primary',
  label,
  count,
  children,
  style,
}) {
  return (
    <div className="flex">
      <div className="relative">
        <span
          style={style}
          class={cx('absolute flex leading-none', {
            'right-1/2 -translate-y-1/2 translate-x-1/2':
              position === 'top-center',
            'right-auto top-0 left-0 -translate-y-1/2 -translate-x-1/2 ':
              position === 'top-left',
            'left-auto top-0 right-0 -translate-y-1/2 translate-x-1/2':
              position === 'top-right',
            'bottom-0 right-1/2 translate-y-1/2 translate-x-1/2':
              position === 'bottom-center',
            'right-auto bottom-0 left-0 translate-y-1/2 -translate-x-1/2':
              position === 'bottom-left',
            'left-auto bottom-0 right-0 translate-y-1/2 translate-x-1/2':
              position === 'bottom-right',
          })}
        >
          <div className="inline-block">
            {animatePing ? (
              <span
                className={cx(
                  'absolute h-full w-full opacity-75 ',
                  'animate-ping rounded-full',
                  {
                    'bg-primary-500': color === 'primary',
                    'bg-secondary-500': color === 'secondary',
                    'bg-success-500': color === 'success',
                    'bg-info-500': color === 'info',
                    'bg-warning-500': color === 'warning',
                    'bg-danger-500': color === 'danger',
                  },
                )}
              ></span>
            ) : null}

            {count === undefined && label === undefined ? (
              <div
                className={cx(
                  'relative flex items-center justify-center px-1',
                  'rounded-full border border-white ',
                  'h-[15px] min-w-[15px] ',
                  {
                    'bg-primary-500': color === 'primary',
                    'bg-secondary-500': color === 'secondary',
                    'bg-success-500': color === 'success',
                    'bg-info-500': color === 'info',
                    'bg-warning-500': color === 'warning',
                    'bg-danger-500': color === 'danger',
                  },
                )}
              ></div>
            ) : null}

            {count ? (
              <div
                className={cx(
                  'relative flex items-center justify-center px-1',
                  'rounded-full border border-white ',
                  'h-[22px] min-w-[22px] ',
                  {
                    'bg-primary-500': color === 'primary',
                    'bg-secondary-500': color === 'secondary',
                    'bg-success-500': color === 'success',
                    'bg-info-500': color === 'info',
                    'bg-warning-500': color === 'warning',
                    'bg-danger-500': color === 'danger',
                  },
                )}
              >
                <Label>{count >= 100 ? '99+' : count}</Label>
              </div>
            ) : null}

            {label !== undefined ? (
              <div
                className={cx(
                  'relative flex  items-center  justify-center   px-2',
                  'rounded-full border border-white ',
                  'h-[22px] min-w-max',
                  {
                    'bg-primary-500': color === 'primary',
                    'bg-secondary-500': color === 'secondary',
                    'bg-success-500': color === 'success',
                    'bg-info-500': color === 'info',
                    'bg-warning-500': color === 'warning',
                    'bg-danger-500': color === 'danger',
                  },
                )}
              >
                <Label>{label}</Label>
              </div>
            ) : null}
          </div>
        </span>
        {children}
      </div>
    </div>
  )
}
