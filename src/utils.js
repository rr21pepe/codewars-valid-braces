import { getOpenBrace } from './get-open-brace'

const compose = (...fns) => initialValue =>
  fns.reduceRight((prevValue, currentFn) => currentFn(prevValue), initialValue)

const slice = (from, to) => (arr) => arr.slice(from, to)

const splitStringToArray = string => string.split('')

const reverse = arr => arr.reverse()

const transformToOpenBraces = braces => braces.map(getOpenBrace)

const arraysAreEquals = (arr1, arr2) =>
  JSON.stringify(arr1) === JSON.stringify(arr2)

export {
  compose,
  slice,
  splitStringToArray,
  reverse,
  transformToOpenBraces,
  arraysAreEquals
}
