import React from 'react'

interface ThemeProps {
  color?: string
}

const DarkThemeIcon: React.FC<ThemeProps> = ({ color = '#ffffff' }) => {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill={color}>
      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13V2a6 6 0 1 1 0 12z"></path>
    </svg>
  )
}

export default DarkThemeIcon
