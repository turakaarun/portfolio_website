import { useEffect, useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const sectionRef = useRef(null)

  // Design Tools - scrolling left to right (top line) with logos
  const designTools = [
    { name: 'Adobe XD', logo: '/images/logos/adobe-xd.svg' },
    { name: 'Figma', logo: '/images/logos/figma.svg' },
    { name: 'Photoshop', logo: '/images/logos/photoshop.svg' },
    { name: 'Adobe InDesign', logo: '/images/logos/indesign.svg' },
    { name: 'Adobe Illustrator', logo: '/images/logos/illustrator.svg' }
  ]

  // Technical Skills - scrolling right to left (bottom line) with logos
  const technicalSkills = [
    { name: 'HTML', logo: '/images/logos/html.svg' },
    { name: 'CSS', logo: '/images/logos/css.svg' },
    { name: 'Javascript', logo: '/images/logos/javascript.svg' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      const content = sectionRef.current.querySelector('.skills-content')
      if (content) observer.observe(content)
    }

    return () => observer.disconnect()
  }, [])

  // Combine all skills into one array with separator
  const allSkills = [
    ...designTools,
    { name: '|', logo: null, isSeparator: true },
    ...technicalSkills
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      {/* Combined Skills Carousel */}
      <div className="skills-logos-container">
        <div className="skills-logos-section">
          <div className="skills-logos-label">Design Tools | Technical Skills</div>
          <div className="skills-logos-scroll skills-logos-scroll-left">
            <div className="skills-logos-track skills-logos-track-left">
              {/* First set */}
              {allSkills.map((item, index) => (
                <div key={`skill-1-${index}`} className={`skills-logo-item ${item.isSeparator ? 'skills-separator' : ''}`}>
                  {item.isSeparator ? (
                    <span className="skills-separator-text">|</span>
                  ) : (
                    <>
                      <img 
                        src={item.logo} 
                        alt={item.name}
                        className="skills-logo-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'inline';
                        }}
                      />
                      <span className="skills-logo-fallback" style={{ display: 'none' }}>
                        {item.name}
                      </span>
                    </>
                  )}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {allSkills.map((item, index) => (
                <div key={`skill-2-${index}`} className={`skills-logo-item ${item.isSeparator ? 'skills-separator' : ''}`}>
                  {item.isSeparator ? (
                    <span className="skills-separator-text">|</span>
                  ) : (
                    <>
                      <img 
                        src={item.logo} 
                        alt={item.name}
                        className="skills-logo-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'inline';
                        }}
                      />
                      <span className="skills-logo-fallback" style={{ display: 'none' }}>
                        {item.name}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

