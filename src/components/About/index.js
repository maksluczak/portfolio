import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters, { useLetterClass } from '../AnimatedLetters'
import Cube from './Cube'
import { about, certificates, education, experience, profile, projects, skills } from '../../data'

const sections = [
  { id: 'about', label: 'About me' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

const contactInfo = [
  { label: 'Name', value: profile.fullName },
  { label: 'Status', value: profile.status },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
]

const Section = ({ id, title, children }) => (
  <section id={id} className="about-block">
    <h2>{title}</h2>
    {children}
  </section>
)

const TagsList = ({ items }) => (
  <ul className="tags-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const About = () => {
  const letterClass = useLetterClass()

  return (
    <div className="container about-page">
      <div className="about-content">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} text="Why hire me?" idx={10} />
        </h1>
        <p className="page-intro">{about.pitch}</p>

        <nav className="section-nav">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <Section id="about" title="About me">
          <p>{about.bio}</p>
          <dl className="info-grid">
            {contactInfo.map(({ label, value, href }) => (
              <div key={label} className="card">
                <dt>{label}</dt>
                <dd>{href ? <a href={href}>{value}</a> : value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company}>
                <span className="meta">
                  {job.period} · {job.place}
                </span>
                <h3>{job.role}</h3>
                <span className="subtitle">{job.company}</span>
                <ul className="points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <TagsList items={job.tech} />
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <p>
            A few of my projects - for more, visit my{' '}
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
          <div className="cards">
            {projects.map((project) => (
              <article key={project.name} className="card project-card">
                <header>
                  <h3>{project.name}</h3>
                  <div className="card-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo" title="Live demo">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label="Source code" title="Source code">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </header>
                <p>{project.description}</p>
                <TagsList items={project.tech} />
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="cards">
            {skills.map(({ category, items }) => (
              <div key={category} className="card">
                <h3>{category}</h3>
                <TagsList items={items} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education & certificates">
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.title}>
                <span className="meta">{item.period}</span>
                <h3>{item.title}</h3>
                <span className="subtitle">{item.place}</span>
              </li>
            ))}
            {certificates.map((item) => (
              <li key={item.title}>
                <span className="meta badge">{item.status}</span>
                <h3>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </h3>
                <span className="subtitle">{item.place}</span>
              </li>
            ))}
          </ol>
        </Section>
      </div>
      <Cube />
    </div>
  )
}

export default About
