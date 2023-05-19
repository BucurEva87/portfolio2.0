import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import ContactForm from './components/contactform/ContactForm'
import Footer from './components/footer/Footer'
import './App.scss'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaNodeJs, 
  FaPython, FaPhp, FaReact, FaCube, FaGitAlt } from 'react-icons/fa'
import Ruby from './assets/ruby.svg'  
import Puppeteer from './assets/puppeteer.svg'
import Rails from './assets/ruby-on-rails.svg'
import Redux from './assets/redux.svg'
import Three from './assets/three-dot-js.svg'
import PostgreSQL from './assets/postgresql.svg'
import Jest from './assets/jest.svg'
import Mocha from './assets/mocha.svg'

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="projects">
        <div className="wrapper">
          <h2>Projects</h2>
          <p>Here are a couple of the projects I have been working on:</p>
          <p>Did you know? You can filter the projects by pressing on a tag.</p>
          <Projects />
        </div>
      </section>

      <section id="about">
        <div className="wrapper">
          <h2>About myself</h2>
          <p>I am a self-taught Full Stack developer with a passion for web development. 
          Proficient in JavaScript, React, Redux, CSS3, HTML5, Ruby, Ruby on Rails, and SQL. 
          I constantly seek new technologies and strive to deliver clean, efficient, and maintainable code. 
          I am experienced as a freelancer, developing customized solutions and mentoring junior developers. 
          With a strong drive for continuous learning, I stay updated with industry best practices and patterns. 
          Let's collaborate on impactful projects and create remarkable digital experiences together!</p>
        </div>
      </section>

      <section id="skills">
        <div className="wrapper">
          <h2>Skills</h2>
          <h3>Languages</h3>
          <ul>
            <li className="html5">
              <FaHtml5 />
              <h4>HTML5</h4>
            </li>
            <li className="css3">
              <FaCss3Alt />
              <h4>CSS3</h4>
            </li>
            <li className="sass">
              <FaSass />
              <h4>SASS</h4>
            </li>
            <li className="javascript">
              <FaJsSquare />
              <h4>JavaScript</h4>
            </li>
            <li className="node">
              <FaNodeJs />
              <h4>Node.js</h4>
            </li>
            <li className="ruby">
              <object data={Ruby} />
              <h4>Ruby</h4>
            </li>
            <li className="python">
              <FaPython />
              <h4>Python</h4>
            </li>
            <li className="php">
              <FaPhp />
              <h4>PHP</h4>
            </li>
          </ul>
          <h3>Frameworks</h3>
          <ul>
            <li className="react">
              <FaReact />
              <h4>React.js</h4>
            </li>
            <li className="redux">
              <object data={Redux} />
              <h4>Redux.js</h4>
            </li>
            <li className="rails">
              <object data={Rails} />
              <h4>Ruby on Rails</h4>
            </li>
            <li className="react-native">
              <FaReact />
              <h4>React native</h4>
            </li>
          </ul>
          <h3>Tools</h3>
          <ul>
            <li className="three">
              <object data={Three} />
              <h4>Three.js</h4>
            </li>
            <li className="postgresql">
              <object data={PostgreSQL} />
              <h4>PostgreSQL</h4>
            </li>
            <li className="puppeteer">
              <object data={Puppeteer} />
              <h4>Puppeteer</h4>
            </li>
            <li className="git">
              <FaGitAlt />
              <h4>Git</h4>
            </li>
            <li className="jest">
              <object data={Jest} />
              <h4>Jest</h4>
            </li>
            <li className="mocha">
              <object data={Mocha} />
              <h4>Mocha</h4>
            </li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="wrapper">
          <h2>Let's get in touch!</h2>
          <p>I am always looking for interesting people which I can collaborate with.
          Get in touch with me using the form below or the socials links provided!</p>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
