import { useEffect, useState } from 'react'

const readStoredTheme = () => {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

// Light/dark theme: follows the system until the visitor picks one explicitly.
export const useTheme = () => {
  const [theme, setTheme] = useState(
    () => readStoredTheme() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return [theme, toggleTheme]
}

// Fades in every [data-reveal] element the first time it scrolls into view.
export const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }),
      { rootMargin: '0px 0px -10% 0px' }
    )

    document.documentElement.classList.add('js-reveal')
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// Returns the id of the section currently in the middle of the viewport.
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}
