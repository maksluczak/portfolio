import './index.scss'
import { useRef, useState } from 'react'
import emailJS from '@emailjs/browser'
import AnimatedLetters, { useLetterClass } from '../AnimatedLetters'
import ContactRotation from './ContactRotation'

const statusMessages = {
  sending: 'Sending...',
  sent: 'Message sent - thank you! I’ll get back to you soon.',
  error: 'Something went wrong. Please try again or email me directly.',
}

const Contact = () => {
  const letterClass = useLetterClass()
  const refForm = useRef()
  const [status, setStatus] = useState('idle')

  const sendEmail = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailJS.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        refForm.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      refForm.current.reset()
      setStatus('sent')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} text="Contact me" idx={10} />
        </h1>
        <p className="page-intro">
          I’m currently looking for an internship or a junior role in backend, AI, cloud or DevOps, where I can grow
          and contribute to real projects. Feel free to reach out - I’d love to connect and discuss potential
          opportunities.
        </p>
        <form ref={refForm} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Name" aria-label="Name" required />
          <input type="email" name="email" placeholder="Email" aria-label="Email" required />
          <input type="text" name="subject" placeholder="Subject" aria-label="Subject" required className="full" />
          <textarea name="message" placeholder="Message" aria-label="Message" required className="full" />
          <div className="form-footer full">
            <span className={`form-status ${status}`} role="status">
              {statusMessages[status]}
            </span>
            <button type="submit" className="flat-button" disabled={status === 'sending'}>
              SEND
            </button>
          </div>
        </form>
      </div>
      <ContactRotation />
    </div>
  )
}

export default Contact
