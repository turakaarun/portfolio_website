import { useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
  const sectionRef = useRef(null)

  const experiences = [
    {
      company: 'FreeLancer',
      role: 'Graphic Designer',
      period: 'August 2024 - Present',
      responsibilities: [
        'Designed logos, posters, and presentation graphics for student projects',
        'Used Adobe Illustrator and Photoshop to create high-quality visuals for digital formats',
        'Delivered designs that followed project themes, colors, and content needs',
        'Communicated with students to understand their ideas and revised designs based on feedback'
      ]
    },
    {
      company: 'FreeLancer',
      role: 'UI/UX Designer',
      period: 'Jan 2024 - August',
      responsibilities: [
        'Created UI layouts, screen designs, and wireframes for student web and mobile app projects',
        'Built interactive prototypes in Figma to show user flow and basic functionality',
        'Focused on clean, responsive, and user-friendly designs',
        'Worked closely with student developers to make sure the design matched the project goals'
      ]
    }
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
      const items = sectionRef.current.querySelectorAll('.experience-item')
      items.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-icon-wrapper">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="4" height="4" fill="currentColor"/>
                      <rect x="10" y="2" width="4" height="4" fill="currentColor"/>
                      <rect x="2" y="10" width="4" height="4" fill="currentColor"/>
                      <rect x="10" y="10" width="4" height="4" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="experience-company">{exp.company}</h3>
                </div>
                <h4 className="experience-role">{exp.role}</h4>
                <p className="experience-period">{exp.period}</p>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

