import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Button({ href, variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-opacity active:opacity-80',
        variant === 'primary' &&
          'bg-gradient-to-r from-brand to-brand-light text-white shadow-sm shadow-brand/30 hover:opacity-90',
        variant === 'secondary' && 'border border-neutral-300 bg-white text-ink hover:bg-neutral-50',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
