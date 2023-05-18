import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './style.scss'

function ContactForm() {
  const [state, handleSubmit] = useForm("myyavapb");
  if (state.succeeded) {
      return <p>Thanks you for your message! I will get back to you as soon as possible!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Just so I can get back to you"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Your message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Speak your mind!"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;