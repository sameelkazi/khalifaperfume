import React from 'react'
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
    <main className="min-h-screen bg-[#130802]">
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
