import { createHighlighterCore, type HighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'
import { bergetShikiTheme } from './shiki-theme'

export const defaultLanguages = [
  import('shiki/langs/typescript.mjs'),
  import('shiki/langs/javascript.mjs'),
  import('shiki/langs/bash.mjs'),
  import('shiki/langs/yaml.mjs'),
  import('shiki/langs/json.mjs'),
  import('shiki/langs/python.mjs'),
  import('shiki/langs/dockerfile.mjs'),
  import('shiki/langs/markdown.mjs'),
  import('shiki/langs/html.mjs'),
  import('shiki/langs/css.mjs'),
  import('shiki/langs/shell.mjs'),
]

let highlighterPromise: Promise<HighlighterCore> | null = null

export function getHighlighter(): Promise<HighlighterCore> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [bergetShikiTheme],
      langs: defaultLanguages,
      engine: createOnigurumaEngine(import('shiki/wasm')),
    })
  }
  return highlighterPromise
}
