const LINKS = [
  { label: '홈', href: '#top' },
  { label: '서비스 안내', href: '#services' },
  { label: '시공사례', href: '#case-studies' },
  { label: '고객센터', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-24 pt-14 text-white md:pb-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-[16px] font-bold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light">
                <svg aria-hidden width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c-4 5.2-7 9.3-7 12.8A7 7 0 0 0 19 14.8C19 11.3 16 7.2 12 2Z" />
                </svg>
              </span>
              오케이집수리
            </div>
            <p className="mt-3 break-keep [text-wrap:pretty] text-[13px] leading-[1.3] text-white/50">
              수도 배관 · 설비 · 누수탐지 · 도어락 · LED등 · 기타 생활 수리
            </p>
            <a
              href="#"
              aria-label="네이버 블로그"
              className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#03C75A] text-[13px] font-bold text-white transition-opacity hover:opacity-85"
            >
              N
            </a>
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

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="break-keep [text-wrap:pretty] text-[12px] leading-[1.3] text-white/40">
            오케이집수리 · 대표 [대표자명 입력] · 사업자등록번호 [000-00-00000] · 주소 [사업장 주소 입력]
          </p>
          <p className="mt-1 break-keep [text-wrap:pretty] text-[11px] leading-[1.3] text-white/30">
            ※ 사업자 정보와 연락처는 오픈 전 임시 예시이며, 실제 서비스 오픈 시 정식 정보로 교체됩니다.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 오케이집수리. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
