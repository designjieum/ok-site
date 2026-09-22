import { Button } from '../ui/Button'

const TEL_HREF = 'tel:05071334257'

const MINI_FEATURES = [
  {
    title: '당일출장',
    desc: '빠른 방문, 신속한 처리',
    icon: (
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: '고객만족도 4.9/5',
    desc: '실제 후기 기반',
    icon: (
      <path
        d="M12 2.5 15 9l7 1-5.2 4.9L18 22l-6-3.4L6 22l1.2-7.1L2 10l7-1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: '1년 무상 A/S',
    desc: '사후관리까지 확실하게',
    icon: (
      <path
        d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

function MiniFeature({ feature }: { feature: (typeof MINI_FEATURES)[number] }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
        <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {feature.icon}
        </svg>
      </span>
      <div>
        <p className="text-[13px] font-semibold text-ink">{feature.title}</p>
        <p className="text-[12px] text-neutral-500">{feature.desc}</p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand/5 via-white to-white"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="break-keep text-[13px] font-semibold text-brand">
            수도 배관 · 설비 전문 출장 수리 업체
          </p>

          <h1 className="mt-3 break-keep [text-wrap:balance] text-[32px] font-extrabold leading-[1.25] text-ink md:text-[42px]">
            막힌 배관, 새는 수도 —
            <br />
            <span className="text-brand">오케이집수리</span>가 해결합니다
          </h1>

          <p className="mt-4 break-keep [text-wrap:pretty] text-[15px] leading-[1.3] text-neutral-500 md:text-[16px]">
            갑작스러운 누수, 막힌 배관, 고장난 설비까지
            <br />
            전문가가 직접 방문하여 빠르고 정확하게 해결해드립니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={TEL_HREF} variant="primary">
              <svg aria-hidden width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.7 3.5 4.9 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8Z" />
              </svg>
              지금 바로 전화하기
            </Button>
            <Button href="#services" variant="secondary">
              서비스 알아보기
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-3">
            {MINI_FEATURES.map((feature) => (
              <MiniFeature key={feature.title} feature={feature} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-brand-light/10 to-transparent blur-2xl" />

          <div className="relative flex aspect-[4/5] w-full items-center justify-center rounded-3xl bg-gradient-to-br from-brand/15 to-neutral-100 text-[13px] font-medium text-neutral-400 sm:aspect-[4/3]">
            현장 작업 사진 (교체 예정)
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
              <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
              </svg>
            </span>
            <div>
              <p className="text-[12px] font-bold text-ink">당일출장 가능</p>
              <p className="text-[11px] text-neutral-500">평균 30분 이내 도착</p>
            </div>
          </div>

          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-500">
              <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5 15 9l7 1-5.2 4.9L18 22l-6-3.4L6 22l1.2-7.1L2 10l7-1Z" />
              </svg>
            </span>
            <div>
              <p className="text-[12px] font-bold text-ink">고객평점 4.9/5</p>
              <p className="text-[11px] text-neutral-500">실제 후기 2,341건</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
