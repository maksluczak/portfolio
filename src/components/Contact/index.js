import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, []);

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
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="Name" required/>
            </li>
            <li className="half">
              <input type="text" name="email" placeholder="Email" required/>
            </li>
            <li>
              <input type="text" name="subject" placeholder="Subject" required/>
            </li>
            <li>
              <textarea name="message" placeholder="Message" required/>
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact