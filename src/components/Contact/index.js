import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import ContactRotation from './ContactRotation'
import emailJS from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailJS
      .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      refForm.current,
      {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      }
    )
      .then(
        () => {
          alert('Message successfully sent!');
          refForm.current.reset();
        },
        (error) => {
          console.error(error);
          alert('Failed to send message!');
        }
      );
  };

  return (
    <div className="conteiner contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm','e']}
            idx={10}
          />
        </h1>
        <p>
          I’m currently seeking a junior position or internship where I can grow my skills and contribute to real projects. Feel free to reach out - I’d love to connect and discuss potential opportunities.
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required/>
              </li>
              <li className="half">
                <input type="text" name="email" placeholder="Email" required/>
              </li>
              <li className="full">
                <input type="text" name="subject" placeholder="Subject" required/>
              </li>
              <li className="full">
                <textarea name="message" placeholder="Message" required/>
              </li>
              <li className="full">
                <input type="submit" className="flat-button" value="SEND"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <ContactRotation />
    </div>
  )
}

export default Contact