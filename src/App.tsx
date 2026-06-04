import React from 'react'
import { Preloader } from './components/Preloader'
import { IntroExpansion } from './components/IntroExpansion'
import { Hero } from './components/Hero'
import { Product } from './components/Product'
import { PurpleOudShowcase } from './components/PurpleOudShowcase'
import { RoyalAmberShowcase } from './components/RoyalAmberShowcase'
import { Collections } from './components/Collections'
import { BoutiqueStory } from './components/BoutiqueStory'
import { VideoGallery } from './components/VideoGallery'
import { Testimonials } from './components/Testimonials'
import { ContactFooter } from './components/ContactFooter'

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#130802] relative">
      <Preloader />
      {/* Islamic Geometric Pattern Overlay (full-page) */}
      <div className="geo-pattern" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.12"/>
              <polygon points="40,14 66,27 66,53 40,66 14,53 14,27" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.08"/>
              <circle cx="40" cy="40" r="4" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)"/>
        </svg>
      </div>

      <Hero />
      <PurpleOudShowcase />
      <RoyalAmberShowcase />
      <Product />
      <Collections />
      <BoutiqueStory />
      <VideoGallery />
      <Testimonials />
      <IntroExpansion />
      <ContactFooter />
    </main>
  )
}

export default App
