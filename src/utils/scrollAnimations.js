// Utility for scroll-triggered animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, observerOptions)

  // Observe all elements with scroll-animate class
  const elements = document.querySelectorAll('.scroll-animate')
  elements.forEach((el) => observer.observe(el))

  return () => {
    observer.disconnect()
  }
}

// Enhanced fade-in-up for sections
export const initSectionAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }
    })
  }, observerOptions)

  // Observe all sections
  const sections = document.querySelectorAll('section')
  sections.forEach((section) => {
    if (!section.classList.contains('fade-in-up')) {
      observer.observe(section)
    }
  })

  return () => {
    observer.disconnect()
  }
}

