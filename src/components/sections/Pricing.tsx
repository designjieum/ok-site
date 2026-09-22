import { Button } from '../ui/Button'

export function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="rounded-3xl bg-ink px-6 py-12 text-center text-white md:px-16">
        <p className="text-[13px] font-semibold text-brand">[ 방문점검료 ]</p>
        <h2 className="mt-3 break-keep [text-wrap:balance] text-[22px] font-extrabold leading-[1.25] md:text-[26px]">
          출장비, 미리 알려드려요.
        </h2>
        <p className="mx-auto mt-3 max-w-md break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-300">
          기본 방문점검비 15,000원부터. 수리를 진행하시면 점검비는 전액 수리비에서 빼드려요.
          부품 비용은 작업 전 정확히 안내해 드립니다.
        </p>
        <div className="mt-6">
          <Button href="#contact" variant="secondary" className="!bg-white !text-ink">
            무료 방문 견적 신청 →
          </Button>
        </div>
      </div>
    </section>
  )
}
