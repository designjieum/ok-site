import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

// 빌드 시 scripts/prerender.mjs가 호출해 정적 HTML을 dist/index.html에 채워 넣는다.
// 자바스크립트를 실행하지 않는 검색·AI 크롤러도 본문을 읽을 수 있게 하기 위함.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
