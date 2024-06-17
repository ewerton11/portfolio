import start from '../styles/start.module.css'
import writer from '../styles/typingAnimation.module.css'
import Pixels from '../styles/pixels.module.css'

const Start = () => {
  // const pixelContainerRef = useRef<HTMLDivElement | null>(null)

  // useEffect(() => {
  //   const pixelContainer = pixelContainerRef.current
  //   if (!pixelContainer) return

  //   const numberOfPixels: number = 100

  //   for (let i = 0; i < numberOfPixels; i++) {
  //     const pixel = document.createElement('span')
  //     const pixelSize = Math.floor(Math.random() * 5) + 1

  //     Object.assign(pixel.style, {
  //       left: `${Math.random() * 100}vw`,
  //       top: `${Math.random() * 100}vh`,
  //       width: `${pixelSize}px`,
  //       height: `${pixelSize}px`,
  //     })

  //     if (Math.random() < 0.3) {
  //       // 0.5 para 50% de chance de adicionar animação
  //       const directionX = Math.random() > 0.5 ? 100 : -100
  //       const directionY = Math.random() > 0.5 ? 100 : -100

  //       Object.assign(pixel.style, {
  //         animationDuration: `${Math.random() * 120 + 120}s`,
  //         animationDelay: `${Math.random() * 60}s`,
  //       })

  //       pixel.style.setProperty('--x-pixels', `${directionX}vw`)
  //       pixel.style.setProperty('--y-pixels', `${directionY}vh`)
  //     }

  //     pixelContainer.appendChild(pixel)
  //   }
  // }, [])

  return (
    <div className="w-full h-screen flex flex-col items-center" id="start">
      <div className="w-[94%] md:w-[88%] h-full">
        <div className="w-full h-1/2 flex justify-end items-center">
          <div
            className="w-full sm:w-[24rem] lg:w-[28rem] flex flex-col text-sm 
            sm:text-base lg:text-xl text-gray-100 font-robotoMono"
          >
            <p className={`${writer.typewriter}`}>
              <span>BEM-VINDO AO MEU PORTFÓLIO!</span>
            </p>
            <p className={`${writer.typewriter} ${writer.delay2}`}>
              <span>AQUI VOCÊ PODE ENCONTRAR OS PROJETOS</span>
            </p>
            <p className={`${writer.typewriter} ${writer.delay3}`}>
              <span>MAIS RECENTES EM QUE TENHO TRABALHADO.</span>
            </p>
          </div>
        </div>
        <div className="w-full h-1/2 flex flex-col">
          <div className={` w-full pt-12`}>
            <p
              className={`${start.animatedPhrase} ${start.delay2} py-7 text-3xl sm:text-4xl md:text-5xl 
            font-architectsDaughter font-bold`}
            >
              EWERTON REIS
            </p>
            <div className="w-full">
              <p
                className={`${start.animatedPhrase} ${start.delay3} py-7 pl-7 sm:pl-12 md:pl-14 font-bold
                lg:pl-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 font-robotoMono`}
              >
                DESENVOLVEDOR FULL-STACK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start
