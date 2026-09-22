import { AccordionItem } from '../ui/Accordion'

const FAQS = [
  {
    question: '출장비만 내고 수리는 안 받아도 되나요?',
    answer: '네, 방문 점검 후 견적을 보시고 원치 않으시면 방문점검비만 결제하시면 됩니다.',
  },
  {
    question: '주말이나 야간에도 방문 가능한가요?',
    answer: '연중무휴 08:00~22:00까지 방문 가능하며, 긴급 상황은 야간에도 출동해요.',
  },
  {
    question: '부품 비용은 별도인가요?',
    answer: '네, 교체 부품 비용은 작업 전 정확한 금액을 안내해 드린 후 진행해요. 숨겨진 비용은 없습니다.',
  },
]

export function FAQ() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="break-keep [text-wrap:balance] text-[28px] font-extrabold leading-[1.25] text-ink md:text-[32px]">
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
