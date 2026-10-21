import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { profile } from '../../../data'

const contacts = [
  { icon: faFacebook, link: profile.links.facebook, label: 'Facebook' },
  { icon: faLinkedin, link: profile.links.linkedin, label: 'LinkedIn' },
  { icon: faGithub, link: profile.links.github, label: 'GitHub' },
]

const animationDuration = 12

const ContactRotation = () => (
  <div className="contact-rotation-container">
    {contacts.map(({ icon, link, label }, index) => (
      <a
        key={label}
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="rotation-item"
        style={{ animationDelay: `-${(index * animationDuration) / contacts.length}s` }}
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    ))}
  </div>
)

export default ContactRotation
