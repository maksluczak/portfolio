import './index.scss'
import { useState }  from 'react'
import MainSection from './MainSection'
import AboutSection from './AboutSection'
import EducationSection from './EducationSection'
import ProjectSection from './ProjectsSection'

const About = () => {
  const [activeSection, setActiveSection] = useState('main')

  console.log(activeSection);

  const renderSection = () => {
    switch (activeSection) {
      case 'main': return <MainSection activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'about': return <AboutSection activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'education': return <EducationSection activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'projects': return <ProjectSection activeSection={activeSection} setActiveSection={setActiveSection} />;
      default: return <MainSection activeSection={activeSection} setActiveSection={setActiveSection} />;
    }
  }

  return (
    <div className="container about-page">
      {renderSection()}
    </div>
  )
}

export default About
