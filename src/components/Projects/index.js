import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Section from '../Section'
import { profile, projects } from '../../data'

const Projects = () => (
  <Section id="projects" index="03" title="Selected projects">
    <div className="project-grid">
      {projects.map((project, idx) => (
        <article key={project.name} className="project" data-reveal>
          <div className="project-top">
            <span className="project-number mono">{String(idx + 1).padStart(2, '0')}</span>
            <div className="project-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="arrow-link">
                  Live demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
              <a href={project.link} target="_blank" rel="noreferrer" className="arrow-link">
                <FontAwesomeIcon icon={faGithub} /> Source
              </a>
            </div>
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="chips">
            {project.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
    <a href={profile.links.github} target="_blank" rel="noreferrer" className="arrow-link more-link" data-reveal>
      More on GitHub <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </Section>
)

export default Projects
