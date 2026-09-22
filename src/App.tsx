import { Header } from './components/sections/Header'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { AdditionalServices } from './components/sections/AdditionalServices'
import { CaseStudies } from './components/sections/CaseStudies'
import { Reviews } from './components/sections/Reviews'
import { FAQ } from './components/sections/FAQ'
import { CTA } from './components/sections/CTA'
import { Footer } from './components/sections/Footer'
import { StickyBar } from './components/ui/StickyBar'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Services />
        <AdditionalServices />
        <CaseStudies />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyBar />
    </div>
  )
}

export default App
