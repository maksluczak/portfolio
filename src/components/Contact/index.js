import './index.scss'
import { useRef, useState } from 'react'
import emailJS from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Section from '../Section'
import { profile } from '../../data'

const statusMessages = {
  sending: 'Sending...',
  sent: 'Message sent - thank you! I’ll get back to you soon.',
  error: 'Something went wrong. Please try again or email me directly.',
}

const Contact = () => {
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
    <Section id="contact" index="05" title="Let’s work together">
      <div className="contact-grid">
        <div className="contact-copy" data-reveal>
          <p>
            I’m looking for an internship or a junior role in backend, AI, cloud or DevOps, where I can grow and
            contribute to real projects. Feel free to reach out - I’d love to connect.
          </p>
          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email}
          </a>
        </div>
        <form ref={refForm} onSubmit={sendEmail} className="contact-form" data-reveal>
          <label>
            <span className="mono">Name</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span className="mono">Email</span>
            <input type="email" name="email" required />
          </label>
          <label className="full">
            <span className="mono">Subject</span>
            <input type="text" name="subject" required />
          </label>
          <label className="full">
            <span className="mono">Message</span>
            <textarea name="message" rows="4" required />
          </label>
          <div className="form-footer full">
            <span className={`form-status ${status}`} role="status">
              {statusMessages[status]}
            </span>
            <button type="submit" className="btn primary" disabled={status === 'sending'}>
              Send message <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>
      </div>
    </Section>
  )
}

export default Contact
