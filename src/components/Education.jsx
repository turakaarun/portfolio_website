import { useEffect, useRef } from 'react'
import './Education.css'

const Education = () => {
  const sectionRef = useRef(null)

  const education = [
    {
      period: '2024 - Present',
      degree: 'Master in Computer Science',
      university: 'Kent State University',
      description: 'Skilled in Adobe XD, Illustrator, InDesign, and basic Premiere Pro, with a strong focus on creative design and digital experience.'
    },
    {
      period: '2020 - 2023',
      degree: 'Computer Science and Systems Engineering',
      university: 'Sree Vidyanikethan Engineering College',
      description: 'Published research paper on Rainfall Prediction Using Machine Learning'
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
      const items = sectionRef.current.querySelectorAll('.education-item')
      items.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="timeline-marker"></div>
              <div className="education-content">
                <p className="education-period">{edu.period}</p>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-university">{edu.university}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education



