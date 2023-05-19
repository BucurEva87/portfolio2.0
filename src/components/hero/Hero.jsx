import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/woman-sitting-on-the-phone.json'
import './style.scss'

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="wrapper">
        <h2>Hello! I am Eva-Lavinia Bucur!</h2>
        <Lottie animationData={animationData} style={{ maxWidth: '50rem', margin: 'auto' }} />
        <button className="call-to-action" onClick={scrollToContact}>Get it touch!</button>
      </div>
    </section>
  )
}

export default Hero