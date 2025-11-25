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
      description: 'A three-tier application for allergy management: Next.js frontend for tracking pollen intensity and symptoms, Express backend handling API logic and authentication, MongoDB database storing user data, notes and history.',
      link: '#',
    },
    {
      name: 'Snake in Java',
      description: 'A simple window-based Java Snake game built with Swing, featuring keyboard controls, dynamic movement, collision detection, and a scoring system.',
      link: '#',
    },
    {
      name: 'E-Commerce App',
      description: 'A three-tier e-commerce application built with Next.js (frontend) and TypeScript, Express/Node.js (backend), and MongoDB for data storage. Integrated with Stripe API to simulate secure payments.',
      link: '#',
    },
    {
      name: 'File Upload App',
      description: 'A full-stack application built with React on the frontend and Spring Boot on the backend, featuring a REST API for file uploads to Amazon S3.',
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

      <div className="projects-list">
        {content.map((project, idx) => (
          <div key={idx} className={`project-card card-${idx}`}>
            <div className="card-header">
              <h2>{project.name}</h2>
              <a className='project-link' href={project.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <div className="return-button" onClick={() => setActiveSection('main')}>RETURN</div>
    </div>
  )
}

export default ProjectSection
