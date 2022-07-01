import { useMemo, useEffect, useRef } from 'react'

type Handler = (event: KeyboardEvent) => void;

type PrevKeyState = 'up' | 'down'

export const useKey = (
  targetKey: string,
  handler: Handler
) => {
  const prevKeyState = useRef<PrevKeyState>('up')


  const memoizedHandler = useMemo(() => {
    const _handler: Handler = (event => {
      console.log('Key', event.key)
      console.log('Meta Key', event.metaKey)
      console.log('Shift Key', event.shiftKey)
      if (event.key === targetKey) {
        event.preventDefault()
      }

      if (prevKeyState.current === 'down') return

      prevKeyState.current = 'down'

      // Do not set preventDefault here. It's very buggy.
      if (event.key === targetKey) {
        event.preventDefault()
        return handler(event)
      }
    }) 

    return _handler
  }, [handler])

  const onKeyUp = () => prevKeyState.current = 'up'

  useEffect(() => {
    window.addEventListener('keydown', memoizedHandler)
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keydown', memoizedHandler)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [memoizedHandler])  
}

export const TargetKey = {
  Tab: 'Tab'
} as const
