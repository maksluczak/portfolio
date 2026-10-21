import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { profile } from '../../data'

const navItems = [
  { to: '/', icon: faHome, label: 'Home' },
  { to: '/about', icon: faUser, label: 'About' },
  { to: '/contact', icon: faEnvelope, label: 'Contact' },
]

const socialLinks = [
  { href: profile.links.linkedin, icon: faLinkedin, label: 'LinkedIn' },
  { href: profile.links.github, icon: faGithub, label: 'GitHub' },
]

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      {navItems.map(({ to, icon, label }) => (
        <NavLink key={to} to={to} end aria-label={label} title={label}>
          <FontAwesomeIcon icon={icon} />
        </NavLink>
      ))}
    </nav>
    <ul>
      {socialLinks.map(({ href, icon, label }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
            <FontAwesomeIcon icon={icon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Sidebar
