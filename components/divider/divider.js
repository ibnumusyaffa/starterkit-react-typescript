import cx from 'clsx'
export function Divider({ children, position = 'center', withGap = true }) {
  return (
    <div
      class={cx('my-8 flex items-center', {
        'h-px border-0 bg-gray-300': !children,
        'gap-4': withGap,
        'after:h-px after:flex-1 after:bg-gray-300  after:content-[""]':
          position === 'left',
        'before:h-px before:flex-1 before:bg-gray-300  before:content-[""]':
          position === 'right',
        'before:h-px before:flex-1 before:bg-gray-300  before:content-[""] after:h-px after:flex-1 after:bg-gray-300  after:content-[""]':
          position === 'center',
      })}
    >
      {children}
    </div>
  )
}