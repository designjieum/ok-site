import { AccordionItem } from '../ui/Accordion'

const FAQS = [
  {
    question: '당일 방문도 가능한가요?',
    answer: '네, 일정이 비어 있으면 당일 방문이 가능합니다. 누수처럼 급한 경우에는 먼저 전화 주시면 최대한 빠르게 방문하겠습니다.',
  },
  {
    question: '부품(양변기, 수전 등)은 제가 직접 사야 하나요?',
    answer: '저희가 제품을 준비해서 가져갈 수 있고, 직접 구매하신 제품으로 설치만 진행해 드릴 수도 있습니다. 원하시는 방식으로 말씀해 주세요.',
  },
  {
    question: '누수 위치를 모르는데 찾아주실 수 있나요?',
    answer: '네, 누수탐지 장비로 누수 위치를 확인한 뒤 필요한 부분만 최소한으로 보수합니다. 아랫집에 물이 새는 경우에도 원인 확인이 가능합니다.',
  },
  {
    question: '작업 시간은 얼마나 걸리나요?',
    answer: '수전·양변기 교체 같은 간단한 작업은 보통 1시간 안팎이며, 배관 교체나 누수 보수는 현장 상황에 따라 반나절 이상 걸릴 수 있습니다.',
  },
]

export function FAQ() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="break-keep text-[13px] font-semibold text-brand">FAQ</p>
        <h2 className="mt-3 break-keep [text-wrap:balance] text-[28px] font-extrabold leading-[1.25] text-ink md:text-[32px]">
          자주 묻는 질문
        </h2>
        <div className="mt-6">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
