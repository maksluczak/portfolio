import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'

const SkillsSection = ({activeSection, setActiveSection}) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, []);

  const content = [
    { category: 'Programming Languages', list: 'Java, JavaScript, Python, C/C++' },
    { category: 'Frameworks & Libraries', list: 'Node.js, Express, React, Spring Boot' },
    { category: 'Software Development', list: 'REST API, Design Patterns,<br/>Clean Code, OOP' },
    { category: 'Databases & Tools', list: 'MySQL, PostgreSQL, MongoDB,<br/>Git, Docker, Linux' },
  ];

  return (
    <>
      <div className="skills-section">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 's', 'k', 'i', 'l', 'l', 's']}
            idx={10}
          />
        </h1>
        <p>
          I focus on building scalable applications using modern technologies and best practices in software architecture and clean code.
        </p>
        <div className='info-container'>
          {content.map((item, index) => (
            <div key={index} className={`info-item item-${index}`}>
              <h2 dangerouslySetInnerHTML={{ __html: item.category }} />
              <strong dangerouslySetInnerHTML={{ __html: item.list }} />
            </div>
          ))}
        </div>

        <div className="return-button" onClick={() => setActiveSection('main')}>RETURN</div>
      </div>
    </>
  );
}

export default SkillsSection;