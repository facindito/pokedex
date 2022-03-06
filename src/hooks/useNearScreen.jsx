import { useEffect, useState, useRef } from 'react'

export default function useNearScreen ({ distance = '10px', externalRef, once = false } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer = null

    const fromElement = externalRef ? externalRef.current : fromRef.current
    if (!fromElement) return

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        // eslint-disable-next-line no-undef
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
    // eslint-disable-next-line no-undef
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
      observer.observe(fromElement)
    })

    return () => observer && observer.disconnect()
  }, [distance, externalRef, once])

  return { isNearScreen, fromRef }
}
