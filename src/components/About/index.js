import './index.scss'
import { useState }  from 'react'
import MainSection from './MainSection'
import AboutSection from './AboutSection'
import EducationSection from './EducationSection'

const About = () => {
  const [activeSection, setActiveSection] = useState('main')

  console.log(activeSection);

  //
  //   projects: {
  //     title: ['M', 'y', ' ', 'p', 'r', 'o', 'j', 'e', 'c', 't', 's'],
  //     description: '...',
  //     content: [
  //       {
  //         name: 'AllerNote',
  //         description: '',
  //         link: 'https://github.com/maksluczak/AllerNote2.0',
  //       },
  //       {
  //         name: 'Snake',
  //         description: '',
  //         link: 'https://github.com/maksluczak/SnakeJAVA',
  //       },
  //       {
  //         name: 'GymWebApp',
  //         description: '',
  //         link: 'https://github.com/maksluczak/GymWebApp',
  //       },
  //     ],
  //   },
  //   skills: {
  //     title: ['M', 'y', ' ', 's', 'k', 'i', 'l', 'l', 's'],
  //     description: '...',
  //     content: 'cube',
  //   },
  // }

  const renderSection = () => {
    switch (activeSection) {
      case 'main': return <MainSection activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'about': return <AboutSection activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'education': return <EducationSection activeSection={activeSection} setActiveSection={setActiveSection} />;
      default: return <MainSection activeSection={activeSection} setActiveSection={setActiveSection} />;
    }
  }

  return (
    <div className="container about-page">
      {renderSection()}
      {/*<MainSection activeSection={activeSection} setActiveSection={setActiveSection} />*/}
    </div>
  )
}

export default About
