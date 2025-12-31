import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'

const ProjectSection = ({activeSection, setActiveSection}) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, []);

  const content = [
    {
      name: 'AllerNote',
      description: 'A three-tier application for allergy management: <b>Next.js</b> frontend for tracking pollen intensity and symptoms, <b>Express</b> backend handling API logic and authentication, <b>MongoDB</b> database storing user data, notes and history.',
      link: 'https://github.com/maksluczak/aller-note-2.0',
    },
    {
      name: 'Snake in Java',
      description: 'A simple window-based <b>Java</b> Snake game built with <b>Swing</b>, featuring keyboard controls, dynamic movement, collision detection, and a scoring system.',
      link: 'https://github.com/maksluczak/snake-java',
    },
    {
      name: 'E-Commerce App',
      description: 'A three-tier e-commerce application built with <b>Next.js</b> and TypeScript, <b>Express</b>, and <b>MongoDB</b> for data storage. Integrated with Stripe API to simulate secure payments.',
      link: 'https://github.com/KISiM-AGH/projekt-zaliczeniowy-ii-2025-kacyki',
    },
    {
      name: 'File Upload App',
      description: 'A full-stack application built with <b>React</b> on the frontend and <b>Spring Boot</b> on the backend, featuring a REST API for file uploads to Amazon S3.',
      link: '#',
    },
  ];

  return (
    <div className="projects-section">
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['M','y',' ','p','r','o','j','e','c','t','s']}
          idx={10}
        />
      </h1>
      <p>
        Here are a few of my projects - for more, feel free to visit my{" "}
        <a
        href="https://github.com/maksluczak"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
        >
          GitHub
        </a>.
      </p>

      <div className="projects-list">
        {content.map((item, idx) => (
          <div key={idx} className={`project-card card-${idx}`}>
            <div className="card-header">
              <h2>{item.name}</h2>
              <a className='project-link' href={item.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className='project-description' dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </div>
        ))}
      </div>

      <div className="return-button" onClick={() => setActiveSection('main')}>RETURN</div>
    </div>
  )
}

export default ProjectSection
