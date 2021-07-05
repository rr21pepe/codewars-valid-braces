import {
  arraysAreEquals,
  compose,
  reverse,
  slice,
  splitStringToArray,
  getOpenBrace,
  areConsecutiveBraces
} from './utils'

const transformToOpenBraces = braces => braces.map(getOpenBrace)

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

  if (arraysAreEquals(firstHalf, lastHalf)) return true

  const areCorrectlyPairedConsecutively = compose(
    areConsecutiveBraces,
    splitStringToArray
  )(braces)

  return areCorrectlyPairedConsecutively
}

export {
  validBraces
}
