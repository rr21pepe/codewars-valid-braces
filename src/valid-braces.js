const validBraces = braces => {
  const bracesToClose = []
  const validBraces = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for(let i = 0; i < braces.length; i++) {
    const current = braces[i]

    if (validBraces[current]) {
      bracesToClose.push(current)
      continue
    }

    if (current !== validBraces[bracesToClose.pop()]) {
      return false
    }
  }

  return bracesToClose.length === 0
}

export {
  validBraces
}
