import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TagStrip } from './components/TagStrip'
import { Mission } from './components/Mission'
import { ContentPillars } from './components/ContentPillars'
import { FeaturedEpisode } from './components/FeaturedEpisode'
import { PlatformLinks } from './components/PlatformLinks'
import { Support } from './components/Support'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TagStrip />
        <Mission />
        <ContentPillars />
        <FeaturedEpisode />
        <PlatformLinks />
        <Support />
      </main>
      <Footer />
    </>
  )
}
