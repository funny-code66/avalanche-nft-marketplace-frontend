import { useEffect, useRef } from "react"

const toUppercase = str => str.charAt(0).toUpperCase() + str.slice(1)

const toLowercase = str => str.charAt(0).toLowerCase() + str.slice(1)

const findMethodABI = (abi, method) => abi[abi.findIndex(mthd => mthd.name === method)]

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const makePadding = num => `${num < 10 ? '0' : ''}${num}`

export {
  toUppercase,
  toLowercase,
  findMethodABI,
  useInterval,
  makePadding
}