import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { profile } from '../../data'

const socials = [
  { href: profile.links.github, icon: faGithub, label: 'GitHub' },
  { href: profile.links.linkedin, icon: faLinkedin, label: 'LinkedIn' },
  { href: profile.links.facebook, icon: faFacebook, label: 'Facebook' },
]

const Footer = () => (
  <footer className="site-footer">
    <div className="wrapper">
      <span className="mono">
        © {new Date().getFullYear()} {profile.fullName}
      </span>
      <ul>
        {socials.map(({ href, icon, label }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <FontAwesomeIcon icon={icon} />
            </a>
          </li>
        ))}
      </ul>
      <a href="#top" className="mono back-to-top">
        Back to top <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  </footer>
)

export default Footer
