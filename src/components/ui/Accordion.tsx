import { useState } from 'react'
import { cn } from '../../lib/utils'

type AccordionItemProps = {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-neutral-200 py-5">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="break-keep [text-wrap:pretty] text-[15px] font-semibold leading-[1.3] text-ink">
          {question}
        </span>
        <span
          className={cn(
            'shrink-0 text-xl font-light text-neutral-400 transition-transform duration-200',
            open && 'rotate-45',
          )}
        >
          +
        </span>
      </button>
      {open && (
        <p className="mt-3 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-500">
          {answer}
        </p>
      )}
    </div>
  )
}
