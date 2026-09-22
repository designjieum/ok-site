function SinkIcon() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h18" strokeLinecap="round" />
      <path d="M4 12v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 6v3M15 6v3" strokeLinecap="round" />
    </svg>
  )
}

function ShowerIcon() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9a6 6 0 0 1 12 0" strokeLinecap="round" />
      <path d="M4 9h16" strokeLinecap="round" />
      <path d="M8 14v1M12 14v2M16 14v1" strokeLinecap="round" />
    </svg>
  )
}

function DrainIcon() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M12 3v6a4 4 0 0 0 4 4h1a4 4 0 0 1 0 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="3" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function AdditionalServices() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.4fr] md:items-center">
          <div>
            <p className="break-keep text-[13px] font-semibold text-brand">EXTRA SERVICE</p>
            <h2 className="mt-3 break-keep [text-wrap:balance] text-[28px] font-extrabold leading-[1.25] text-ink md:text-[32px]">
              오케이집수리의
              <br />
              추가서비스
            </h2>
            <p className="mt-3 break-keep [text-wrap:pretty] text-[15px] leading-[1.3] text-neutral-500 md:text-[16px]">
              사소해 보이는 고장도 방치하면 큰 공사로 이어져요.
              <br />
              방문하신 김에 한 번에 깔끔하게 해결하세요.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 flex h-56 flex-col justify-between rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-600 p-5 sm:col-span-3 md:h-64">
              <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white">
                대표 서비스
              </span>
              <div className="flex items-end justify-between">
                <p className="break-keep text-[18px] font-bold leading-[1.25] text-white">배관 누수탐지</p>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <ArrowIcon />
                </span>
              </div>
            </div>

            <div className="col-span-6 flex h-56 flex-col justify-end rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-5 sm:col-span-3 md:h-64">
              <p className="break-keep text-[18px] font-bold leading-[1.25] text-white">욕실 전체 교체</p>
              <p className="mt-1 break-keep [text-wrap:pretty] text-[13px] leading-[1.3] text-white/70">
                낡은 욕실을 새롭게, 쾌적한 공간으로!
              </p>
            </div>

            <div className="col-span-3 flex h-36 flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 sm:col-span-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                <SinkIcon />
              </span>
              <p className="text-[14px] font-semibold text-ink">세면기 교체</p>
            </div>

            <div className="col-span-3 flex h-36 flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 sm:col-span-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                <ShowerIcon />
              </span>
              <p className="text-[14px] font-semibold text-ink">샤워기 교체</p>
            </div>

            <div className="col-span-6 flex h-36 flex-col justify-between rounded-2xl bg-ink p-5 sm:col-span-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                <DrainIcon />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-white">배관 막힘 해결</p>
                <p className="mt-0.5 break-keep [text-wrap:pretty] text-[12px] leading-[1.3] text-white/60">
                  하수구, 변기, 싱크대 등 막힘 문제 해결
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
