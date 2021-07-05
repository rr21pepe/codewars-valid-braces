import { getOpenBrace } from './get-open-brace'

const braces = {
  ')': '(',
  '}': '{',
  ']': '['
}

const compose = (...fns) => initialValue =>
  fns.reduceRight((prevValue, currentFn) => currentFn(prevValue), initialValue)

const pairRange = n => Array(n).fill().map((_, idx) => idx * 2)

const slice = (from, to) => (arr) => arr.slice(from, to)

const splitStringToArray = string => string.split('')

const reverse = arr => arr.reverse()

const arraysAreEquals = (arr1, arr2) =>
  JSON.stringify(arr1) === JSON.stringify(arr2)

const areCorrectlyClosed = (prev, current) => prev === braces[current]

const areConsecutiveBraces = arr =>
  pairRange(arr.length / 2)
    .every((idx) => areCorrectlyClosed(arr[idx], arr[idx + 1]))

export {
  braces,
  compose,
  slice,
  splitStringToArray,
  reverse,
  arraysAreEquals,
  getOpenBrace,
  areConsecutiveBraces
}
