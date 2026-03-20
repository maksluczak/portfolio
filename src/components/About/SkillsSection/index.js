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
    { category: 'Programming Languages', list: 'Java, JavaScript, TypeScript, <br/>Python, C/C++' },
    { category: 'Frameworks & Libraries', list: 'Node.js, Express, React, Next.js, <br/>Spring Boot' },
    { category: 'Software Development Tools', list: 'DevOps practices, Git, Docker, Linux, <br/>REST API Design, AWS (S3), OOP' },
    { category: 'Databases', list: 'PostgreSQL, MySQL, MongoDB, <br/>Prisma ORM' },
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
          Third-year Technical Computer Science student interested in backend development, REST APIs, and databases. I enjoy learning new technologies and applying clean code principles in practice.
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