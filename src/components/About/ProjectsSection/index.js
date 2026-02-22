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
      description: 'A three-tier web application for allergy management with a <b>Next.js</b> frontend for tracking pollen intensity and personal symptoms, an <b>Express.js</b> backend handling authentication and API logic, and a <b>MongoDB</b> database storing user data, notes, and history. Deployed the frontend on <b>Vercel</b> and backend on <b>Render</b>, implementing secure cookies, CORS, and production-ready configurations.',
      link: 'https://github.com/maksluczak/aller-note-2.0',
    },
    {
      name: 'Fullstack PDF Toolset',
      description: 'A web application built using <b>React and TypeScript</b>  with a <b>Spring Boot</b>  backend that enables real-time PDF generation and ZIP compression without disk storage. The backend is stateless, implemented in <b>Java</b> , and processes files fully in memory using I/O streams for better performance and data security. The application was containerized with Docker and deployed on <b>Vercel</b>  and <b>Render</b> .',
      link: 'https://github.com/maksluczak/pdf-tools',
    },
    {
      name: 'E-Commerce App',
      description: 'Full-stack application built with <b>Next.js</b> and <b>Express</b> + <b>TypeScript</b>, utilizing <b>Prisma ORM with a PostgreSQL</b> database. Managed using <b>Docker</b> to ensure consistent database setups. Implemented a backend architecture featuring JWT-based authentication, Multer for image processing, and a complex product variant system.',
      link: 'https://github.com/maksluczak/making-e-commerce',
    },
    {
      name: 'Employee Management System',
      description: 'Backend REST API built with <b>Java and Spring Boot</b>, implementing JWT-based authentication with role-based access control. DTO-based architecture, validation, and secure endpoints. The application is integrated with a <b>PostgreSQL</b> database running in <b>Docker</b>.',
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
