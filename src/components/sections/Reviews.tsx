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
  {
    quote: '작업 전에 비용을 정확히 알려주셔서 추가 요금 걱정 없이 맡길 수 있었어요.',
    author: '최민재 고객',
  },
  {
    quote: '주말에 급하게 연락드렸는데도 흔쾌히 방문해 주셔서 정말 감사했습니다.',
    author: '한지수 고객',
  },
  {
    quote: '설치 후에도 궁금한 점을 물어보니 친절하게 알려주셔서 믿음이 갔어요.',
    author: '오세훈 고객',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl py-16">
        <div className="px-5">
          <h2 className="break-keep [text-wrap:balance] text-[24px] font-extrabold leading-[1.25] text-ink md:text-[28px]">
            고객 후기
          </h2>
          <p className="mt-3 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-500">
            실제 고객님들의 소중한 후기입니다.
          </p>
        </div>

        <div
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="w-[85%] shrink-0 snap-start rounded-xl border border-neutral-200 p-5 sm:w-[45%] md:w-[32%]"
            >
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
