import cx from '@/lib/cx'

export function Skeleton({ className, ...props }: { className?: string }) {
  return (
    <div
      className={cx('animate-pulse rounded bg-gray-300', className)}
      {...props}
    />
  )
}
