import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const Projects = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.project-card')
      cards.forEach(card => {
        observer.observe(card)
      })
    }

    return () => observer.disconnect()
  }, [])

  // Helper function to convert Figma URLs to embed format
  const getFigmaEmbedUrl = (url) => {
    if (!url) return null
    // Figma Prototype
    if (url.includes('figma.com/proto/')) {
      const figmaUrl = encodeURIComponent(url)
      return `https://www.figma.com/embed?embed_host=share&url=${figmaUrl}`
    }
    // Figma Design File
    if (url.includes('figma.com/design/')) {
      const figmaUrl = encodeURIComponent(url)
      return `https://www.figma.com/embed?embed_host=share&url=${figmaUrl}`
    }
    return url
  }

  const projects = [
    {
      id: 1,
      number: '01',
      title: 'Weekend Ride App',
      description: 'Experience the holistic solution designed for students, providing an all-encompassing platform for affordable and safe weekend travel, connecting students within their community for trusted ride-sharing experiences.',
      link: '/case-study/1',
      category: 'UX Case Study',
      buttonText: 'Get closer to your dream!',
      phoneImages: [
        '/images/case-study-1-1.jpg',
        '/images/case-study-1-2.jpg'
      ],
      color: 'blue'
    },
    {
      id: 2,
      number: '02',
      title: 'Project 2',
      description: 'A comprehensive solution that merges functionality with aesthetics, creating an engaging user experience across multiple platforms.',
      link: '/case-study/2',
      category: 'Product Design',
      buttonText: 'Explore the project',
      phoneImages: [
        '/images/case-study-2-1.jpg',
        '/images/case-study-2-2.jpg'
      ],
      color: 'purple'
    }
  ]

  return (
    <section id="work" className="projects" ref={sectionRef}>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={project.id} className={`project-card project-card-${project.color}`} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="project-layout-wrapper">
              {/* Left Section - Content with Light Blue Background */}
              <div className="project-content-section">
                <div className="project-number-large">{project.number}</div>
                <div className="project-content-center">
                  <h2 className="project-title-large">{project.title}</h2>
                  <p className="project-description-text">{project.description}</p>
                  <Link to={project.link} className="project-button">
                    {project.buttonText}
                  </Link>
                </div>
              </div>

              {/* Right Section - Phone Mockups */}
              <div className="project-mockups-section">
                <Link to={project.link} className="project-case-study-link">
                  View complete UX case study →
                </Link>
                <div className="project-phones-container">
                  {project.phoneImages && project.phoneImages.map((image, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className={`project-phone-mockup project-phone-${imgIndex + 1}`}
                    >
                      <div className="project-phone-frame">
                        <img 
                          src={image} 
                          alt={`${project.title} - Screen ${imgIndex + 1}`}
                          className="project-phone-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="project-phone-fallback" style={{ display: 'none' }}>
                          <span>Screen {imgIndex + 1}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

