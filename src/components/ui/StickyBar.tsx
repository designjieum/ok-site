const PHONE = '0507-1334-2577'
const TEL_HREF = `tel:${PHONE.replace(/-/g, '')}`

export function StickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-neutral-200 bg-white/95 p-3 backdrop-blur md:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))' }}
    >
      <a
        href={TEL_HREF}
        className="flex-1 rounded-full bg-neutral-100 py-3.5 text-center text-[15px] font-semibold text-ink active:opacity-80"
      >
        전화 문의
      </a>
      <a
        href="#contact"
        className="flex-1 rounded-full bg-brand py-3.5 text-center text-[15px] font-semibold text-white active:opacity-80"
      >
        빠른 상담 신청
      </a>
    </div>
  )
}
