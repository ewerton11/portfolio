'use client'

import Image from 'next/image'
import Link from 'next/link'

import Header from './components/header'
import start from './styles/start.module.css'
import writer from './styles/typingAnimation.module.css'

export default function Home() {
  return (
    <div className="w-full relative bg-primary-dark">
      <Header />
      <div className="w-full h-screen flex flex-col items-center" id="start">
        <div className="w-[94%] md:w-[88%] h-full">
          <div className="w-full h-1/2 flex flex-col justify-end">
            <div
              className="w-full flex flex-col text-sm 
            sm:text-base lg:text-xl text-gray-100 font-robotoMono"
            >
              <p className={`${writer.typewriter}`}>
                <span>BEM-VINDO AO MEU PORTFÓLIO!</span>
              </p>
              <p className={`${writer.typewriter} ${writer.delay2}`}>
                <span>
                  AQUI VOCÊ PODE ENCONTRAR OS PROJETOS MAIS RECENTES EM
                </span>
              </p>
              <p className={`${writer.typewriter} ${writer.delay3}`}>
                <span>QUE TENHO TRABALHADO.</span>
              </p>
            </div>
            <div className="h-32 flex items-center">
              <div className="w-3 sm:w-5 mr-3 cursor-pointer flex justify-center items-center">
                <Image
                  src="/seta-direita.png"
                  width={26}
                  height={26}
                  alt="seta"
                  className="w-full h-full object-cover filter brightness-50"
                />
              </div>
              <Link href="pages/work">
                <p className="text-sm sm:text-base lg:text-xl font-robotoMono font-medium">
                  Meus projetos
                </p>
              </Link>
              <div className="w-3 sm:w-5 ml-3 sm:ml-6 mr-3 cursor-pointer flex justify-center items-center">
                <Image
                  src="/seta-direita.png"
                  width={26}
                  height={26}
                  alt="seta"
                  className="w-full h-full object-cover filter brightness-50"
                />
              </div>
              <Link href="pages/about">
                <p className="text-sm sm:text-base lg:text-xl font-robotoMono font-medium cursor-pointer">
                  Saiba mais
                </p>
              </Link>
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center">
            <div className={` w-full`}>
              <p
                className={`${start.animatedPhrase} ${start.delay2} py-7 text-3xl sm:text-4xl md:text-5xl 
            font-architectsDaughter font-bold`}
              >
                EWERTON REIS
              </p>
              <div className="w-full">
                <p
                  className={`${start.animatedPhrase} ${start.delay3} py-7 pl-7 sm:pl-12 md:pl-14 font-bold
                lg:pl-20 text-xl sm:text-2xl md:text-3xl lg:text-5xl text-gray-100 font-architectsDaughter`}
                >
                  DESENVOLVEDOR FULL-STACK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
