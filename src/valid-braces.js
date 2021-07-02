import {
  arraysAreEquals,
  compose,
  reverse,
  slice,
  splitStringToArray,
  transformToOpenBraces
} from './utils'

const validBraces = (braces) => {
  const { length } = braces
  
  if (length % 2 !== 0) return false

  const firstHalf = compose(
    slice(0, length / 2),
    splitStringToArray
  )(braces)

  const lastHalf = compose(
    transformToOpenBraces,
    reverse,
    slice(length / 2, length),
    splitStringToArray
  )(braces)

  return arraysAreEquals(firstHalf, lastHalf)
}

export {
  validBraces
}
