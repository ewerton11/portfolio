'use client'

import { useEffect, useRef } from 'react'
import Header from './components/header'
import Start from './components/start'
import Projects from './components/projects'
import About from './components/about'
import Contact from './components/contact'
import Pixels from './styles/pixels.module.css'

export default function Home() {
  const pixelContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const pixelContainer = pixelContainerRef.current
    if (!pixelContainer) return

    const numberOfPixels: number = 100

    for (let i = 0; i < numberOfPixels; i++) {
      const pixel = document.createElement('span')
      const pixelSize = Math.floor(Math.random() * 5) + 1

      Object.assign(pixel.style, {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 200}vh`,
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
      })

      if (Math.random() < 0.3) {
        // 0.5 para 50% de chance de adicionar animação
        const directionX = Math.random() > 0.5 ? 100 : -100
        const directionY = Math.random() > 0.5 ? 100 : -100

        Object.assign(pixel.style, {
          animationDuration: `${Math.random() * 120 + 120}s`,
          animationDelay: `${Math.random() * 60}s`,
        })

        pixel.style.setProperty('--x-pixels', `${directionX}vw`)
        pixel.style.setProperty('--y-pixels', `${directionY}vh`)
      }

      pixelContainer.appendChild(pixel)
    }
  }, [])

  return (
    <div className="w-full relative bg-primary-dark main-content">
      {/*  */}
      <Header />
      <div
        className={`${Pixels.pixel} w-full h-auto flex flex-col relative overflow-hidden`}
        ref={pixelContainerRef}
      >
        <Start />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  )
}
