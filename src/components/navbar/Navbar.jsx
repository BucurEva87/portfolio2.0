import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './style.scss'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const handleToggleBurger = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleAnchors = () => {
    if (isOpen) handleToggleBurger()
  }

  return (
    <header className="primary-header">
      <span className="logo">Eva-Lavinia</span>
      <nav className="primary-nav">
        <ul className={isOpen ? 'open' : null}>
          <li><a href="#projects" aria-label="Go to the projects section" onClick={handleAnchors}>Projects</a></li>
          <li><a href="#about" aria-label="Go to the about section" onClick={handleAnchors}>About</a></li>
          <li><a href="#skills" aria-label="Go to the skills section" onClick={handleAnchors}>Skills</a></li>
          <li><a href="#contact" aria-label="Go to the contact section" onClick={handleAnchors}>Contact</a></li>
        </ul>
        <Hamburger toggled={isOpen} toggle={handleToggleBurger} />
      </nav>
    </header>
  )
}

export default Navbar