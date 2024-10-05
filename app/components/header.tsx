import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Menu from './navbar'
import Navbar from './navbar'

export default function Header() {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/')
  }

  return (
    <header className="w-full h-20 absolute top-0 sm:top-10 md:top-20 z-50">
      <div className="relative w-full h-full">
        <div className="absolute left-[3%] md:left-[6%] h-full flex items-center">
          <h1
            onClick={handleRedirect}
            className="pb-2 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-robotoMono font-bold cursor-pointer"
          >
            er.
          </h1>
        </div>
        <div className="absolute right-[3%] md:right-[6%] h-full flex items-center">
          <div className="w-5 sm:w-6 mr-7 md:mr-10 cursor-pointer flex justify-center items-center">
            <Image
              src="/modo-claro.png"
              width={26}
              height={26}
              alt="modo claro"
              className="w-full h-full object-cover filter brightness-50"
            />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  )
}
