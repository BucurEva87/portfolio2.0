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
        <a href="https://github.com/BucurEva87"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/eva-lavinia-bucur/"><FaLinkedin /></a>
        <a href="https://www.facebook.com/bucur.eva87"><FaFacebookSquare /></a>
        <a href="https://twitter.com/BucurEva"><FaTwitterSquare /></a>
        <a href="mailto:bucur.eva87@gmail.com?subject=Hello%2C%20Eva!%20Nice%20to%20meet%20you!"><FaEnvelopeSquare /></a>
      </div>

      <a href="https://docs.google.com/document/d/1rfCM6QNUWPXzbuciKGV1rV46BMCFut6KcRjLnc43L0Y/edit">Download my Resume</a>
    </footer>
  )
}

export default Footer