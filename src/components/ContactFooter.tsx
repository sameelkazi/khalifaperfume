import React from 'react'
import { motion } from 'motion/react'
import { MessageSquare, MapPin, Send } from 'lucide-react'
import './ContactFooter.css'

export const ContactFooter: React.FC = () => {
  return (
    <footer className="footer-section" id="contact">
      {/* Contact Cards Grid */}
      <div className="contact-cards-container">
        
        {/* Header */}
        <div className="contact-header">
          <p className="contact-label">Connect With Us</p>
          <h2 className="contact-title">Experience the Royal Fragrance</h2>
          <div className="gold-divider-wrap">
            <span className="divider-line" />
            <div className="divider-diamond" />
            <span className="divider-line" />
          </div>
          <p className="contact-desc">
            Have a question about a fragrance? Looking for a custom gift set? Our experts are just a message away.
          </p>
        </div>

        <div className="contact-cards-grid">
          {/* Card 1: WhatsApp */}
          <a
            href="https://wa.me/919819664949"
            className="contact-card contact-card-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon-box">
              <MessageSquare className="w-6 h-6 text-[#130802] fill-[#130802]" />
            </div>
            <div className="contact-card-text">
              <h3>Chat on WhatsApp</h3>
              <p className="info-main">+91 98196 64949</p>
              <p className="info-sub">Available 10am – 10pm daily</p>
            </div>
          </a>

          {/* Card 2: Instagram */}
          <a
            href="https://www.instagram.com/khalifa_attar_perfumes"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="contact-card-text">
              <h3>Follow on Instagram</h3>
              <p className="info-main">@khalifa_attar_perfumes</p>
              <p className="info-sub">New arrivals &amp; releases</p>
            </div>
          </a>

          {/* Card 3: Store Address */}
          <div className="contact-card border-only">
            <div className="contact-icon-box">
              <MapPin className="w-6 h-6 text-[#C9A84C]" />
            </div>
            <div className="contact-card-text">
              <h3>Visit Our Store</h3>
              <p className="info-main">Khalifa Attar &amp; Perfumes</p>
              <p className="info-sub">Open Daily: 10:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>

        {/* Final Large CTA Button */}
        <div className="cta-final-wrapper">
          <motion.a
            href="https://wa.me/919819664949?text=Hello! I would like to explore your fragrance collection."
            className="btn-cta-large"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5 fill-current" />
            Start Your Fragrance Journey — WhatsApp Now
          </motion.a>
        </div>
      </div>

      {/* Main Bottom Footer */}
      <div className="bottom-footer">
        <div className="footer-grid">
          
          {/* Logo Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2 L22 10 L32 10 L24 16 L27 26 L18 20 L9 26 L12 16 L4 10 L14 10 Z" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
                <rect x="10" y="26" width="16" height="3" rx="1" fill="#C9A84C" opacity="0.7" />
              </svg>
              <div className="footer-logo-text">
                <span className="brand-name">Khalifa</span>
                <span className="brand-sub">ATTAR &amp; PERFUMES</span>
              </div>
            </div>
            <p className="footer-tagline">
              Where ancient wisdom meets modern luxury. Every scent tells a story of the Orient.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#product-section">Attars</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Boutique Details</h4>
            <p className="contact-detail-item">
              <strong>Phone:</strong> +91 98196 64949
            </p>
            <p className="contact-detail-item">
              <strong>Boutique Hours:</strong> 10:00 AM – 10:00 PM Daily
            </p>
            <p className="contact-detail-item">
              <strong>Socials:</strong> @khalifa_attar_perfumes
            </p>
          </div>

        </div>

        {/* Legal copyrights */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Khalifa Attar &amp; Perfumes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
