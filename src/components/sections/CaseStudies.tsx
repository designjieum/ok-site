import { Fragment } from 'react'
import { motion } from 'motion/react'

type CaseItem = {
  tag: string
  title: string
  result: string
}

const CASES: CaseItem[] = [
  { tag: '누수 탐지', title: '옥정동 다세대주택 화장실 누수', result: '벽 뜯지 않고 원인부터 찾아 하루 만에 해결했어요.' },
  { tag: '수전 교체', title: '회정동 아파트 주방 수전', result: '10년 된 낡은 수전을 새 제품으로 깔끔하게 교체했어요.' },
  { tag: '온수기 설치', title: '고읍동 상가 온수기 긴급 설치', result: '온수기 고장으로 급했던 매장, 당일 방문해 바로 설치했어요.' },
  { tag: '누수 탐지', title: '옥정동 주택 숨은 누수', result: '곰팡이 원인이었던 숨은 누수를 정밀 장비로 찾아냈어요.' },
  { tag: '배관 막힘 해결', title: '덕정동 빌라 배관 막힘', result: '꽉 막혔던 하수구, 특수 장비로 말끔히 뚫었어요.' },
  { tag: '욕실 전체 교체', title: '옥정동 신축 아파트 욕실', result: '낡은 욕실을 위생적이고 산뜻한 공간으로 바꿔드렸어요.' },
  { tag: '샤워기 교체', title: '고암동 원룸 샤워기 교체', result: '수압 약했던 샤워기, 넉넉한 수압의 새 제품으로 교체했어요.' },
  { tag: '세면기 교체', title: '은현면 주택 세면기 교체', result: '금이 가 있던 세면기를 안전한 새 제품으로 바꿔드렸어요.' },
  { tag: '정기 점검', title: '옥정동 카페 설비 점검', result: '정기 점검으로 큰 고장 나기 전에 미리 손봐드렸어요.' },
]

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <div className="w-full rounded-xl border border-neutral-200 bg-white">
      <div className="flex aspect-[4/3] items-center justify-center rounded-t-xl bg-neutral-100 text-[12px] font-medium text-neutral-400">
        시공 사진 (교체 예정)
      </div>
      <div className="p-4">
        <span className="inline-block rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand-dark">
          {item.tag}
        </span>
        <p className="mt-2 break-keep [text-wrap:balance] text-[14px] font-semibold leading-[1.3] text-ink">
          {item.title}
        </p>
        <p className="mt-1 break-keep [text-wrap:pretty] text-[13px] leading-[1.3] text-neutral-500">
          {item.result}
        </p>
      </div>
    </div>
  )
}

function CaseColumn({
  items,
  duration,
  className,
}: {
  items: CaseItem[]
  duration: number
  className?: string
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-4"
      >
        {[0, 1].map((dup) => (
          <Fragment key={dup}>
            {items.map((item) => (
              <CaseCard key={`${dup}-${item.title}`} item={item} />
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  )
}

const FIRST_COLUMN = CASES.slice(0, 3)
const SECOND_COLUMN = CASES.slice(3, 6)
const THIRD_COLUMN = CASES.slice(6, 9)

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="break-keep [text-wrap:balance] text-[24px] font-extrabold leading-[1.25] text-ink md:text-[28px]">
          시공 사례
        </h2>
        <p className="mt-3 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-500">
          오케이집수리가 다녀간 현장을 확인해 보세요.
        </p>

        <div className="mt-8 flex max-h-[640px] justify-center gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <CaseColumn items={FIRST_COLUMN} duration={16} className="w-full max-w-[280px]" />
          <CaseColumn
            items={SECOND_COLUMN}
            duration={20}
            className="hidden w-full max-w-[280px] sm:block"
          />
          <CaseColumn
            items={THIRD_COLUMN}
            duration={18}
            className="hidden w-full max-w-[280px] lg:block"
          />
        </div>
      </div>
    </section>
  )
}
