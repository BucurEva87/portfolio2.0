import Header from './components/header/Header'
import Lottie from 'lottie-react'
import animationData from './assets/woman-sitting-on-the-phone.json'
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

      <section>
        <div className="wrapper">
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Eos rem accusantium vitae magnam quaerat beatae reprehenderit 
          <p>distinctio laborum ullam repellat molestias adipisci quis ut consequuntur, in assumenda temporibus inventore autem!</p>
          Amet fugiat ipsum distinctio hic possimus assumenda tenetur earum dolore eligendi vero non magni cum, corrupti facere eveniet 
          impedit odit sapiente quae nesciunt laboriosam deleniti nobis accusantium reiciendis inventore eius. Alias praesentium 
          possimus hic inventore soluta non cupiditate veritatis aut nam quod provident, nobis quidem.</p>
          <p>Labore, cumque quia dolor enim tempore ea alias incidunt quo unde corporis beatae eum vel, consectetur quis quibusdam 
          quas, inventore iste perferendis nulla magnam nobis recusandae, autem earum fuga culpa. Eius quod nam nemo, corrupti 
          deleniti omnis! Autem possimus exercitationem, odit amet delectus impedit voluptates beatae, quo, doloremque animi 
          temporibus fuga nemo obcaecati aperiam repudiandae itaque ipsa, minima corporis labore vitae.</p>
        </div>
      </section>

      <section>
        <div className="wrapper">
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Eos rem accusantium vitae magnam quaerat beatae reprehenderit 
          <p>distinctio laborum ullam repellat molestias adipisci quis ut consequuntur, in assumenda temporibus inventore autem!</p>
          Amet fugiat ipsum distinctio hic possimus assumenda tenetur earum dolore eligendi vero non magni cum, corrupti facere eveniet 
          impedit odit sapiente quae nesciunt laboriosam deleniti nobis accusantium reiciendis inventore eius. Alias praesentium 
          possimus hic inventore soluta non cupiditate veritatis aut nam quod provident, nobis quidem.</p>
          <p>Labore, cumque quia dolor enim tempore ea alias incidunt quo unde corporis beatae eum vel, consectetur quis quibusdam 
          quas, inventore iste perferendis nulla magnam nobis recusandae, autem earum fuga culpa. Eius quod nam nemo, corrupti 
          deleniti omnis! Autem possimus exercitationem, odit amet delectus impedit voluptates beatae, quo, doloremque animi 
          temporibus fuga nemo obcaecati aperiam repudiandae itaque ipsa, minima corporis labore vitae.</p>
        </div>
      </section>

      <section>
        <div className="wrapper">
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Eos rem accusantium vitae magnam quaerat beatae reprehenderit 
          <p>distinctio laborum ullam repellat molestias adipisci quis ut consequuntur, in assumenda temporibus inventore autem!</p>
          Amet fugiat ipsum distinctio hic possimus assumenda tenetur earum dolore eligendi vero non magni cum, corrupti facere eveniet 
          impedit odit sapiente quae nesciunt laboriosam deleniti nobis accusantium reiciendis inventore eius. Alias praesentium 
          possimus hic inventore soluta non cupiditate veritatis aut nam quod provident, nobis quidem.</p>
          <p>Labore, cumque quia dolor enim tempore ea alias incidunt quo unde corporis beatae eum vel, consectetur quis quibusdam 
          quas, inventore iste perferendis nulla magnam nobis recusandae, autem earum fuga culpa. Eius quod nam nemo, corrupti 
          deleniti omnis! Autem possimus exercitationem, odit amet delectus impedit voluptates beatae, quo, doloremque animi 
          temporibus fuga nemo obcaecati aperiam repudiandae itaque ipsa, minima corporis labore vitae.</p>
        </div>
      </section>
    </>
  )
}

export default App
