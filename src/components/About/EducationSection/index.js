import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'

const EducationSection = ({activeSection, setActiveSection}) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, []);

  const content = [
    { institution: 'AGH Technical Computer Science', duration: '2023 - now' },
    { institution: 'B2 First (FCE)', duration: '2022' },
    { institution: 'Coursera IBM JavaScript Backend<br/>Developer', duration: '2025 - now' },
    { institution: 'Coursera Microsoft Python<br/>Development', duration: '2025 - now' },
  ];

  return (
    <>
      <div className="education-section">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'e', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
            idx={10}
          />
        </h1>
        <p>
          My educational background combines academic studies with international certifications and continuous skill development.
        </p>
        <div className='info-container'>
          {content.map((item, index) => (
            <div key={index} className={`info-item item-${index}`}>
              <h2 dangerouslySetInnerHTML={{ __html: item.institution }} />
              <strong>{item.duration}</strong>
            </div>
          ))}
        </div>

        <div className="return-button" onClick={() => setActiveSection('main')}>RETURN</div>
      </div>
    </>
  );
}

export default EducationSection;