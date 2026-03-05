import { useState, useEffect, useCallback } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Panel } from '../../atoms/panel'
import { getHighlighter } from '../../../lib/shiki'

export interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  className?: string
}

export function CodeBlock({ code, language = 'text', title, className }: CodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    getHighlighter().then((highlighter) => {
      const loadedLangs = highlighter.getLoadedLanguages()
      const lang = loadedLangs.includes(language) ? language : 'text'
      setHtml(highlighter.codeToHtml(code, { lang, theme: 'berget' }))
    })
  }, [code, language])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  const copyButton = (
    <button
      onClick={handleCopy}
      className="text-white/40 hover:text-white/80 transition-colors"
      aria-label="Copy code"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  )

  return (
    <Panel padding="none" radius="default" className={cn('rounded-lg', className)}>
      {title ? (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
          <span className="text-xs font-medium text-white/60">{title}</span>
          {copyButton}
        </div>
      ) : (
        <div className="absolute right-3 top-3 z-10">
          {copyButton}
        </div>
      )}
      {html ? (
        <div
          className="[&_.shiki]:p-4 [&_.shiki]:pr-10 [&_.shiki]:overflow-x-auto [&_.shiki]:text-sm [&_.shiki]:leading-relaxed [&_.shiki]:bg-transparent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="p-4 pr-10 overflow-x-auto text-sm leading-relaxed text-[#d6cdc5]">
          <code>{code}</code>
        </pre>
      )}
    </Panel>
  )
}
