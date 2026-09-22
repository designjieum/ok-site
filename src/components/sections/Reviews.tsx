const REVIEWS = [
  {
    quote: '새벽에 갑자기 물이 안 나와서 전화했는데 30분 만에 오셔서 바로 고쳐주셨어요.',
    author: '김지현 고객',
  },
  {
    quote: '다른 업체는 부르는 게 값이었는데, 여기는 미리 가격 알려주셔서 안심하고 맡겼어요.',
    author: '이성훈 고객',
  },
  {
    quote: '곰팡이까지 생겼던 누수를 원인부터 정확히 찾아서 해결해 주셨습니다.',
    author: '박서연 고객',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-[16px] font-bold text-ink">고객 후기</h2>
        <p className="mt-1 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-500">
          실제 고객님들의 소중한 후기입니다.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div key={review.author} className="rounded-xl border border-neutral-200 p-5">
              <p className="break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-700">
                “{review.quote}”
              </p>
              <p className="mt-3 text-[13px] font-semibold text-neutral-400">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
