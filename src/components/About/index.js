import './index.scss'
import Section from '../Section'
import photo from '../../assets/image/me-2.png'
import { about, profile } from '../../data'

const facts = [
  { label: 'Status', value: profile.status },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
]

const About = () => (
  <Section id="about" index="01" title="About me">
    <div className="about-grid">
      <figure className="portrait" data-reveal>
        <img src={photo} alt={profile.fullName} />
      </figure>
      <div className="about-copy" data-reveal>
        <p className="lead">{about.pitch}</p>
        <p>{about.bio}</p>
        <dl className="facts">
          {facts.map(({ label, value, href }) => (
            <div key={label}>
              <dt className="mono">{label}</dt>
              <dd>{href ? <a href={href}>{value}</a> : value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </Section>
)

export default About
