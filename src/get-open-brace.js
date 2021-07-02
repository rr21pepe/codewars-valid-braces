const braces = {
  ')': '(',
  '}': '{',
  ']': '['
}

const getOpenBrace = brace => braces[brace] || null

export {
  getOpenBrace
}
