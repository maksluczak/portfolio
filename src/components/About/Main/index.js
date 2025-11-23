import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Main = ({activeSection, setActiveSection}) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'W',
              'h',
              'y',
              ' ',
              'h',
              'i',
              'r',
              'e',
              ' ',
              'm',
              'e',
              '?',
            ]}
            idx={14}
          />
        </h1>
        <p>
          Wanna get a mansion, a jacuzzi A theater to watch my movies Couple
          whips and lots of fancy things The kids they call the Goonies I see
          the future, crystal ball Mirror mirror hangin' on the wall
        </p>

        {['about', 'education', 'projects', 'skills'].map((section) => (
          <div
            key={section}
            className={`flat-button ${
              activeSection === section ? 'active' : ''
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section === 'about' && 'ABOUT ME'}
            {section === 'education' && 'MY EDUCATION'}
            {section === 'projects' && 'MY PROJECTS'}
            {section === 'skills' && 'MY SKILLS'}
          </div>
        ))}
      </div>
    </>
  )
}