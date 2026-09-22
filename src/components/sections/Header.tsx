const PHONE = '0507-1334-2577'
const TEL_HREF = `tel:${PHONE.replace(/-/g, '')}`

const NAV_ITEMS = [
  { label: '서비스', href: '#services' },
  { label: '소개', href: '#about' },
  { label: '후기', href: '#reviews' },
  { label: '문의', href: '#contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 text-[17px] font-bold text-ink">
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          오케이집수리
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
          className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-white md:inline-flex"
        >
          출장 문의하기
        </a>
      </div>
    </header>
  )
}
