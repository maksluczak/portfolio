import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useActiveSection, useTheme } from '../../hooks'
import { profile } from '../../data'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const sectionIds = navItems.map(({ id }) => id)

const Header = () => {
  const [theme, toggleTheme] = useTheme()
  const active = useActiveSection(sectionIds)

  return (
    <header className="site-header">
      <div className="wrapper">
        <a href="#top" className="wordmark">
          <span className="wordmark-dot" aria-hidden="true" />
          {profile.fullName}
        </a>
        <nav aria-label="Sections">
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>
      </div>
    </header>
  )
}

export default Header
