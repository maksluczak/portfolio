import './index.scss'
import { useState }  from 'react'
import MainSection from './MainSection'
import AboutSection from './AboutSection'

const About = () => {
  const [activeSection, setActiveSection] = useState('main')

  // const sections = {
  //   about: {
  //     title: ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'],
  //     description:
  //       'Got your girlfriend screenin all the calls She bubblin, we fuckin, then you cuddlin Like, baby, where the fuck you been? Dont wanna tell you she in love with him',
  //     content: [
  //       { fieldName: 'Name', fieldValue: 'MAKSYMILIAN ŁUCZAK' },
  //       { fieldName: 'Phone', fieldValue: '(+48) 739 041 228' },
  //       { fieldName: 'State', fieldValue: 'COMPUTER SCIENCE MAJOR STUDENT' },
  //       { fieldName: 'Email', fieldValue: 'MAKSLUCZAK99@GMAIL.COM' },
  //     ],
  //   },
  //
  //   education: {
  //     title: ['M', 'y', ' ', 'e', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'],
  //     description:
  //       'So, so we aint sayin nothin You could probably tell she bluffin Cause she kiss you with the mouth She gave me head with my concussion',
  //     content: [
  //       { institution: 'AGH University of Cracow', duration: '2023 - now' },
  //       { institution: 'B2 First (FCE)', duration: '2022' },
  //       {
  //         institution: 'Coursera IBM Introduction To Software Engineering',
  //         duration: '2025',
  //       },
  //       {
  //         institution: 'Coursera Microsoft Python \nDevelopment',
  //         duration: '2025',
  //       },
  //     ],
  //   },
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
