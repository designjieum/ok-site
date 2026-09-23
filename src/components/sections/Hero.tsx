import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

const TEL_HREF = 'tel:05071334257'

const SERVICE_AREAS = ['양주', '포천', '의정부', '동두천']

const SLIDES = [
  { src: '/images/hero-1.webp', alt: '싱크대 배관 수리 현장' },
  { src: '/images/hero-2.webp', alt: '배관 교체 작업 현장' },
  { src: '/images/hero-3.webp', alt: '누수 탐지 작업 현장' },
]

const SLIDE_DURATION = 4000

function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => clearTimeout(id)
  }, [index])

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[4/3]">
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}

      <div className="absolute inset-x-4 bottom-4 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`슬라이드 ${i + 1}로 이동`}
            className="h-1 flex-1 overflow-hidden rounded-full bg-white/35 backdrop-blur"
          >
            {i === index ? (
              <span
                key={index}
                className="block h-full rounded-full bg-white"
                style={{ animation: `fill-bar ${SLIDE_DURATION}ms linear forwards` }}
              />
            ) : (
              <span
                className={cn('block h-full rounded-full bg-white', i < index ? 'w-full' : 'w-0')}
              />
            )}
          </button>
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

          <h1 className="mt-3 break-keep [text-wrap:balance] text-[32px] font-extrabold leading-[1.25] text-ink max-[426px]:text-[28px] md:text-[42px]">
            새는 수도, 차가운 난방
            <br />
            <span className="text-brand">오케이집수리</span>가 해결합니다.
          </h1>

          <p className="mt-4 break-keep [text-wrap:pretty] text-[15px] leading-[1.3] text-neutral-500 md:text-[16px]">
            갑작스러운 누수, 낡은 난방 배관, 고장난 설비까지
            <br />
            전문가가 직접 방문하여 빠르고 정확하게 해결해드립니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={TEL_HREF} variant="primary" className="max-sm:grow">
              <svg aria-hidden width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.7 3.5 4.9 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8Z" />
              </svg>
              빠른 상담 연결
            </Button>
            <Button href="#services" variant="secondary" className="max-sm:grow">
              서비스 알아보기
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-1.5 break-keep text-[13px] font-medium text-neutral-500">
            <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-brand">
              <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
            </svg>
            {SERVICE_AREAS.join(' · ')} 출장 수리
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-brand-light/10 to-transparent blur-2xl" />

          <HeroSlider />
        </div>
      </div>
    </section>
  )
}
