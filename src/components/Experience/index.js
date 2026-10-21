import './index.scss'
import Section from '../Section'
import { certificates, education, experience } from '../../data'

const Experience = () => (
  <Section id="experience" index="02" title="Experience">
    <ol className="roles">
      {experience.map((job) => (
        <li key={job.company} className="role" data-reveal>
          <div className="role-meta mono">
            <span>{job.period}</span>
            <span>{job.place}</span>
          </div>
          <div className="role-body">
            <h3>{job.role}</h3>
            <span className="company">{job.company}</span>
            <ul className="points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="chips">
              {job.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>

    <h3 className="subhead" data-reveal>
      Education & certificates
    </h3>
    <ul className="education" data-reveal>
      {education.map((item) => (
        <li key={item.title}>
          <span className="mono">{item.period}</span>
          <strong>{item.title}</strong>
          <span>{item.place}</span>
        </li>
      ))}
      {certificates.map((item) => (
        <li key={item.title}>
          <span className="mono">{item.period}</span>
          <strong>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </strong>
          <span>{item.place}</span>
        </li>
      ))}
    </ul>
  </Section>
)

export default Experience
