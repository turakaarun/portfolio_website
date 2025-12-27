import { useEffect, useRef, useState } from 'react'
import './Logos.css'

const Logos = () => {
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const [imageErrors, setImageErrors] = useState({})
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const logos = [
    {
      id: 1,
      image: '/images/explore1.jpg',
      alt: 'Logo 1',
      name: 'Logo 1'
    },
    {
      id: 2,
      image: '/images/explore2.jpg',
      alt: 'Logo 2',
      name: 'Logo 2'
    },
    {
      id: 3,
      image: '/images/explore3.jpg',
      alt: 'Logo 3',
      name: 'Logo 3'
    },
    {
      id: 4,
      image: '/images/explore4.jpg',
      alt: 'Logo 4',
      name: 'Logo 4'
    },
    {
      id: 5,
      image: '/images/explore5.png',
      alt: 'Logo 5',
      name: 'Logo 5'
    },
    {
      id: 6,
      image: '/images/explore6.jpeg',
      alt: 'Logo 6',
      name: 'Logo 6'
    }
  ]

  const handleImageError = (logoId) => {
    setImageErrors(prev => ({ ...prev, [logoId]: true }))
  }

  const TDEUPlaceholder = () => (
    <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="200" rx="12" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2"/>
      <g transform="translate(20, 40)">
        {/* Car silhouette */}
        <path d="M200 20 L240 20 L250 40 L260 50 L250 60 L240 55 L200 55 Z" fill="#fff" opacity="0.9"/>
        <circle cx="230" cy="50" r="8" fill="#fff" opacity="0.7"/>
        {/* TDEU text */}
        <text x="20" y="80" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#fff" letterSpacing="2">
          TDEU
        </text>
        {/* Ride text */}
        <text x="180" y="100" fontFamily="Arial, sans-serif" fontSize="18" fill="#fff" fontStyle="italic">
          Ride
        </text>
      </g>
    </svg>
  )

  const ArchPilotPlaceholder = () => (
    <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="200" rx="12" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2"/>
      <g transform="translate(40, 50)">
        {/* Hexagon icon */}
        <path d="M30 10 L70 10 L85 35 L70 60 L30 60 L15 35 Z" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        {/* Flowchart inside hexagon */}
        <rect x="35" y="20" width="20" height="12" fill="none" stroke="#fff" strokeWidth="2"/>
        <line x1="45" y1="32" x2="45" y2="40" stroke="#fff" strokeWidth="2"/>
        <line x1="45" y1="40" x2="30" y2="40" stroke="#fff" strokeWidth="2"/>
        <line x1="45" y1="40" x2="60" y2="40" stroke="#fff" strokeWidth="2"/>
        <circle cx="25" cy="40" r="6" fill="none" stroke="#fff" strokeWidth="2"/>
        <path d="M60 40 L60 50 L55 55 L60 60 L65 55 Z" fill="none" stroke="#fff" strokeWidth="2"/>
        <line x1="25" y1="46" x2="25" y2="52" stroke="#fff" strokeWidth="2"/>
        <rect x="20" y="52" width="10" height="10" fill="none" stroke="#fff" strokeWidth="2"/>
        {/* Sparkle outside hexagon */}
        <path d="M75 15 L77 19 L81 19 L77 23 L75 27 L73 23 L69 19 L73 19 Z" fill="#fff" opacity="0.8"/>
        {/* ArchPilot text */}
        <text x="100" y="45" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#fff">
          ArchPilot
        </text>
        {/* Sparkle on 'i' */}
        <path d="M195 25 L196 27 L198 27 L196 29 L195 31 L194 29 L192 27 L194 27 Z" fill="#fff" opacity="0.8"/>
      </g>
    </svg>
  )

  const FinSyncPlaceholder = () => (
    <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="200" rx="12" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2"/>
      <g transform="translate(30, 50)">
        {/* Octagonal graphic element */}
        <g transform="translate(50, 50)">
          {/* Outer octagon segments */}
          <path d="M0 -30 L15 -15 L30 0 L15 15 L0 30 L-15 15 L-30 0 L-15 -15 Z" fill="#1e3a8a" opacity="0.8"/>
          {/* Central symbol */}
          <ellipse cx="0" cy="0" rx="12" ry="8" fill="#3b82f6" opacity="0.9"/>
          <path d="M-8 -2 Q0 -4 8 -2 Q0 0 0 0 Q0 0 -8 2 Q0 4 8 2" stroke="#fff" strokeWidth="1.5" fill="none"/>
        </g>
        {/* FIN SYNC text */}
        <text x="100" y="60" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#fff" letterSpacing="2">
          FIN SYNC
        </text>
      </g>
    </svg>
  )

  const IndianGroceryPlaceholder = () => (
    <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="200" rx="12" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2"/>
      <g transform="translate(20, 30)">
        {/* Stylized G */}
        <path d="M10 20 Q10 10 20 10 L50 10 Q60 10 60 30 Q60 50 50 50 L30 50 L30 40 L50 40 Q55 40 55 30 Q55 20 50 20 L20 20 L20 60 L10 60 Z" fill="#166534" stroke="#166534"/>
        {/* INDIAN text */}
        <text x="15" y="45" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#ea580c">
          INDIAN
        </text>
        {/* GROCERY text with Ashoka Chakra */}
        <text x="15" y="75" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#166534">
          GR
        </text>
        <circle cx="115" cy="65" r="8" fill="none" stroke="#1e40af" strokeWidth="2"/>
        <text x="130" y="75" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#166534">
          CERY
        </text>
        {/* Flag stripes */}
        <rect x="180" y="35" width="40" height="8" fill="#ea580c" rx="2"/>
        <rect x="180" y="45" width="40" height="4" fill="#fff" rx="1"/>
        <rect x="180" y="51" width="40" height="8" fill="#166534" rx="2"/>
        {/* Shopping cart */}
        <path d="M230 60 L250 60 L255 70 L250 80 L235 80 L230 70 Z" fill="#000"/>
        <circle cx="240" cy="85" r="3" fill="#fff"/>
        <circle cx="250" cy="85" r="3" fill="#fff"/>
      </g>
    </svg>
  )

  const ResumeBuilderPlaceholder = () => (
    <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="200" rx="12" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="2"/>
      <g transform="translate(40, 40)">
        {/* Stacked papers */}
        <rect x="20" y="20" width="30" height="40" fill="none" stroke="#fff" strokeWidth="2" rx="2"/>
        <rect x="22" y="18" width="30" height="40" fill="none" stroke="#fff" strokeWidth="2" rx="2"/>
        <rect x="24" y="16" width="30" height="40" fill="none" stroke="#fff" strokeWidth="2" rx="2"/>
        {/* RB intertwined letters */}
        <text x="30" y="75" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="#fff">
          RB
        </text>
        {/* Pen nib */}
        <path d="M50 85 L52 90 L50 95 L48 90 Z" fill="#fff"/>
        {/* RESUME BUILDER text */}
        <text x="80" y="50" fontFamily="Georgia, serif" fontSize="24" fontWeight="bold" fill="#fff" letterSpacing="1">
          RESUME
        </text>
        <text x="80" y="75" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="normal" fill="#fff" letterSpacing="2">
          BUILDER
        </text>
      </g>
    </svg>
  )

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Stagger animation for smooth sequential appearance
            setTimeout(() => {
              entry.target.classList.add('fade-in-up')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.logo-item')
      items.forEach((item) => observer.observe(item))
    }

    // Check scroll buttons on mount and scroll
    checkScrollButtons()
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', checkScrollButtons)
    }

    return () => {
      observer.disconnect()
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', checkScrollButtons)
      }
    }
  }, [])

  return (
    <section id="logos" className="logos-section" ref={sectionRef}>
      <div className="logos-container">
        <h2 className="logos-title">Explore my logo designs</h2>

        {/* Logos carousel with navigation */}
        <div className="logos-carousel-wrapper">
          <button 
            className={`logos-nav-button logos-nav-left ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="logos-carousel" ref={scrollContainerRef}>
            <div className="logos-grid">
              {logos.map((logo) => (
                <div key={logo.id} className="logo-item">
                  <div className="logo-wrapper">
                    {!imageErrors[logo.id] ? (
                      <img 
                        src={logo.image} 
                        alt={logo.alt}
                        className="logo-image"
                        onError={() => handleImageError(logo.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="logo-fallback">
                        {logo.id === 1 ? <TDEUPlaceholder /> : 
                         logo.id === 2 ? <ArchPilotPlaceholder /> :
                         logo.id === 3 ? <FinSyncPlaceholder /> :
                         logo.id === 4 ? <IndianGroceryPlaceholder /> :
                         logo.id === 5 ? <ResumeBuilderPlaceholder /> :
                         <span>{logo.name}</span>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`logos-nav-button logos-nav-right ${!canScrollRight ? 'disabled' : ''}`}
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Logos

