import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'

const MainSection = ({activeSection, setActiveSection}) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, []);

  return (
    <>
      <div className="main-section">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['W', 'h', 'y', ' ', 'h', 'i', 'r', 'e', ' ', 'm', 'e', '?']}
            idx={10}
          />
        </h1>
        <p>
          I’m a third-year Computer Science student with a solid foundation in software development and a
          genuine passion for learning. I’m dedicated to every new challenge and always eager to explore
          new technologies. I’m looking for an opportunity to contribute, grow, and bring fresh ideas to the team.
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
  );
}

export default MainSection;