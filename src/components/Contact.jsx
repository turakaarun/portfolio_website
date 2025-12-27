import { useEffect, useRef } from 'react'
import './Contact.css'

const Contact = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
            // Animate child elements with stagger
            const title = entry.target.querySelector('.contact-title')
            const subtitle = entry.target.querySelector('.contact-subtitle-text')
            const button = entry.target.querySelector('.contact-button')
            
            if (title) {
              setTimeout(() => title.classList.add('fade-in-up'), 0)
            }
            if (subtitle) {
              setTimeout(() => subtitle.classList.add('fade-in-up'), 200)
            }
            if (button) {
              setTimeout(() => button.classList.add('fade-in-up'), 400)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (sectionRef.current) {
      const content = sectionRef.current.querySelector('.contact-content')
      if (content) {
        // Initially hide elements
        content.style.opacity = '0'
        observer.observe(content)
      }
    }

    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Instagram', url: 'https://www.instagram.com/__iamarun_2/', icon: '📸' },
    { name: 'YouTube', url: 'https://www.youtube.com/@Arunvlogs-usa', icon: '▶️' },
    { name: 'GitHub', url: 'https://github.com', icon: '💻' }
  ]

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle-text">Have a project in mind? Let's chat and bring your ideas to life.</p>
          <a href="/contact" className="contact-button">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

