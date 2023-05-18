import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './style.scss'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const handleToggleBurger = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleAnchors = () => {
    if (isOpen) handleToggleBurger()
  }

	return (
    <>
      <span className="logo">Eva-Lavinia</span>
  		<header className="primary-header">
  			<nav className="primary-nav">
  				<ul className={isOpen ? 'open' : null}>
            <li><a href="#about" onClick={handleAnchors}>About</a></li>
            <li><a href="#projects" onClick={handleAnchors}>Projects</a></li>
            <li><a href="#contact" onClick={handleAnchors}>Contact</a></li>
          </ul>
          <Hamburger toggled={isOpen} toggle={handleToggleBurger} />
  			</nav>
  		</header>
    </>
	)
}

export default Header