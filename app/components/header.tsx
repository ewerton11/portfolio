import Link from 'next/link'
import DarkThemeIcon from '@/public/DarkThemeIcon'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const handleSmoothScroll = (e: any) => {
      const targetId = e.target.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <header className="w-full h-20 sticky top-0 z-50">
      <div className="relative w-full h-full">
        <div className="absolute left-[10%] h-full flex items-center">
          <h1 className="pb-2 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-robotoMono font-bold">
            <Link href="#start">er.</Link>
          </h1>
        </div>
        <div className="absolute right-[10%] h-full flex items-center">
          <nav className="h-full">
            <ul className="h-full flex items-center text-base md:text-xl font-roboto font-medium">
              <li className="p-2 md:p-3 hover:text-gray-200">
                <Link href="#projects">Projeto</Link>
              </li>
              <li className="p-2 md:p-3 hover:text-gray-200">
                <Link href="#about">Sobre</Link>
              </li>
              <li className="p-2 md:p-3 hover:text-gray-200">
                <Link href="#contact">Contato</Link>
              </li>
            </ul>
          </nav>
          <div className="w-7 sm:w-8 md:w-9 lg:w-10 h-full ml-2 sm:ml-1 cursor-pointer flex justify-center items-center">
            <DarkThemeIcon />
          </div>
        </div>
      </div>
    </header>
  )
}
