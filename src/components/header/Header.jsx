import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './style.scss'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const handleToggleBurger = () => {
    setOpen(prevOpen => !prevOpen)
    window.alert(`Burger is now: ${!isOpen ? 'open' : 'closed'}`)
  }

	return (
    <>
      <span className="logo">Eva-Lavinia</span>
  		<header className="primary-header">
  			<nav className="primary-nav">
  				<ul>
            <li><a href="#about">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Something</a></li>
          </ul>
          <Hamburger toggled={isOpen} toggle={handleToggleBurger} />
  			</nav>
  		</header>
    </>
	)
}

export default Header