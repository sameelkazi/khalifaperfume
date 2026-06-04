import React from 'react'
import { motion } from 'motion/react'
import { MessageSquare, Star } from 'lucide-react'
import './Collections.css'

interface ProductItem {
  id: number
  name: string
  label: string
  badge?: string
  badgeClass?: string
  tags: string[]
  note: string
  stars: number
  image: string
  waText: string
}

const products: ProductItem[] = [
  {
    id: 1,
    name: 'Musk Khalifa',
    label: '100ml · Mild & Elegant Musk',
    badge: 'Bestseller',
    badgeClass: 'badge-bestseller',
    tags: ['Musky', 'Powdery', 'Long-lasting'],
    note: 'Mild & Elegant Musk',
    stars: 5,
    image: '/unnamed.webp',
    waText: 'Musk Khalifa Perfume'
  },
  {
    id: 2,
    name: 'Purple Oud',
    label: '100ml · Royal Oriental Oud',
    badge: 'Signature',
    badgeClass: 'badge-purple',
    tags: ['Mysterious', 'Rich Oud', 'Long-lasting'],
    note: 'Royal Oriental Oud',
    stars: 5,
    image: '/unnamed (5).webp',
    waText: 'Purple Oud Perfume'
  },
  {
    id: 3,
    name: 'Drakkar Noir Body Splash',
    label: '100ml · Eau de Toilette',
    badge: 'New Arrival',
    badgeClass: 'badge-new',
    tags: ['Fresh', 'Sporty', 'Natural Spray'],
    note: 'Eau de Toilette',
    stars: 4.5,
    image: '/unnamed (2).webp',
    waText: 'Drakkar Noir Body Splash'
  },
  {
    id: 4,
    name: 'Ajwad',
    label: 'By Lattafa · UAE Edition',
    badge: 'Premium',
    badgeClass: 'badge-luxury',
    tags: ['Floral', 'Woody', 'Lattafa'],
    note: 'UAE Edition',
    stars: 5,
    image: '/unnamed (1).webp',
    waText: 'Ajwad by Lattafa'
  },
  {
    id: 5,
    name: 'Swiss Arabian Attar',
    label: 'Concentrated Perfume Oil',
    tags: ['Pure Oil', 'Alcohol-Free', 'UAE Made'],
    note: 'Concentrated Perfume Oil',
    stars: 5,
    image: '/unnamed (3).webp',
    waText: 'Swiss Arabian Attar'
  },
  {
    id: 6,
    name: 'Khalifa Attar Collection',
    label: '50+ Exclusive Attars',
    badge: 'Collection',
    badgeClass: 'badge-bestseller',
    tags: ['Oud', 'Musk', 'Khalifa Label'],
    note: '50+ Exclusive Attars',
    stars: 5,
    image: '/unnamed.jpg',
    waText: 'Khalifa Attar Collection'
  }
]

export const Collections: React.FC = () => {
  return (
    <section className="collections-section" id="collections">
      <div className="collections-container">
        {/* Section Header */}
        <div className="collections-header">
          <p className="collections-label">Signature Range</p>
          <h2 className="collections-title">Our Finest Creations</h2>
          <div className="gold-divider-wrap">
            <span className="divider-line" />
            <div className="divider-diamond" />
            <span className="divider-line" />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Product Badge if exists */}
              {product.badge && (
                <div className={`product-badge-tag ${product.badgeClass || ''}`}>
                  {product.badge}
                </div>
              )}

              {/* Product Image Wrapper with Hover Zoom */}
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-grid-img"
                  loading="lazy"
                />
                
                {/* Hover overlay with Enquire Button */}
                <div className="product-card-overlay">
                  <a
                    href={`https://wa.me/919819664949?text=Hi! I am interested in ${product.waText}`}
                    className="btn-card-enquire"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    Enquire Now
                  </a>
                </div>
              </div>

              {/* Product details */}
              <div className="product-card-info">
                <div className="product-card-tags">
                  {product.tags.map(tag => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-note">{product.label}</p>

                <div className="product-card-footer">
                  <div className="product-card-stars" aria-label={`${product.stars} stars`}>
                    {Array.from({ length: Math.floor(product.stars) }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                    ))}
                    {product.stars % 1 !== 0 && (
                      <Star key="half" className="w-3.5 h-3.5 text-[#C9A84C]" />
                    )}
                  </div>
                  
                  <a
                    href={`https://wa.me/919819664949?text=Hi! I want to order ${product.waText}`}
                    className="btn-card-wa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
