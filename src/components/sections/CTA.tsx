import { Button } from '../ui/Button'

const PHONE = '0507-1334-2577'
const TEL_HREF = `tel:${PHONE.replace(/-/g, '')}`

export function CTA() {
  return (
    <section id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center">
        <p className="break-keep text-[16px] font-semibold text-neutral-600">지금 바로 상담 받아보세요</p>
        <a href={TEL_HREF} className="mt-3 block text-[32px] font-extrabold text-ink md:text-[38px]">
          {PHONE}
        </a>
        <div className="mt-6">
          <Button href={TEL_HREF} variant="primary">
            전화 상담하기 →
          </Button>
        </div>
      </div>
    </section>
  )
}
