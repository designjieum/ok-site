const STATS = [
  { value: '8+', label: '년 경력' },
  { value: '1,200+', label: '완료 건수' },
  { value: '98%', label: '고객 만족도' },
  { value: '30분', label: '출장 도착' },
]

export function Stats() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-[26px] font-extrabold text-ink md:text-[30px]">{stat.value}</p>
            <p className="mt-1 text-[13px] text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
