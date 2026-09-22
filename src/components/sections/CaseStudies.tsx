const CASES = [
  {
    tag: '배관 누수',
    title: '옥정동 다세대주택 화장실 누수',
    result: '벽 뜯지 않고 원인부터 찾아 하루 만에 해결했어요.',
  },
  {
    tag: '수전 교체',
    title: '회정동 아파트 주방 수전',
    result: '10년 된 낡은 수전을 새 제품으로 깔끔하게 교체했어요.',
  },
  {
    tag: '온수기 설치',
    title: '고읍동 상가 온수기 긴급 설치',
    result: '온수기 고장으로 급했던 매장, 당일 방문해 바로 설치했어요.',
  },
  {
    tag: '누수 탐지',
    title: '옥정동 주택 숨은 누수',
    result: '곰팡이 원인이었던 숨은 누수를 정밀 장비로 찾아냈어요.',
  },
]

export function CaseStudies() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="break-keep text-[16px] font-bold text-ink">시공 사례</h2>
        <p className="mt-1 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-500">
          오케이집수리가 다녀간 현장을 확인해 보세요.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {CASES.map((item) => (
            <div key={item.title} className="rounded-xl border border-neutral-200">
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
          ))}
        </div>
      </div>
    </section>
  )
}
