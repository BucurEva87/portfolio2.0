import React from 'react'
import './style.scss'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaEnvelopeSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/BucurEva87" aria-label="Check out my GitHub profile" target="_new"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/eva-lavinia-bucur/" aria-label="Check out my LinkedIn profile" target="_new"><FaLinkedin /></a>
        <a href="https://www.facebook.com/bucur.eva87" aria-label="Check out my Facebook profile" target="_new"><FaFacebookSquare /></a>
        <a href="https://twitter.com/BucurEva" aria-label="Check out my Twitter profile" target="_new"><FaTwitterSquare /></a>
        <a href="mailto:bucur.eva87@gmail.com?subject=Hello%2C%20Eva!%20Nice%20to%20meet%20you!" aria-label="Send me an email" target="_new"><FaEnvelopeSquare /></a>
      </div>

      <a href="./Eva_Lavinia_Resume.pdf" aria-label="Download my resume" download="eva-lavinia_bucur_resume.pdf">Download my Resume</a>
    </footer>
  )
}

export default Footer