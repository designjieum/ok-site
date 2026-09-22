const ITEMS = [
  { title: '도어락 설치', description: '디지털 도어락, 비디오폰 등' },
  { title: 'LED등 교체', description: '거실, 방, 주방 등 전등 교체' },
  { title: '인테리어 기반 기타 수리', description: '선반, 문, 가구 등 생활 수리' },
  { title: '방충망 교체', description: '찢어지거나 낡은 방충망 새로 교체' },
  { title: '타일·줄눈 보수', description: '깨진 타일, 곰팡이 낀 줄눈까지 깔끔하게' },
  { title: '콘센트·스위치 교체', description: '오래된 콘센트, 스위치 안전하게 교체' },
]

export function AdditionalServices() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl py-14">
        <div className="px-5">
          <h2 className="break-keep text-[16px] font-bold text-ink">추가 서비스</h2>
          <p className="mt-1 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-500">
            배관 수리 외에도 다양한 생활 수리 서비스를 제공해요.
          </p>
        </div>

        <div
          className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="w-[68%] shrink-0 snap-start rounded-xl bg-white p-5 sm:w-[42%] md:w-[30%]"
            >
              <div className="mb-3 aspect-video rounded-lg bg-neutral-100" />
              <p className="text-[14px] font-semibold text-ink">{item.title}</p>
              <p className="mt-1 break-keep [text-wrap:pretty] text-[13px] leading-[1.3] text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
