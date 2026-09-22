import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

const TEL_HREF = 'tel:05071334257'

const SLIDES = [
  '현장 작업 사진 1 (교체 예정)',
  '현장 작업 사진 2 (교체 예정)',
  '현장 작업 사진 3 (교체 예정)',
]

function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[4/3]">
      {SLIDES.map((label, i) => (
        <div
          key={label}
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand/15 to-neutral-100 text-[13px] font-medium text-neutral-400 transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          {label}
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`슬라이드 ${i + 1}로 이동`}
            className={cn(
              'h-1.5 rounded-full transition-all',
              i === index ? 'w-5 bg-brand' : 'w-1.5 bg-white/70',
            )}
          />
        ))}
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
            막힌 배관, 새는 수도
            <br />
            <span className="text-brand">오케이집수리</span>가 해결합니다.
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
              빠른 상담 연결
            </Button>
            <Button href="#services" variant="secondary">
              서비스 알아보기
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-brand-light/10 to-transparent blur-2xl" />

          <HeroSlider />
        </div>
      </div>
    </section>
  )
}
