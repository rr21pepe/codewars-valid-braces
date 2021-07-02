import { validBraces } from './valid-braces'

describe('Testing validBraces', function() {
  it('Passing odd braces should return false', function() {
    const testCases = ['({}', '([[]]']

    testCases.forEach(testCase => expect(validBraces(testCase)).toBe(false))
  })

  it('Passing a wrong closed braces should return false', function() {
    const testCases = [
      '(}', '(]', '{)', '{]', '[)', '[}', '[{]}', '({[]}]', '[{]}'
    ]

    testCases.forEach(testCase => expect(validBraces(testCase)).toBe(false))
  })

  it('Passing a well closed braces should return true', function() {
    const testCases = [
      '()', '[]', '{}', '({})', '{([])}', '[({{}})]', '{([[]])}'
    ]

    testCases.forEach(testCase => expect(validBraces(testCase)).toBe(true))
  })
})
