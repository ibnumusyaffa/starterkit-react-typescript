import { RefObject, useEffect } from 'react'

type Event = MouseEvent | TouchEvent
type Handler = (event: MouseEvent | TouchEvent) => void

export function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: Handler
) {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
