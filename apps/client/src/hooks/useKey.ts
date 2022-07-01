import { useMemo, useEffect } from 'react'

type Handler = (event: KeyboardEvent) => void;

export const useKey = (
  targetKey: string,
  handler: Handler
) => {
  const memoizedHandler = useMemo(() => {
    const _handler: Handler = (event => {
      event.preventDefault()
      if (event.key === targetKey) {
        return handler(event)
      }
    }) 

    return _handler
  }, [handler])

  useEffect(() => {
    window.addEventListener('keydown', memoizedHandler)

    return () => {
      window.removeEventListener('keydown', memoizedHandler)
    }
  }, [memoizedHandler])  
}

export const TargetKey = {
  Tab: 'Tab'
} as const
