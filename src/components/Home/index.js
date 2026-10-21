import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters, { useLetterClass } from '../AnimatedLetters'
import MyImage from './MyImage'
import { home, profile } from '../../data'

const Home = () => {
  const letterClass = useLetterClass()

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} text="Hi," idx={10} />
          <br />
          <AnimatedLetters letterClass={letterClass} text={`I'm ${profile.firstName}`} idx={13} />
        </h1>
        <h2>
          {home.headline}
          <br />
          {home.languages}
        </h2>
        <p className="page-intro">{home.intro}</p>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <MyImage />
    </div>
  )
}

export default Home
