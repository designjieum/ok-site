const PHONE = '0507-1334-2577'
const TEL_HREF = `tel:${PHONE.replace(/-/g, '')}`

const NAV_ITEMS = [
  { label: '홈', href: '#top' },
  { label: '서비스 안내', href: '#services' },
  { label: '시공사례', href: '#case-studies' },
  { label: '고객센터', href: '#contact' },
]

function PhoneIcon() {
  return (
    <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.7 3.5 4.9 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8Z" />
    </svg>
  )
}

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2.5 max-[426px]:w-full">
            <img src="/favicon.svg" alt="" width={40} height={40} className="h-10 w-10" />
            <span className="leading-tight max-[426px]:flex max-[426px]:flex-1 max-[426px]:items-baseline max-[426px]:justify-between max-[426px]:gap-2">
              <span className="block text-[16px] font-bold text-ink">오케이집수리</span>
              <span className="block whitespace-nowrap text-[11px] text-neutral-400">수도 · 배관 · 설비 전문</span>
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
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-white max-[426px]:hidden sm:px-5"
          >
            <PhoneIcon />
            지금 문의하기
          </a>
        </div>
      </header>

      {/* 425px 이하에서는 헤더 버튼 대신 화면 하단에 고정 (헤더의 backdrop-blur 밖에 둬야 fixed가 뷰포트 기준으로 동작) */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 hidden border-t border-neutral-200 bg-white/95 px-5 pt-3 backdrop-blur max-[426px]:block"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))' }}
      >
        <a
          href={TEL_HREF}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-[15px] font-semibold text-white active:opacity-80"
        >
          <PhoneIcon />
          지금 문의하기
        </a>
      </div>
    </>
  )
}
