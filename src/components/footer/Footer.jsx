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
        <a href="https://github.com/BucurEva87" target="_new"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/eva-lavinia-bucur/" target="_new"><FaLinkedin /></a>
        <a href="https://www.facebook.com/bucur.eva87" target="_new"><FaFacebookSquare /></a>
        <a href="https://twitter.com/BucurEva" target="_new"><FaTwitterSquare /></a>
        <a href="mailto:bucur.eva87@gmail.com?subject=Hello%2C%20Eva!%20Nice%20to%20meet%20you!" target="_new"><FaEnvelopeSquare /></a>
      </div>

      <a href="./Eva_Lavinia_Resume.pdf" download="eva-lavinia_bucur_resume.pdf">Download my Resume</a>
    </footer>
  )
}

export default Footer