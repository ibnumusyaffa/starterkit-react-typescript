'use client'

import React, { createContext, useContext } from 'react'
import cx from '@/lib/cx'
import {
  ArrowDownIcon,
  ArrowsUpDownIcon,
  ArrowUpIcon,
} from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'

import { Spinner } from '@/components/spinner'

export type Direction = 'asc' | 'desc' | undefined
export type VerticalAlignment = 'top' | 'center' | 'bottom'

export type SortParams = {
  column?: string
  direction: Direction
}

type ProviderParams = {
  loading: boolean
  withColumnBorders: boolean
  striped: boolean
  hightlightOnHover: boolean
  stickyHeader: boolean
  stickyOffset: number
  empty: boolean
  sort?: SortParams
  onChangeSort?: (params: SortParams) => void
  verticalAlignment: VerticalAlignment
}

const TableCtx = createContext<ProviderParams>({
  loading: false,
  withColumnBorders: false,
  striped: false,
  hightlightOnHover: false,
  stickyHeader: false,
  stickyOffset: 0,
  empty: false,
  sort: {
    column: '',
    direction: 'asc',
  },
  verticalAlignment: 'top',
})

export function TableEmpty({ children }: { children: React.ReactNode }) {
  const { empty, loading } = useContext(TableCtx)
  return empty ? (
    <tbody>
      <tr>
        <td colSpan={999} className="h-96 w-full">
          {loading ? null : children}
        </td>
      </tr>
    </tbody>
  ) : null
}

type ThProps = React.ComponentProps<'th'> & {
  children: React.ReactNode
  className?: string
  columnKey?: string
  sortable?: boolean
}

export function Th({
  children,
  className,
  columnKey,
  sortable,

  ...props
}: ThProps) {
  const { withColumnBorders, stickyHeader, stickyOffset, sort, onChangeSort } =
    useContext(TableCtx)

  if (sortable === true && columnKey === undefined) {
    throw new Error('columnKey must be provided when sortable is true')
  }

  function toggleSort() {
    if (!sortable || !columnKey) {
      return
    }

    const currentDirection = sort?.direction

    let nextDirection: Direction = undefined
    if (currentDirection === 'asc') {
      nextDirection = 'desc'
    }

    if (currentDirection === 'desc') {
      nextDirection = undefined
    }

    if (!currentDirection) {
      nextDirection = 'asc'
    }
    onChangeSort?.({
      column: nextDirection ? columnKey : undefined,
      direction: nextDirection,
    })
  }

  return (
    <th
      {...props}
      className={cx(
        'px-2 py-3',
        'bg-white ',
        'text-left text-sm font-medium text-gray-700',
        'border-b border-gray-300',
        {
          '[&:not(:last-child)]:border-r': withColumnBorders,
          'sticky': stickyHeader,
        },
        {
          'cursor-pointer hover:bg-gray-50': sortable,
        },
        className
      )}
      style={{
        top: stickyHeader ? 0 + stickyOffset : undefined,
      }}
      onClick={toggleSort}
    >
      <div className="flex items-center justify-between space-x-3">
        <div className="w-full">{children}</div>
        {sortable ? (
          <div>
            {sort?.column !== columnKey ? (
              <ArrowsUpDownIcon className="h-3.5 w-3.5 text-gray-400"></ArrowsUpDownIcon>
            ) : null}

            {sort?.column === columnKey && sort?.direction === 'asc' ? (
              <ArrowUpIcon className="h-3.5 w-3.5"></ArrowUpIcon>
            ) : null}

            {sort?.column === columnKey && sort?.direction === 'desc' ? (
              <ArrowDownIcon className="h-3.5 w-3.5"></ArrowDownIcon>
            ) : null}
          </div>
        ) : null}
      </div>
    </th>
  )
}

export function Td({
  className,
  children,
  ...props
}: React.ComponentProps<'td'>) {
  const { withColumnBorders, verticalAlignment } = useContext(TableCtx)
  return (
    <td
      {...props}
      className={cx(
        'px-2 py-3',
        'text-left text-gray-800',
        'border-t border-gray-300 group-[:first-of-type]:border-t-0 ',
        //selected style
        'group-data-[selected=true]:first:border-l-4 group-data-[selected=true]:first:border-l-primary-500',
        {
          '[&:not(:last-child)]:border-r': withColumnBorders,
          'align-top': verticalAlignment === 'top',
          'align-middle': verticalAlignment === 'center',
          'align-bottom': verticalAlignment === 'bottom',
        },
        className
      )}
    >
      {children}
    </td>
  )
}

type TrProps = React.ComponentProps<'tr'> & { selected?: boolean }
export function Tr({ children, selected, className, ...props }: TrProps) {
  const { striped, hightlightOnHover } = useContext(TableCtx)
  return (
    <tr
      {...props}
      data-selected={selected}
      className={cx(
        'group hover:cursor-default',
        {
          'hover:bg-blue-50': hightlightOnHover,
          'odd:bg-gray-100': striped,
          'bg-primary-50 hover:bg-primary-100': selected,
        },
        className
      )}
    >
      {children}
    </tr>
  )
}

function Loading({ show }: { show?: boolean }) {
  return (
    <AnimatePresence>
      {show ? (
        <div className="absolute inset-0 flex justify-center">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.4,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, ease: 'easeIn' },
            }}
            className={cx(
              'absolute inset-0',
              'bg-white',
              'flex h-full w-full justify-center'
            )}
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, ease: 'easeIn' },
            }}
            className="z-10 my-auto h-8 w-8 text-primary-500  opacity-100"
          >
            <Spinner></Spinner>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}

export function Thead({
  className,
  children,
  ...props
}: React.ComponentProps<'thead'>) {
  const currentCtxValue = useContext(TableCtx)
  return (
    <TableCtx.Provider
      value={{
        ...currentCtxValue,
        // th inside thead always striped = false and highlightOnHover = false
        striped: false,
        hightlightOnHover: false,
      }}
    >
      <thead {...props} className={className}>
        {children}
      </thead>
    </TableCtx.Provider>
  )
}

export function Tbody({
  className,
  children,
  ...props
}: React.ComponentProps<'tbody'>) {
  const { empty } = useContext(TableCtx)
  if (empty) {
    return null
  }
  return (
    <tbody {...props} className={className}>
      {children}
    </tbody>
  )
}

type TableProos = {
  withBorder?: boolean
  children?: React.ReactNode
  loading?: boolean
  withColumnBorders?: boolean
  striped?: boolean
  hightlightOnHover?: boolean
  stickyHeader?: boolean
  empty?: boolean
  overflowXAuto?: boolean
  layout?: 'fixed' | 'auto'
  sort?: SortParams
  onChangeSort?: (params: SortParams) => void
  verticalAlignment?: VerticalAlignment
  rounded?: boolean
  stickyOffset?: number
}

export function Table({
  withBorder = true,
  children,
  loading = false,
  withColumnBorders = false,
  striped = false,
  hightlightOnHover = false,
  stickyHeader = false,
  stickyOffset = 0,
  empty = false,
  overflowXAuto = true,
  layout = 'auto',
  sort,
  onChangeSort,
  verticalAlignment = 'top',
  rounded,
}: TableProos) {
  if (stickyHeader && overflowXAuto) {
    return (
      <div className="border border-red-300 bg-red-50 p-2">
        <span className="font-semibold">stickyHeader</span> and{' '}
        <span className="font-semibold">overflowXAuto</span> cannot true at the
        same time
      </div>
    )
  }

  if (stickyHeader && rounded) {
    return (
      <div className="border border-red-300 bg-red-50 p-2">
        <span className="font-semibold">stickyHeader</span> and{' '}
        <span className="font-semibold">rounded</span> cannot true at the same
        time
      </div>
    )
  }

  return (
    <TableCtx.Provider
      value={{
        loading,
        withColumnBorders,
        striped,
        hightlightOnHover,
        stickyHeader,
        stickyOffset,
        empty,
        sort,
        onChangeSort,
        verticalAlignment,
      }}
    >
      <div className="relative w-full">
        <div
          className={cx('relative w-full', {
            'overflow-x-auto': overflowXAuto,
            'border-y border-gray-300': withBorder,
            'overflow-hidden rounded-md': rounded,
          })}
        >
          <table
            className={cx(
              'relative  w-full tabular-nums',
              'border-separate  border-spacing-0',
              {
                'table-fixed': layout === 'fixed',
                'table-layout': layout === 'auto',
              }
            )}
          >
            {children}
          </table>
        </div>

        <Loading show={loading}></Loading>
      </div>
    </TableCtx.Provider>
  )
}

export function useTableSort({ column = '', direction = 'asc' }: SortParams) {
  const [sort, setSort] = React.useState<SortParams>({
    column,
    direction,
  })

  function handleChangeSort(value: SortParams) {
    setSort(value)
  }

  return { sort, handleChangeSort }
}
