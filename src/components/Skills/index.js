import './index.scss'
import Section from '../Section'
import { skills } from '../../data'

const Skills = () => (
  <Section id="skills" index="04" title="Skills & tools">
    <div className="skill-grid">
      {skills.map(({ category, items }) => (
        <div key={category} className="skill-group" data-reveal>
          <h3>{category}</h3>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
)

export default Skills
