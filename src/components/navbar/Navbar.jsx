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
          <li><a href="#about" onClick={handleAnchors}>About</a></li>
          <li><a href="#projects" onClick={handleAnchors}>Projects</a></li>
          <li><a href="#contact" onClick={handleAnchors}>Contact</a></li>
        </ul>
        <Hamburger toggled={isOpen} toggle={handleToggleBurger} />
      </nav>
    </header>
  )
}

export default Navbar