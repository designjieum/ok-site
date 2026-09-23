import { Button } from '../ui/Button'

const PHONE = '0507-1334-2577'
const TEL_HREF = `tel:${PHONE.replace(/-/g, '')}`

const SERVICE_AREAS = ['양주', '포천', '의정부', '동두천']

export function CTA() {
  return (
    <section id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-brand/10 bg-brand/5 px-5 py-10 sm:px-6 md:px-12 md:py-14">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-brand-light/20 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            <div>
              <p className="break-keep text-[13px] font-semibold text-brand">경기북부 수도 · 배관 · 설비 전문</p>
              <h2 className="mt-3 break-keep [text-wrap:balance] text-[28px] font-extrabold leading-[1.25] text-ink md:text-[32px]">
                작은 누수가 큰 공사가 되기 전에,
                <br />
                전화 한 통이면 충분합니다.
              </h2>
              <p className="mt-5 break-keep text-[14px] text-neutral-500 md:text-[15px]">
                {SERVICE_AREAS.join(' · ')} <span className="whitespace-nowrap">출장 수리</span>
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-brand/5 sm:p-6 md:p-8">
              <p className="text-[13px] font-medium text-neutral-400">전화 상담</p>
              <a
                href={TEL_HREF}
                className="mt-1 block whitespace-nowrap font-pretendard text-[clamp(22px,7vw,28px)] font-extrabold tracking-tight text-ink md:text-[32px]"
              >
                {PHONE}
              </a>
              <p className="mt-1 break-keep text-[13px] text-neutral-500">통화가 어려우시면 문자를 남겨주세요.</p>
              <Button href={TEL_HREF} variant="primary" className="mt-6 w-full">
                <svg aria-hidden width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.7 3.5 4.9 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8Z" />
                </svg>
                빠른 상담 연결
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
