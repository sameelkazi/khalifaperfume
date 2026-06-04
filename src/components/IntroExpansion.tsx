import React from 'react'
import ScrollExpandMedia from './ui/scroll-expansion-hero'

export const IntroExpansion: React.FC = () => {
  return (
    <div className="w-full bg-[#130802]">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/initial_scene.mp4"
        bgImageSrc="/unnamed (7).webp"
        title="Discover the Soul of Arabia"
        date="Khalifa Perfumes"
        scrollToExpand="Scroll down to expand the cinematic story"
        textBlend={false}
      >
        <div className="max-w-4xl mx-auto text-center px-4 py-8">
          <h3 className="text-3xl md:text-4xl font-serif text-[#F5E6C8] mb-6 uppercase tracking-wider">
            Where Scent Tells a Story
          </h3>
          <p className="text-lg text-[#A89060] font-sans leading-relaxed mb-8">
            Our master distillers gather rare roses, wild saffron, and rich oud woods along ancient trade routes. The result is a concentrated, alcohol-free essence designed for those who seek timeless elegance and an unforgettable presence.
          </p>
          <div className="w-24 h-0.5 bg-[#C9A84C] mx-auto" />
        </div>
      </ScrollExpandMedia>
    </div>
  )
}
