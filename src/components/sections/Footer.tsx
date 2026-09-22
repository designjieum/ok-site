const LINKS = [
  { label: '서비스', href: '#services' },
  { label: '소개', href: '#about' },
  { label: '후기', href: '#reviews' },
  { label: '문의', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-24 pt-14 text-white md:pb-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-[16px] font-bold">
              <svg
                aria-hidden
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              오케이집수리
            </div>
            <p className="mt-3 break-keep [text-wrap:pretty] text-[13px] leading-[1.3] text-white/50">
              수도 배관 · 설비 · 누수탐지 · 도어락 · LED등 · 기타 생활 수리
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white/40">
              빠른 링크
            </p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[13px] text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white/40">연락처</p>
            <div className="mt-4 space-y-2">
              <a href="tel:05071334257" className="block text-[13px] text-white/70 hover:text-white">
                0507-1334-2577
              </a>
              <p className="text-[13px] text-white/50">상담시간 09:00 - 18:00 (연중무휴)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 오케이집수리. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
