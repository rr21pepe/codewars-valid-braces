import { getOpenBrace } from './get-open-brace'

describe('Testing getOpenBrace', function() {
  it('Passing any character that is not a brace, should return null', function() {
    const testCases = ['a', 'b', '*', '{', '(', '[']

    testCases.forEach(testCase => expect(getOpenBrace(testCase)).toBeNull())
  })
  
  it("Passing a valid close brace ( }, ), ] ) should return it's open brace", function() {
    const testCases = ['}', ')', ']']
    const expected = ['{', '(', '[']

    testCases.forEach(
      (testCase, idx) => expect(getOpenBrace(testCase)).toBe(expected[idx])
    )
  })
})
