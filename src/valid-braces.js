const validBraces = braces => {
  const acc = []
  const pairedBraces = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const areWellClosed = braces
    .split('')
    .map(brace => {
      if (pairedBraces[brace]) {
        acc.push(brace)

        return true
      }

      if (pairedBraces[acc.pop()] === brace) {
        return true
      }

      return false
    })

  const areValidBraces = (
    acc.length === 0 && areWellClosed.every(isWellClosed => isWellClosed)
  )

  return areValidBraces
}

export {
  validBraces
}
