import Header from './components/header/Header'
import Lottie from 'lottie-react'
import animationData from './assets/woman-sitting-on-the-phone.json'
import Projects from './components/projects/Projects'
import ContactForm from './components/contactform/ContactForm'
import './App.scss'

function App() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="wrapper">
          <h2>Hello! I am Eva-Lavinia Bucur!</h2>
          <Lottie animationData={animationData} style={{ maxWidth: '50rem', margin: 'auto' }} />
        </div>
      </section>

      <section id="about">
        <div className="wrapper">
          <h2>About myself</h2>
          <p>I am a self-taught Full Stack developer with a passion for web development. Proficient 
          in JavaScript, React, Redux, CSS3, HTML5, Ruby, Ruby on Rails, and SQL, I constantly seek 
          new technologies and strive to deliver clean, efficient, and maintainable code. I have 
          experience as a freelancer, developing customized solutions and mentoring junior developers. 
          With a strong drive for continuous learning, I stay updated with industry best practices and 
          patterns. Let's collaborate on impactful projects and create remarkable digital experiences 
          together.</p>
        </div>
      </section>

      <section id="projects">
        <div className="wrapper">
          <h2>Projects</h2>
          <p>Here are a couple of the projects I have been working on:</p>
          <p>Did you know? You can filter the projects by pressing on a tag.</p>
          <Projects />
        </div>
      </section>

      <section id="contact">
        <div className="wrapper">
          <h2>Get in contact with me!</h2>
          <p>I am always on the lookout for interesting people which I can collaborate with.
          Get in touch with me using the form below or the socials links provided!</p>

          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default App
