import { Fragment } from 'react'

type CaseItem = {
  image: string
  tag: string
  title: string
  result: string
}

const CASES: CaseItem[] = [
  { image: '/images/case-1.webp', tag: '몰탈 미장 마감', title: '양주·의정부·포천·동두천', result: '새 난방배관 신설과 매끄러운 몰탈 미장 마감' },
  { image: '/images/case-2.webp', tag: '난방 배관', title: '양주·의정부·포천·동두천', result: '기존 낡은 XL 파이프, 부식된 와이어메쉬를 전부 걷어내고 새 난방 배관 신설' },
  { image: '/images/case-3.webp', tag: '수전 위치 변경', title: '양주·의정부·포천·동두천', result: '샤워 수전 높이를 서서 쓰기 편하게 위로 올리는 위치 변경 공사' },
  { image: '/images/case-4.webp', tag: '분배기 교체', title: '양주·의정부·포천·동두천', result: '누수 위험이 높은 노후 분배기 새 제품으로 교체' },
  { image: '/images/case-5.webp', tag: '상수도관 연장', title: '양주·의정부·포천·동두천', result: '수도계량기에서부터 집 안 메인 급수 포인트까지 상수도관 연장' },
  { image: '/images/case-6.webp', tag: '수전 교체', title: '포천 호병골', result: '낡은 세면기 수전을 반짝반짝한 새 제품으로 교체' },
  { image: '/images/case-7.webp', tag: '난방 배관', title: '양주시 단독주택', result: '방, 거실, 세탁실까지 포함된 30평 규모 난방 배관 신설' },
  { image: '/images/case-8.webp', tag: '하수관·수도관', title: '노후 주택 리모델링', result: '오수, 하수 배관 신설 및 온·냉수 수도배관 구축까지 완벽하게 시공' },
  { image: '/images/case-9.webp', tag: '양변기·소변기', title: '포천시 가산면', result: '양변기 2개, 세면기 2개, 소변기 1개 설치' },
  { image: '/images/case-10.webp', tag: '수도 배관', title: '신축 건물 배관 증설', result: '주방 싱크대, 세탁실, 화장실 세면대와 양변기 자리까지 신설' },
  { image: '/images/case-11.webp', tag: '누수탐지', title: '양주·의정부·포천·동두천', result: '보일러실 옆, 세탁기에 연결된 수전 밑 바닥에서 누수' },
  { image: '/images/case-12.webp', tag: '누수탐지', title: '대학생 기숙사', result: '아래층 전등 위로 물이 떨어지는 누수 탐지 및 수리' },
  { image: '/images/case-13.webp', tag: '디에트르 빨래장 철거', title: '파주 운정 디에트르 아파트', result: '세탁실 손빨래장 철거' },
  { image: '/images/case-14.webp', tag: '디에트르 빨래장 철거', title: '양주 옥정 디에트르 아파트', result: '세탁실 손빨래장 철거' },
  { image: '/images/case-15.webp', tag: '수전 교체', title: '수전 누수 해결', result: '절수 페달 연동형 수전으로 교체' },
  { image: '/images/case-16.webp', tag: '디에트르 빨래장 철거', title: '인천 송도 디에트르 아파트', result: '세탁실 손빨래장 철거' },
  { image: '/images/case-17.webp', tag: '세면대 설치', title: '구형 아파트', result: '반달형 세면기로 교체' },
  { image: '/images/case-18.webp', tag: '샤워 수전 교체', title: '포천 주공', result: '샤워기 물을 잠가도 새는 오래된 수전 교체' },
  { image: '/images/case-19.webp', tag: '수전 교체', title: '양주시 삼숭동', result: '밤새 한방울 씩 떨어지는 오래된 수전 교체' },
  { image: '/images/case-20.webp', tag: '누수탐지', title: '누수 지점 찾기', result: '1층 주차장 천장으로 물이 새는 지점 탐지 및 수리' },
  { image: '/images/case-21.webp', tag: '누수탐지', title: '빌라 3층', result: '거실 천장 위로 물이 떨어져 4층 세대 누수 탐지 및 수리' },
  { image: '/images/case-22.webp', tag: '디에트르 빨래장 철거', title: '양주시 옥정동', result: '디에트르 아파트 단톡방에 유명해진 빨래장 철거' },
  { image: '/images/case-23.webp', tag: '양변기 교체', title: '양주시 은현면', result: '겨울철 동파된 양변기 교체' },
  { image: '/images/case-24.webp', tag: '방화문 교체', title: '양주시 구옥', result: '할머니가 사용하기 힘든 뻑뻑한 문을 새 문으로 교체' },
  { image: '/images/case-25.webp', tag: '난방 배관', title: '베란다 확장', result: '베란다 공간 확장에 따른 난방 배관 연결' },
  { image: '/images/case-26.webp', tag: '부동전 교체', title: '겨울철 동파', result: '동파 문제로 고생하셨던 고객님 댁 부동전 교체' },
  { image: '/images/case-27.webp', tag: '온수기 설치', title: '양주·의정부·포천·동두천', result: '온수 공급이 되지 않았던 고객님댁 온수기 설치' },
  { image: '/images/case-28.webp', tag: '수도계량기·온수기', title: '양주·의정부·포천·동두천', result: '새롭게 수도 계량기를 설치하고 온수기까지 연결' },
  { image: '/images/case-29.webp', tag: '싱크대 설치', title: '양주·의정부·포천·동두천', result: '기존 싱크대 철거 후, 새 싱크대 설치 및 수도, 하수배관 연결' },
  { image: '/images/case-30.webp', tag: '난방 배관', title: '양주·의정부·포천·동두천', result: '기존 배관보다 설치가 간편하고 유지 관리가 용이한 XL 배관 설치' },
]

// duplicate: 무한 스크롤용 복제본. 스크린리더·크롤러가 같은 사례를 두 번 읽지 않도록 숨긴다
function CaseCard({ item, duplicate = false }: { item: CaseItem; duplicate?: boolean }) {
  return (
    <div aria-hidden={duplicate || undefined} className="w-full rounded-xl border border-neutral-200 bg-white">
      <img
        src={item.image}
        alt={`${item.title} ${item.tag} 시공 사진`}
        width={800}
        height={600}
        loading="lazy"
        className="aspect-[4/3] w-full rounded-t-xl bg-neutral-100 object-cover"
      />
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
      <div
        className="flex flex-col gap-4 [animation-name:scroll-up] [animation-timing-function:linear] [animation-iteration-count:infinite] hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((dup) => (
          <Fragment key={dup}>
            {items.map((item) => (
              <CaseCard key={`${dup}-${item.image}`} item={item} duplicate={dup === 1} />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

// 1·2·3번이 첫 줄에 나란히 오도록 번갈아 배치 (모바일은 첫 번째 열만 노출)
const FIRST_COLUMN = CASES.filter((_, i) => i % 3 === 0)
const SECOND_COLUMN = CASES.filter((_, i) => i % 3 === 1)
const THIRD_COLUMN = CASES.filter((_, i) => i % 3 === 2)

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <p className="break-keep text-[13px] font-semibold text-brand">CASE STUDY</p>
          <h2 className="mt-3 break-keep [text-wrap:balance] text-[28px] font-extrabold leading-[1.25] text-ink md:text-[32px]">
            시공 사례
          </h2>
          <p className="mt-3 break-keep [text-wrap:pretty] text-[15px] leading-[1.3] text-neutral-500 md:text-[16px]">
            오케이집수리가 다녀간 현장을 확인해 보세요.
          </p>
        </div>

        <div className="mt-8 flex max-h-[640px] justify-center gap-4 lg:max-h-[900px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <CaseColumn items={FIRST_COLUMN} duration={60} className="w-full max-w-[280px]" />
          <CaseColumn
            items={SECOND_COLUMN}
            duration={72}
            className="hidden w-full max-w-[280px] sm:block"
          />
          <CaseColumn
            items={THIRD_COLUMN}
            duration={66}
            className="hidden w-full max-w-[280px] lg:block"
          />
        </div>
      </div>
    </section>
  )
}
