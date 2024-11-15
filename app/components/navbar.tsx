import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className="w-10 h-5 flex flex-col items-start justify-between cursor-pointer"
      onClick={toggleMenu}
    >
      <div
        className={`w-10 h-1 bg-white rounded transition-transform duration-300 transform ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-white rounded transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-white rounded transition-transform duration-300 transform ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></div>
    </div>
  )
}

export default Navbar
