import { Button } from '../ui/Button'

const TEL_HREF = 'tel:05071334257'

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-brand/15 to-neutral-100 text-[13px] font-medium text-neutral-400">
      {label}
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-10 md:pt-14">
      <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-[13px] font-medium text-neutral-600">
        <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5 15 9l7 1-5.2 4.9L18 22l-6-3.4L6 22l1.2-7.1L2 10l7-1Z" />
        </svg>
        4.9/5 (후기 320+건)
      </div>

      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <h1 className="break-keep [text-wrap:balance] text-[32px] font-extrabold leading-[1.25] text-ink md:text-[42px]">
          믿을 수 있는 수도 배관 수리,
          <br />
          오케이집수리
        </h1>
        <p className="break-keep [text-wrap:pretty] text-right text-[15px] leading-[1.3] text-neutral-500 md:text-[16px]">
          싱크대부터 양변기, 온수기까지 정직한 가격과 빠른 출동으로 도와드려요.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={TEL_HREF} variant="primary">
          출장 문의하기
        </Button>
        <Button href="#services" variant="secondary">
          서비스 둘러보기
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        <PhotoPlaceholder label="작업 현장 사진 (교체 예정)" />
        <PhotoPlaceholder label="상담 현장 사진 (교체 예정)" />
      </div>
    </section>
  )
}
