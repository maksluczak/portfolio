import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'

const AboutSection = ({activeSection, setActiveSection}) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, []);

  const content = [
    { fieldName: 'Name', fieldValue: 'MAKSYMILIAN ŁUCZAK' },
    { fieldName: 'Phone', fieldValue: '(+48) 739 041 228' },
    { fieldName: 'State', fieldValue: 'COMPUTER SCIENCE MAJOR STUDENT' },
    { fieldName: 'Email', fieldValue: 'MAKSLUCZAK99<br/>@GMAIL.COM' },
  ];

  return (
    <>
      <div className="about-section">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={10}
          />
        </h1>

        <p>
          I’m a curious and motivated person who loves diving into new ideas - whether in tech or
          beyond. I enjoy working with people, learning from others and improving
          a little every day. In my free time, I explore new interests, read, and tinker with side projects.
        </p>

        <div className='info-container'>
          {content.map((item, index) => (
            <div key={index} className={`info-item item-${index}`}>
              <h2>{item.fieldName}:</h2>
              <strong dangerouslySetInnerHTML={{ __html: item.fieldValue }}></strong>
            </div>
          ))}
        </div>

        <div className="return-button" onClick={() => setActiveSection('main')}>RETURN</div>
      </div>
    </>
  );
}

export default AboutSection;