const ITEMS = [
  { title: '도어락 설치', description: '디지털 도어락, 비디오폰 등' },
  { title: 'LED등 교체', description: '거실, 방, 주방 등 전등 교체' },
  { title: '인테리어 기반 기타 수리', description: '선반, 문, 가구 등 생활 수리' },
]

export function AdditionalServices() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="break-keep text-[16px] font-bold text-ink">추가 서비스</p>
        <p className="mt-1 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-500">
          배관 수리 외에도 다양한 생활 수리 서비스를 제공해요.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-5">
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
