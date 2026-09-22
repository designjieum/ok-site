import { useEffect, useRef, useState, type Ref } from 'react'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

type Service = {
  tags: string[]
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    tags: ['누수 탐지', '정밀 진단', '상하수도 배관'],
    title: '배관 누수 탐지 및 수리',
    description: '벽 뜯지 않고 정밀 장비로 누수 위치부터 콕 짚어드려요.',
  },
  {
    tags: ['온수기 설치', '수도계량기 점검'],
    title: '온수기·분배기·수도계량기 설비',
    description: '온수 안 나오는 그날, 바로 출동해서 원인부터 찾아드립니다.',
  },
  {
    tags: ['난방 배관 세척', '누수 점검'],
    title: '난방배관',
    description: '겨울철 난방이 잘 안 될 때, 막힘과 누수부터 꼼꼼히 점검해드려요.',
  },
]

const STICKY_TOP = 96 // px, matches md:top-24

function ServiceCard({ service, imageRef }: { service: Service; imageRef?: Ref<HTMLDivElement> }) {
  return (
    <div className="border-b border-neutral-200 py-10 last:border-0">
      <div
        ref={imageRef}
        className="flex aspect-video items-center justify-center rounded-2xl bg-neutral-100 text-[13px] font-medium text-neutral-400"
      >
        작업 사진 (교체 예정)
      </div>
      <div className="mt-5">
        <p className="mb-2 text-[13px] font-medium text-neutral-400">{service.tags.join(' · ')}</p>
        <h3 className="break-keep [text-wrap:balance] text-[20px] font-bold leading-[1.25] text-ink">
          {service.title}
        </h3>
        <p className="mt-2 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-500">
          {service.description}
        </p>
        <Button href="#contact" variant="primary" className="mt-5 !px-5 !py-2.5 text-[13px]">
          지금 바로 빠른 상담 연결
        </Button>
      </div>
    </div>
  )
}

export function Services() {
  const outerRef = useRef<HTMLDivElement>(null)
  const lastImageRef = useRef<HTMLDivElement>(null)
  const [frozen, setFrozen] = useState(false)
  const [frozenTop, setFrozenTop] = useState(0)

  useEffect(() => {
    let ticking = false

    function measure() {
      ticking = false
      if (window.innerWidth < 768 || !outerRef.current || !lastImageRef.current) {
        setFrozen(false)
        return
      }
      const outerTop = outerRef.current.getBoundingClientRect().top + window.scrollY
      const lastImageBottom = lastImageRef.current.getBoundingClientRect().bottom + window.scrollY
      const stickyPageY = window.scrollY + STICKY_TOP

      if (stickyPageY >= lastImageBottom) {
        setFrozen(true)
        setFrozenTop(lastImageBottom - outerTop)
      } else {
        setFrozen(false)
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(measure)
      }
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.4fr]">
        <div ref={outerRef} className="md:relative">
          <div
            className={cn('md:pt-10', frozen ? 'md:absolute md:inset-x-0' : 'md:sticky md:top-24')}
            style={frozen ? { top: frozenTop } : undefined}
          >
            <p className="break-keep text-[13px] font-semibold text-brand">SERVICE</p>
            <h2 className="mt-3 break-keep [text-wrap:balance] text-[28px] font-extrabold leading-[1.25] text-ink md:text-[32px]">
              우리 집을 위한
              <br />
              믿음직한 서비스
            </h2>
            <p className="mt-3 break-keep [text-wrap:pretty] text-[15px] leading-[1.3] text-neutral-500 md:text-[16px]">
              단순한 수리가 아니라, 일상을 지키는 파트너가 되기 위해 언제나 최선을 다해요.
            </p>
          </div>
        </div>

        <div>
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              imageRef={i === SERVICES.length - 1 ? lastImageRef : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
