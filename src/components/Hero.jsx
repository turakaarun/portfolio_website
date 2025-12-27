import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

// Custom SVG Icons (matching React Icons style)
const FaYoutubeSVG = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const FaInstagramSVG = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)


const BsBehanceSVG = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7.227h-7.019v1.716h7.019V7.227zM15.603 13.055c-1.503-0.051-2.73-1.08-2.803-2.443-0.065-1.167.779-2.149 2.032-2.322 1.503-0.051 2.73 1.08 2.803 2.443 0.064 1.167-0.78 2.149-2.032 2.322zM17.176 15.967c-2.214 0.133-4.05 0.519-5.807 1.599-0.385-1.115-0.589-2.47-0.589-3.765 0-3.842 2.215-6.5 5.807-6.5 2.887 0 4.525 1.362 5.281 3.911 0.116 0.387 0.193 0.787 0.242 1.199h-4.733c-0.051 1.583 1.185 2.443 2.714 2.632 0.599 0.077 1.161 0.026 1.714-0.026v1.775c-0.218 0.026-0.439 0.051-0.665 0.064-0.599 0.026-1.197 0.026-1.802 0.026zM6.432 8.988H2.877c0 1.473.01 2.953.01 4.44 0 1.583.007 3.166.01 4.749h3.555c0-0.313.01-0.625.01-0.936 0-1.012 0-2.029 0-3.047 0-0.313 0-0.625 0-0.936 0.313 0.625 0.625 1.237 1.302 1.237 1.302 0.313 2.215 0 2.887-1.237 0.313-0.625 0.47-1.302 0.47-2.029 0-0.936-0.157-1.749-0.47-2.215-0.672-1.302-1.584-1.302-2.887-0.313-0.677-0.625-0.989-0.936-1.302zM5.006 6.761c0.884 0 1.603-0.719 1.603-1.603s-0.719-1.603-1.603-1.603-1.603 0.719-1.603 1.603 0.719 1.603 1.603 1.603z"/>
  </svg>
)

const FaLinkedinSVG = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const Hero = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      const content = sectionRef.current.querySelector('.hero-content')
      if (content) observer.observe(content)
    }

    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@Arunvlogs-usa', Icon: FaYoutubeSVG },
    { name: 'Instagram', url: 'https://www.instagram.com/__iamarun_2/', Icon: FaInstagramSVG },
    { name: 'Behance', url: 'https://www.behance.net/arunkumarturaka', text: 'Bē' },
    { name: 'LinkedIn', url: 'https://linkedin.com', Icon: FaLinkedinSVG }
  ]

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <p className="hero-greeting">Hi,</p>
            <h1 className="hero-title"><span className="name-stylish">Arun</span> here! <span className="hero-emoji">👋</span></h1>
            <div className="hero-description">
              <p>
                I'm a passionate <strong>UI/UX Designer</strong>🖌️ and <strong>Content Creator</strong> with a knack for crafting beautiful and functional designs.
              </p>
              <p>
                I specialize in <strong>UI/UX Design</strong>, <strong>Interaction Design</strong>, and <strong>Product Design</strong>.
              </p>
              <p>
                Yep, I do them all, and I love every minute of it.<br />
                Let's create meaningful and impactful designs together.
              </p>
            </div>
            <div className="hero-social">
              <div className="hero-social-icons">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.Icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-social-link"
                      aria-label={social.name}
                    >
                      {social.text ? (
                        <span className="hero-social-text">{social.text}</span>
                      ) : (
                        <IconComponent size={22} />
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="hero-actions">
              <a href="#resume" className="hero-resume-button">
                Resume
              </a>
              <a href="mailto:turakaarunkumar@gmail.com" className="hero-email-button">
                turakaarunkumar@gmail.com
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img 
                src="/images/profile-photo.jpg" 
                alt="Arun"
                className="hero-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-image-placeholder" style={{ display: 'none' }}>
                <span>Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

