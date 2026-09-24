const PHONE = '0507-1334-2577'
const TEL_HREF = `tel:${PHONE.replace(/-/g, '')}`

const LINKS = [
  { label: '홈', href: '#top' },
  { label: '서비스 안내', href: '#services' },
  { label: '시공사례', href: '#case-studies' },
  { label: '고객센터', href: '#contact' },
]

const SERVICE_AREAS = ['양주', '포천', '의정부', '동두천']

export function Footer() {
  return (
    <footer className="bg-ink pb-12 pt-12 text-white max-[426px]:pb-28 md:pt-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1">
                <img src="/favicon.svg" alt="" width={32} height={32} className="h-full w-full" />
              </span>
              <span className="leading-tight">
                <span className="block text-[16px] font-bold text-white">오케이집수리</span>
                <span className="block text-[11px] text-white/50">경기북부 수도 · 배관 · 설비 전문</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm break-keep [text-wrap:pretty] text-[13px] leading-[1.5] text-white/60">
              수도 배관 · 누수 탐지 · 온수기 · 수전 · 분배기 등 기타 생활 수리
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-[auto_auto] sm:gap-16">
            <div>
              <p className="text-[12px] font-semibold text-white/40">바로가기</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 sm:block sm:space-y-2">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[14px] text-white/70 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[12px] font-semibold text-white/40">고객센터</p>
              <a
                href={TEL_HREF}
                className="mt-3 block whitespace-nowrap font-pretendard text-[18px] font-extrabold text-white"
              >
                {PHONE}
              </a>
              <p className="mt-1 whitespace-nowrap text-[13px] text-white/60">상담시간 07:00 - 22:00 (연중무휴)</p>
              <p className="mt-3 whitespace-nowrap text-[13px] text-white/60">
                <span className="font-semibold text-white/80">출장 지역</span> {SERVICE_AREAS.join(' · ')}
              </p>
              <a
                href="https://blog.naver.com/ok_homemaster"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[12px] font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#03C75A] text-[9px] font-extrabold text-white">
                  N
                </span>
                네이버 블로그
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-[12px] leading-[1.5] text-white/40">
          <p>오케이집수리 · 사업자등록번호 704-74-00501</p>
          <p className="mt-1">© 2026 오케이집수리. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
