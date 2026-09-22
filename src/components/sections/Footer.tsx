const LINKS = [
  { label: '서비스', href: '#services' },
  { label: '소개', href: '#about' },
  { label: '후기', href: '#reviews' },
  { label: '문의', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pb-24 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div>
          <p className="text-[15px] font-bold text-ink">오케이집수리</p>
          <p className="mt-2 break-keep [text-wrap:pretty] text-[13px] leading-[1.3] text-neutral-500">
            수도 배관 · 설비 · 누수탐지 · 도어락 · LED등 · 기타 생활 수리
          </p>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-neutral-400">빠른 링크</p>
          <ul className="mt-3 space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[13px] text-neutral-600 hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-neutral-400">연락처</p>
          <p className="mt-3 text-[13px] text-neutral-600">0507-1334-2577</p>
          <p className="mt-1 text-[13px] text-neutral-600">상담시간 09:00 - 18:00 (연중무휴)</p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-5 text-[12px] text-neutral-400">
        © 2026 오케이집수리. All rights reserved.
      </p>
    </footer>
  )
}
