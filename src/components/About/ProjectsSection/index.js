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
      description:
        '– Full-stack Next.js/Express.js tracking app' +
        '<br/>– Auth: JWT, secure cookies & CORS' +
        '<br/>– Flexible MongoDB schema for symptoms/pollen' +
        '<br/>– Deployed on Vercel & Render',
      link: 'https://github.com/maksluczak/aller-note-2.0',
      demo: 'https://aller-note-demo.com', // opcjonalnie
    },
    {
      name: 'Fullstack PDF Toolset',
      description:
        '– Real-time PDF/ZIP tool (React, TS, Spring Boot)' +
        '<br/>– Optimized Java I/O in-memory processing' +
        '<br/>– High security: zero user data stored on disk',
      link: 'https://github.com/maksluczak/pdf-tools',
      demo: 'https://pdf-tools-demo.com',
    },
    {
      name: 'E-Commerce App',
      description:
        '– Advanced Next.js/Express/Prisma store' +
        '<br/>– PostgreSQL & Docker local environment' +
        '<br/>– Product variant system & Multer processing' +
        '<br/>– Secure JWT-based authentication flow',
      link: 'https://github.com/maksluczak/making-e-commerce',
    },
    {
      name: 'Employee Management System',
      description:
        '– Java/Spring Boot REST API (Clean Code)' +
        '<br/>– AWS S3 image storage & AWS SDK integration' +
        '<br/>– Role-Based Access Control & DTO architecture' +
        '<br/>– PostgreSQL isolated in Docker container',
      link: 'https://github.com/maksluczak/employee-management',
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
