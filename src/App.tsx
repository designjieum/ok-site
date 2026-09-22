import { Header } from './components/sections/Header'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { AdditionalServices } from './components/sections/AdditionalServices'
import { Pricing } from './components/sections/Pricing'
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
        <Stats />
        <About />
        <Services />
        <AdditionalServices />
        <Pricing />
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
