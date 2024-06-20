'use client'

import React, { useMemo } from 'react'
import cx from '@/lib/cx'

import { ChevronLeft, ChevronRight, DotsHorizontal } from './Icons'

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
        'flex items-center justify-center rounded text-sm focus:outline-none ',
        'focus:border-primary-300 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-25',
        // 'focus-visible:ring-2 focus-visible:border-primary-500 focus-visible:ring-primary-300 ', //keyboard

        'group-[.is-group]:focus:z-10',

        //size,
        {
          'h-8 min-w-[2rem] px-2.5 md:h-9 md:min-w-[2.25rem]': true,
        },
        {
          'border border-gray-200  bg-white  ': !active,
          'border border-transparent bg-primary-500 text-white hover:bg-primary-600':
            active,

          'cursor-not-allowed opacity-50': disabled,
          'hover:bg-gray-50 active:bg-gray-100': !disabled && !active,
          'pointer-events-none': disabledWithoutOpacity,
        }
      )}
    >
      {children}
    </button>
  )
}

type UsePaginationParams = {
  /**  active page number */
  currentPage?: number

  /** Total amount of items */
  totalPages: number

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundaries?: number

  /** Callback fired after change of each page */
  onPageChange?: (page: number) => void
}
export function usePagination({
  currentPage = 1,
  totalPages,
  siblings = 1,
  boundaries = 1,
  onPageChange,
}: UsePaginationParams) {
  const _totalPages = Math.max(Math.trunc(totalPages), 0)

  const setPage = (pageNumber: number) => {
    if (pageNumber <= 0) {
      onPageChange?.(1)
    } else if (pageNumber > _totalPages) {
      onPageChange?.(_totalPages)
    } else {
      onPageChange?.(pageNumber)
    }
  }

  const next = () => onPageChange?.(currentPage + 1)
  const previous = () => onPageChange?.(currentPage - 1)
  const first = () => onPageChange?.(1)
  const last = () => onPageChange?.(_totalPages)

  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2
    if (totalPageNumbers >= _totalPages) {
      return range(1, _totalPages)
    }

    const leftSiblingIndex = Math.max(currentPage - siblings, boundaries)
    const rightSiblingIndex = Math.min(
      currentPage + siblings,
      _totalPages - boundaries
    )

    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2
    const shouldShowRightDots =
      rightSiblingIndex < _totalPages - (boundaries + 1)

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2
      return [
        ...range(1, leftItemCount),
        LEFT_DOT,
        ...range(_totalPages - (boundaries - 1), _totalPages),
      ]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings
      return [
        ...range(1, boundaries),
        LEFT_DOT,
        ...range(_totalPages - rightItemCount, _totalPages),
      ]
    }

    return [
      ...range(1, boundaries),
      LEFT_DOT,
      ...range(leftSiblingIndex, rightSiblingIndex),
      RIGHT_DOT,
      ...range(_totalPages - boundaries + 1, _totalPages),
    ]
  }, [_totalPages, siblings, currentPage, boundaries])

  return {
    range: paginationRange,
    active: currentPage,
    setPage,
    next,
    previous,
    first,
    last,
  }
}

type PaginationProps = {
  /**  active page number */
  currentPage?: number

  /** Total number of page */
  totalPages: number

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundaries?: number

  /** Callback fired after change of each page */
  onPageChange?: (page: number) => void

  /** show page numbering, default true */
  withPageNumber?: boolean

  /** disable pagination, default false */
  disabled?: boolean
}

export function Pagination({
  siblings = 1,
  boundaries = 1,
  withPageNumber = true,
  currentPage = 1,
  onPageChange,
  totalPages,
  disabled,
}: PaginationProps) {
  const { range, setPage, next, previous, active } = usePagination({
    currentPage,
    siblings,
    totalPages,
    onPageChange,
    boundaries,
  })

  disabled = disabled || totalPages === 0

  return (
    <div className="is-group group flex space-x-1.5 text-gray-700">
      <Item onClick={previous} disabled={active === 1 || disabled}>
        <div className="flex items-center space-x-1 px-2">
          <div>
            <ChevronLeft></ChevronLeft>
          </div>
          <div className="hidden md:block">Previous</div>
        </div>
      </Item>

      {withPageNumber &&
        range.map((pageNumber) => {
          if (pageNumber === LEFT_DOT || pageNumber === RIGHT_DOT) {
            return (
              <div
                key={pageNumber}
                className="flex items-center px-2 text-gray-600"
              >
                <DotsHorizontal />
              </div>
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

      <Item onClick={next} disabled={active === totalPages || disabled}>
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
