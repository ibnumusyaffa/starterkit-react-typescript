import React, { useEffect } from 'react'

export function useTheme() {
  const [theme, _setTheme] = React.useState('')

  useEffect(() => {
    const preferredTheme = localStorage.getItem('theme')
    if (preferredTheme !== null) {
      _setTheme(preferredTheme)
    }
  }, [])

  function setTheme(newTheme: string) {
    localStorage.setItem('theme', newTheme)
    document.body.className = newTheme
    _setTheme(newTheme)
  }

  return { setTheme, theme }
}
