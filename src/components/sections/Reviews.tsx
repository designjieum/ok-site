const REVIEWS = [
  {
    quote: '새벽에 갑자기 물이 안 나와서 전화했는데 30분 만에 오셔서 바로 고쳐주셨어요.',
    author: '김지현 고객님',
  },
  {
    quote: '다른 업체는 부르는 게 값이었는데, 여기는 미리 가격 알려주셔서 안심하고 맡겼어요.',
    author: '이성훈 고객님',
  },
  {
    quote: '곰팡이까지 생겼던 누수를 원인부터 정확히 찾아서 해결해 주셨습니다.',
    author: '박서연 고객님',
  },
  {
    quote: '작업 전에 비용을 정확히 알려주셔서 추가 요금 걱정 없이 맡길 수 있었어요.',
    author: '최민재 고객님',
  },
  {
    quote: '주말에 급하게 연락드렸는데도 흔쾌히 방문해 주셔서 정말 감사했습니다.',
    author: '한지수 고객님',
  },
  {
    quote: '설치 후에도 궁금한 점을 물어보니 친절하게 알려주셔서 믿음이 갔어요.',
    author: '오세훈 고객님',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5 15 9l7 1-5.2 4.9L18 22l-6-3.4L6 22l1.2-7.1L2 10l7-1Z" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl py-16">
        <div className="px-5">
          <p className="break-keep text-[13px] font-semibold text-brand">REVIEW</p>
          <h2 className="mt-3 break-keep [text-wrap:balance] text-[28px] font-extrabold leading-[1.25] text-ink md:text-[32px]">
            고객 후기
          </h2>
          <p className="mt-3 break-keep [text-wrap:pretty] text-[15px] leading-[1.3] text-neutral-500 md:text-[16px]">
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
              className="w-[85%] shrink-0 snap-start rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:w-[45%] md:w-[32%]"
            >
              <svg aria-hidden width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-200">
                <path d="M7.5 6C4.5 6 2 8.5 2 11.5c0 2.6 1.9 4.7 4.3 5-.3 1.4-1.1 2.5-2.3 3.3v1.7c3-.8 5-3.3 5-6.9V11c0-2.8-1.6-5-3-5Zm10 0c-3 0-5.5 2.5-5.5 5.5 0 2.6 1.9 4.7 4.3 5-.3 1.4-1.1 2.5-2.3 3.3v1.7c3-.8 5-3.3 5-6.9V11c0-2.8-1.6-5-3-5Z" />
              </svg>
              <p className="mt-3 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-700">
                {review.quote}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                <StarRating />
                <p className="text-[13px] font-medium text-neutral-500">{review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
