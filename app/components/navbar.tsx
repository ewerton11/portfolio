import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className="w-9 h-7 flex flex-col items-center justify-between cursor-pointer space-y-2"
      onClick={toggleMenu}
    >
      {/* Barra superior */}
      <div
        className={`w-full h-1 bg-white rounded transition-transform duration-300 transform ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      ></div>
      {/* Barra do meio */}
      <div
        className={`w-full h-1 bg-white rounded transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></div>
      {/* Barra inferior */}
      <div
        className={`w-full h-1 bg-white rounded transition-transform duration-300 transform ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></div>
    </div>
  )
}

export default Navbar
