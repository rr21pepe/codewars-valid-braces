import { braces } from './utils'

const getOpenBrace = brace => braces[brace] || null

export {
  getOpenBrace
}
