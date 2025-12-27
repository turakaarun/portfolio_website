import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Work', href: '/#work' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' }
  ]

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      if (location.pathname !== '/') {
        window.location.href = href
      } else {
        const element = document.querySelector(href.replace('/', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else if (href.startsWith('/')) {
      // Let React Router handle the navigation
      e.preventDefault()
      window.location.href = href
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navigation ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/"><span className="name-stylish">Arun</span></Link>
        </div>
        <div className="nav-right">
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                {item.href.startsWith('/contact') || item.href.startsWith('/resume') ? (
                  <Link to={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

