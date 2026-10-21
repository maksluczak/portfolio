import './index.scss'
import { useEffect, useState } from 'react'

// Letters bounce in on mount, then switch to a hover animation.
export const useLetterClass = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => setLetterClass('text-animate-hover'), 4000)
    return () => clearTimeout(timeout)
  }, [])

  return letterClass
}

const AnimatedLetters = ({ letterClass, text, idx }) => (
  <span aria-label={text}>
    {[...text].map((char, i) => (
      <span key={i} aria-hidden="true" className={`${letterClass} _${i + idx}`}>
        {char === ' ' ? ' ' : char}
      </span>
    ))}
  </span>
)

export default AnimatedLetters
