'use client'

import React, { useMemo } from 'react'
import cx from 'clsx'

import { ChevronLeft, ChevronRight } from './icons'

const LEFT_DOT = 'left'
const RIGHT_DOT = 'right'

function range(start: number, end: number) {
  const length = end - start + 1
  return Array.from({ length }, (_, index) => index + start)
}

type ItemProps = React.ComponentProps<'button'> & {
  /**  active page number */
  active?: boolean
  /** disabled Item without affecting opacity */
  disabledWithoutOpacity?: boolean
  children: React.ReactNode
}

function Item({
  children,
  active,
  disabled,
  disabledWithoutOpacity,
  ...props
}: ItemProps) {
  return (
    <button
      {...props}
      disabled={disabled || disabledWithoutOpacity}
      className={cx(
        'flex items-center justify-center rounded text-sm focus:outline-none',
        'focus:border-primary-300 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-25',
        // 'focus-visible:ring-2 focus-visible:border-primary-500 focus-visible:ring-primary-300 ', //keyboard

        'group-[.is-group]:focus:z-10',
        'group-[.is-group]:first:!rounded-r-none',
        'group-[.is-group]:[&:not(:first-child):not(:last-child)]:!rounded-none',
        'group-[.is-group]:last:!rounded-l-none',

        'group-[.is-group]:[&:not(:first-child):not(:last-child)]:!border-l-0',
        'group-[.is-group]:last:!border-l-0',

        //size,
        {
          'h-8 min-w-[2rem] md:h-9 md:min-w-[2.25rem]': true,
        },
        {
          'border border-gray-300 ': !active,
          'border border-transparent text-white': active,

          'cursor-not-allowed opacity-50': disabled,
          'pointer-events-none': disabledWithoutOpacity,
        },
        {
          'bg-white': !active,
          'bg-primary-500': active,
        }
      )}
    >
      {children}
    </button>
  )
}

type UsePaginationParams = {
  /**  active page number */
  page?: number

  /** Total amount of items */
  total: number

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundaries?: number

  /** Callback fired after change of each page */
  onChange?: (page: number) => void
}
export function usePagination({
  page = 1,
  total,
  siblings = 1,
  boundaries = 1,
  onChange,
}: UsePaginationParams) {
  const _total = Math.max(Math.trunc(total), 0)

  const setPage = (pageNumber: number) => {
    if (pageNumber <= 0) {
      onChange?.(1)
    } else if (pageNumber > _total) {
      onChange?.(_total)
    } else {
      onChange?.(pageNumber)
    }
  }

  const next = () => onChange?.(page + 1)
  const previous = () => onChange?.(page - 1)
  const first = () => onChange?.(1)
  const last = () => onChange?.(_total)

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2
    if (totalPageNumbers >= _total) {
      return range(1, _total)
    }

    const leftSiblingIndex = Math.max(page - siblings, boundaries)
    const rightSiblingIndex = Math.min(page + siblings, _total - boundaries)

    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2
    const shouldShowRightDots = rightSiblingIndex < _total - (boundaries + 1)

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2
      return [
        ...range(1, leftItemCount),
        LEFT_DOT,
        ...range(_total - (boundaries - 1), _total),
      ]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings
      return [
        ...range(1, boundaries),
        LEFT_DOT,
        ...range(_total - rightItemCount, _total),
      ]
    }

    return [
      ...range(1, boundaries),
      LEFT_DOT,
      ...range(leftSiblingIndex, rightSiblingIndex),
      RIGHT_DOT,
      ...range(_total - boundaries + 1, _total),
    ]
  }, [_total, siblings, page, boundaries])

  return {
    range: paginationRange,
    active: page,
    setPage,
    next,
    previous,
    first,
    last,
  }
}

type PaginationProps = {
  /**  active page number */
  page?: number

  /** Total amount of items */
  total: number

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundaries?: number

  /** Callback fired after change of each page */
  onChange?: (page: number) => void

  /** show page numbering, default true */
  withPageNumber?: boolean

  /** disable pagination, default false */
  disabled?: boolean
}

export function Pagination({
  siblings = 1,
  boundaries = 1,
  withPageNumber = true,
  page = 1,
  onChange,
  total,
  disabled,
}: PaginationProps) {
  const { range, setPage, next, previous, active } = usePagination({
    page,
    siblings,
    total,
    onChange,
    boundaries,
  })

  disabled = disabled || total === 0

  return (
    <div className="is-group group flex">
      <Item onClick={previous} disabled={active === 1 || disabled}>
        <div className="flex items-center space-x-1 px-2">
          <div>
            <ChevronLeft></ChevronLeft>
          </div>
          <div className="hidden md:block">Prev</div>
        </div>
      </Item>

      {withPageNumber &&
        range.map((pageNumber) => {
          if (pageNumber === LEFT_DOT || pageNumber === RIGHT_DOT) {
            return (
              <Item key={pageNumber} disabled={disabled} disabledWithoutOpacity>
                ...
              </Item>
            )
          }
          return (
            <Item
              key={pageNumber}
              // type="number"
              active={pageNumber === active}
              tabIndex={0}
              disabled={disabled}
              onClick={() => setPage(pageNumber as number)}
            >
              {pageNumber}
            </Item>
          )
        })}

      <Item onClick={next} disabled={active === total || disabled}>
        <div className="flex items-center space-x-1 px-2">
          <div className="hidden md:block">Next</div>
          <div>
            <ChevronRight></ChevronRight>
          </div>
        </div>
      </Item>
    </div>
  )
}
