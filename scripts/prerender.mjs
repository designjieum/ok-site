// vite build(클라이언트)와 vite build --ssr(서버 번들)이 끝난 뒤 실행된다.
// 서버 번들로 App을 HTML 문자열로 렌더해 dist/index.html의 빈 #root에 채워 넣는다.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const ssrDir = `${root}dist-ssr`
const indexPath = `${root}dist/index.html`

const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href)

const template = await readFile(indexPath, 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`)
}

await writeFile(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })

console.log('prerender: dist/index.html updated')
