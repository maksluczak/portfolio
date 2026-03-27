import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import MyImage from './MyImage'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['M', 'a', 'k', 's', 'y', 'm', 'i', 'l', 'i', 'a', 'n']

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m&nbsp;</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <h2>
          AGH University Of Krakow Student / Software Developer <br />
          Java, C#, JavaScript, TypeScript, Python, C/C++
        </h2>
        <p>
          Third-year Computer Science student at AGH University specializing in backend development, distributed systems, and API design. Experienced in building applications with Java, Spring Boot, and .NET, including event-driven architectures with RabbitMQ. Seeking an Internship or Junior Backend Developer role.
        </p>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <MyImage />
    </div>
  )
}

export default Home
