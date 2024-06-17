'use client'

import Header from './components/header'
import Start from './components/start'
import Projects from './components/projects'
import About from './components/about'
import Contact from './components/contact'

export default function Home() {
  return (
    <div className="w-full flex flex-col relative bg-primary-dark">
      <Header />
      <Start />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}
