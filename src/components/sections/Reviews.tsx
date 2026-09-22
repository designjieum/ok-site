type Review = {
  author: string
  platform: string
  quote: string
}

const REVIEWS: Review[] = [
  {
    author: '루미xx님',
    platform: '당근후기',
    quote:
      '배관 누수 문제로 문의드렸는데 정말 빠르고 꼼꼼하게 수리해 주셨습니다. 작업 전에 누수 원인과 수리 방향을 친절하게 설명해 주셔서 안심이 되었고, 시공도 군더더기 없이 완벽하게 마무리해 주셨어요. 만족도 200%입니다!! 고민하시는 분들께 강력 추천합니다!!!',
  },
  {
    author: '다둥xx님',
    platform: '당근후기',
    quote:
      '현관 전등이 너무 빨리 나가서 불편해 LED전등으로 교체하고 말발굽도 달아야 해서 연락드렸는데, 전화통화도 너무 친절하게 해주시고 변기도 자꾸 소리가 났었는데 그것도 잡아주셔서 저희 집 불편함이 한번에 해결됐습니당!! 후기 귀찮아서 잘 작성 안 하는데 너무 세심하게 잘해주셔서 감사함에 후기 남겨봅니다 추천드려용:)',
  },
  {
    author: '하xx님',
    platform: '숨고',
    quote:
      '이번에 수전 교체를 했는데요. 굉장히 친절하십니다! 가격도 굉장히 합리적이고 시간도 엄청 빠르게 해주셨어요!! 강력추천 드립니다!! 감사합니다!!',
  },
  {
    author: '정xx님',
    platform: '숨고',
    quote:
      '셀프 리모델링한다고 수전교체하다가 나사가 풀리지 않아서 숨고 통해서 고수분을 만났습니다. 가격은 전국 최저가입니다. 늦은 시간까지 수전교체, 화장실 청소건 설치 해주셔서 감사합니다. 다음에 고수님께 바로 연락드릴께요. 광고하는 거 아닙니다. 찐고수입니다.',
  },
  {
    author: '이xx님',
    platform: '숨고',
    quote:
      '딱딱하지 않고 꼭 친정아버지처럼 이얘기 저얘기 하시면서 작업해 주셨어요. 저희 수전이 흔한 형태는 아니라서 잘되려나 했는데 너무 잘 설치해주셔서 아주 마음이 흡족합니다. 감사해요:)',
  },
  {
    author: '잔xx님',
    platform: '숨고',
    quote:
      '미리 전화주셔서 어떤 문제인지 확인하시고, 오셔서도 어떤 게 문제인지 정확히 알려주시고 수리 방법도 친절하게 설명해주셨습니다. 작업 속도도 빨라서 금방 해결되었습니다. 가격도 착해서 좋았습니다. 깔끔하게 잘 처리됐습니다.',
  },
  {
    author: '이xx님',
    platform: '숨고',
    quote: '문의부터 완료까지 매우 빠르게 진행해 주셨습니다! 친절하시고 빨리 해결해주셔서 다음에도 문제 생기면 도움 청할 것 같네요:)',
  },
  {
    author: '강xx님',
    platform: '숨고',
    quote: '친절하시고 실력도 좋으십니다. 비용도 아주 합리적이구요~ 아주 완벽히 잘 해결해주셨습니다. 감사합니다.',
  },
  {
    author: '김xx님',
    platform: '숨고',
    quote: '물폭탄 맞으시면서도 불만 없이 작업해주셨어요. 감사합니다.',
  },
  {
    author: '서xx님',
    platform: '숨고',
    quote: '빠른 시일 내 방문해주셔서 감사합니다! 정말 친절하세요~!~!~',
  },
  {
    author: '이xx님',
    platform: '숨고',
    quote: '고수님 꼼꼼하게 잘해주셔서 감사합니다.',
  },
  {
    author: '이xx님',
    platform: '숨고',
    quote: '고수님 꼼꼼하게 잘해주셔서 감사했습니다.',
  },
  {
    author: '박xx님',
    platform: '숨고',
    quote: '고수님 친절에 감사하고 만족합니다.',
  },
  {
    author: '이xx님',
    platform: '숨고',
    quote: '좋은 고수님 만나 기분좋게 편리함을 얻었습니당. 추천 드려요♡♡',
  },
  {
    author: '딩다xx님',
    platform: '당근후기',
    quote: '친절하고 가격이 합리적이에요.',
  },
  {
    author: '엠디엠xx님',
    platform: '당근후기',
    quote: '빠르게 도와주셔서 해체 잘했습니다!',
  },
  {
    author: '사x님',
    platform: '당근후기',
    quote: '수도배관 너무 친절히 잘해주셨습니다. 감사합니다',
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
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:w-[45%] md:w-[32%]"
            >
              <svg aria-hidden width="34" height="34" viewBox="0 0 32 32" fill="currentColor" className="text-brand/20">
                <path d="M9.5 20c-1.9 0-3.5-.6-4.7-1.9C3.6 16.9 3 15.3 3 13.4c0-2.4.8-4.6 2.4-6.5C7 5 9 3.5 11.5 2.5l1 2.1c-1.6.8-2.9 1.8-3.8 3-1 1.2-1.5 2.4-1.6 3.6.4-.1.8-.2 1.2-.2 1.6 0 2.9.5 3.9 1.6 1 1.1 1.5 2.4 1.5 4 0 1.6-.5 2.9-1.6 3.9-1 1-2.3 1.5-3.6 1.5Zm13 0c-1.9 0-3.5-.6-4.7-1.9-1.2-1.2-1.8-2.8-1.8-4.7 0-2.4.8-4.6 2.4-6.5 1.6-1.9 3.6-3.4 6.1-4.4l1 2.1c-1.6.8-2.9 1.8-3.8 3-1 1.2-1.5 2.4-1.6 3.6.4-.1.8-.2 1.2-.2 1.6 0 2.9.5 3.9 1.6 1 1.1 1.5 2.4 1.5 4 0 1.6-.5 2.9-1.6 3.9-1 1-2.3 1.5-3.6 1.5Z" />
              </svg>
              <p className="mt-3 flex-1 break-keep [text-wrap:pretty] text-[14px] leading-[1.3] text-neutral-700">
                {review.quote}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                <StarRating />
                <div className="text-right">
                  <p className="text-[13px] font-medium text-neutral-600">{review.author}</p>
                  <p className="text-[11px] text-neutral-400">{review.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
