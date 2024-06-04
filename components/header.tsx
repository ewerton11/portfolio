import Link from 'next/link'
import DarkThemeIcon from '@/public/DarkThemeIcon'
import { useEffect } from 'react'

const Header = () => {
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
    <header className="w-full h-20 sticky top-0 z-50 flex">
      <div className="relative w-full h-full">
        <div className="absolute left-[10%] h-full flex justify-center items-center">
          <h1 className="text-2xl sm:text-5xl text-text-offWhite font-robotoMono font-bold">
            <Link href="#start">er.</Link>
          </h1>
        </div>
        <div className="absolute right-[10%] flex w-auto h-full items-center">
          <nav className="w-11/12">
            <ul className="h-full flex items-cente font-roboto text-sm sm:text-xl">
              <li className="p-2 sm:p-5 hover:text-mode-dark">
                <Link href="#projects">Projeto</Link>
              </li>
              <li className="p-2 sm:p-5 hover:text-mode-dark">
                <Link href="#about">Sobre</Link>
              </li>
              <li className="p-2 sm:p-5 hover:text-mode-dark">
                <Link href="#contact">Contato</Link>
              </li>
            </ul>
          </nav>
          <div className="w-7 sm:w-10 h-full flex justify-center items-center ml-2 sm:ml-1 cursor-pointer">
            <DarkThemeIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
