import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Cube from '../Cube'
import { home, profile } from '../../data'

const highlights = [
  { label: 'Studies', value: home.studies },
  { label: 'Experience', value: home.experience },
  { label: 'Main stack', value: home.languages },
]

const Hero = () => (
  <section id="top" className="hero">
    <div className="wrapper hero-grid">
      <div className="hero-copy">
        <h1>{profile.fullName}</h1>
        <p className="tagline">{home.tagline}</p>
        <p className="intro">{home.intro}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">
            See my work <FontAwesomeIcon icon={faArrowDown} />
          </a>
          <a href="#contact" className="btn">
            Get in touch
          </a>
          <a href={profile.links.github} className="icon-link" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={profile.links.linkedin} className="icon-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <Cube />
      </div>
    </div>
    <div className="wrapper">
      <dl className="highlights">
        {highlights.map(({ label, value }) => (
          <div key={label}>
            <dt className="mono">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

export default Hero
