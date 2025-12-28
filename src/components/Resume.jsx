import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Experience from './Experience'
import Education from './Education'
import './Resume.css'

const Resume = () => {
  const sectionRef = useRef(null)


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
      const content = sectionRef.current.querySelector('.resume-content')
      if (content) observer.observe(content)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume" className="resume" ref={sectionRef}>
      {/* Resume Content - Top */}
      <div className="resume-container">
        <div className="resume-content">
          <h2 className="section-title">Resume</h2>
          <a 
            href="/ArunKumar_Turaka_Resume.pdf" 
            className="resume-button"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <Experience />
      <Education />
    </section>
  )
}

export default Resume

