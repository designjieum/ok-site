import { Button } from '../ui/Button'

type Service = {
  tags: string[]
  title: string
  description: string
  image: { src: string; alt: string }
}

const SERVICES: Service[] = [
  {
    tags: ['누수 탐지', '정밀 진단', '상하수도 배관'],
    title: '배관 누수 탐지 및 수리',
    description: '벽 뜯지 않고 정밀 장비로 누수 위치부터 콕 짚어드려요.',
    image: { src: '/images/service-1.webp', alt: '정밀 장비로 배관 누수를 탐지하는 모습' },
  },
  {
    tags: ['온수기 설치', '수도계량기 점검'],
    title: '온수기·분배기·수도계량기 설비',
    description: '온수 안 나오는 그날, 바로 출동해서 원인부터 찾아드립니다.',
    image: { src: '/images/service-2.webp', alt: '온수기 배관을 연결하는 모습' },
  },
  {
    tags: ['난방 배관 세척', '누수 점검'],
    title: '난방배관 설비',
    description: '겨울철 난방이 잘 안 될 때, 배관 상태와 누수부터 꼼꼼히 점검해드려요.',
    image: { src: '/images/service-3.webp', alt: '바닥 난방 배관을 시공하는 모습' },
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border-b border-neutral-200 py-10 last:border-0">
      <img
        src={service.image.src}
        alt={service.image.alt}
        width={1280}
        height={720}
        loading="lazy"
        className="aspect-video w-full rounded-2xl bg-neutral-100 object-cover"
      />
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
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.4fr] md:items-start">
        <div className="md:sticky md:top-24 md:pt-10">
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

        <div>
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
