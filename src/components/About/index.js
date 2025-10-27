import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import InfoCard from './InfoCard'
import Cube from '../Home/Cube'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [activeSection, setActiveSection] = useState('about')
  const [showCard, setShowCard] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, [])

  const handleSectionChange = (section) => {
    if (section === activeSection) return
    setShowCard(false)
    setTimeout(() => {
      setActiveSection(section)
      setShowCard(true)
    }, 300)
  }

  const sections = {
    about: {
      title: ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'],
      description:
        'Got your girlfriend screenin all the calls She bubblin, we fuckin, then you cuddlin Like, baby, where the fuck you been? Dont wanna tell you she in love with him',
      content: [
        { fieldName: 'Name', fieldValue: 'MAKSYMILIAN ŁUCZAK' },
        { fieldName: 'Phone', fieldValue: '(+48) 739 041 228' },
        { fieldName: 'State', fieldValue: 'COMPUTER SCIENCE MAJOR STUDENT' },
        { fieldName: 'Email', fieldValue: 'MAKSLUCZAK99@GMAIL.COM' },
      ],
    },

    education: {
      title: ['M', 'y', ' ', 'e', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'],
      description:
        'So, so we aint sayin nothin You could probably tell she bluffin Cause she kiss you with the mouth She gave me head with my concussion',
      content: [
        { institution: 'AGH University of Cracow', duration: '2023 - now' },
        { institution: 'B2 First (FCE)', duration: '2022' },
        {
          institution: 'Coursera IBM Introduction To Software Engineering',
          duration: '2025',
        },
        {
          institution: 'Coursera Microsoft Python \nDevelopment',
          duration: '2025',
        },
      ],
    },

    projects: {
      title: ['M', 'y', ' ', 'p', 'r', 'o', 'j', 'e', 'c', 't', 's'],
      description: '...',
      content: [
        {
          name: 'AllerNote',
          description: '',
          link: 'https://github.com/maksluczak/AllerNote2.0',
        },
        {
          name: 'Snake',
          description: '',
          link: 'https://github.com/maksluczak/SnakeJAVA',
        },
        {
          name: 'GymWebApp',
          description: '',
          link: 'https://github.com/maksluczak/GymWebApp',
        },
      ],
    },
    skills: {
      title: ['M', 'y', ' ', 's', 'k', 'i', 'l', 'l', 's'],
      description: '...',
      content: 'cube',
    },
  }

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'W',
              'h',
              'y',
              ' ',
              'h',
              'i',
              'r',
              'e',
              ' ',
              'm',
              'e',
              '?',
            ]}
            idx={14}
          />
        </h1>
        <p>
          Wanna get a mansion, a jacuzzi A theater to watch my movies Couple
          whips and lots of fancy things The kids they call the Goonies I see
          the future, crystal ball Mirror mirror hangin' on the wall
        </p>

        {['about', 'education', 'projects', 'skills'].map((section) => (
          <div
            key={section}
            className={`flat-button ${
              activeSection === section ? 'active' : ''
            }`}
            onClick={() => handleSectionChange(section)}
          >
            {section === 'about' && 'ABOUT ME'}
            {section === 'education' && 'MY EDUCATION'}
            {section === 'projects' && 'MY PROJECTS'}
            {section === 'skills' && 'MY SKILLS'}
          </div>
        ))}
      </div>

      <div className="card-zone">
        {activeSection === 'skills' ? (
          <Cube />
        ) : (
          <InfoCard key={activeSection} item={sections[activeSection]} />
        )}
      </div>
    </div>
  )
}

export default About
