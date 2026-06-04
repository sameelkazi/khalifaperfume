import React from 'react'
import { motion } from 'motion/react'
import { Star } from 'lucide-react'
import './Testimonials.css'

interface TestimonialItem {
  id: number
  name: string
  location: string
  text: string
  avatar: string
  stars: number
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'Ahmed R.',
    location: 'Mumbai',
    text: 'The Purple Oud from Khalifa is unlike anything I\'ve ever worn. Rich, royal, and incredibly long-lasting. Compliments every single time. This is liquid royalty!',
    avatar: 'A',
    stars: 5
  },
  {
    id: 2,
    name: 'Sana K.',
    location: 'Thane',
    text: 'I visited Khalifa Attar for the first time and was blown away. The variety of pure attars is incredible. Musk Khalifa has become my signature scent. Highly recommend!',
    avatar: 'S',
    stars: 5
  },
  {
    id: 3,
    name: 'Farhan M.',
    location: 'Pune',
    text: 'Ordered via WhatsApp, got genuine Swiss Arabian attar at the best price. Fast response, authentic products, beautiful packaging. The owner really knows his fragrances!',
    avatar: 'F',
    stars: 5
  }
]

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <p className="testimonials-label">What Our Customers Say</p>
          <h2 className="testimonials-title">Royal Reviews</h2>
          <div className="gold-divider-wrap">
            <span className="divider-line" />
            <div className="divider-diamond" />
            <span className="divider-line" />
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={t.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <div className="quote-mark" aria-hidden="true">“</div>
              <p className="testimonial-text">{t.text}</p>
              
              <footer className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">
                  {t.avatar}
                </div>
                <div className="author-meta">
                  <cite className="author-name">{t.name}</cite>
                  <span className="author-location">{t.location}</span>
                </div>
                
                <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

      </div>
    </section>
  )
}
