const PHONE = '0507-1334-2577'
const TEL_HREF = `tel:${PHONE.replace(/-/g, '')}`

const NAV_ITEMS = [
  { label: '홈', href: '#top' },
  { label: '서비스 안내', href: '#services' },
  { label: '시공사례', href: '#case-studies' },
  { label: '고객센터', href: '#contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light text-white">
            <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c-4 5.2-7 9.3-7 12.8A7 7 0 0 0 19 14.8C19 11.3 16 7.2 12 2Z" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-[16px] font-bold text-ink">오케이집수리</span>
            <span className="block text-[11px] text-neutral-400">수도 · 배관 · 설비 전문</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-neutral-600 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={TEL_HREF}
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-white md:inline-flex"
        >
          <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.7 3.5 4.9 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8Z" />
          </svg>
          지금 문의하기
        </a>
      </div>
    </header>
  )
}
