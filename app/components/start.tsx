import start from '../styles/start.module.css'
import writer from '../styles/typingAnimation.module.css'

const Start = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center" id="start">
      <div className="w-[94%] md:w-[88%] h-full relative">
        <div className="w-full h-1/2 flex justify-end items-center">
          <div
            className="w-full sm:w-[20rem] lg:w-[24rem] flex flex-col text-sm 
            sm:text-base lg:text-xl text-gray-100 font-robotoMono"
          >
            <div className="flex justify-end">
              <div>
                <p className={`${writer.typewriter}`}>
                  <span>BEM-VINDO AO MEU PORTFÓLIO!</span>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <p className={`${writer.typewriter} ${writer.delay2}`}>
                  <span>AQUI VOCÊ PODE ENCONTRAR OS PROJETOS</span>
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <p className={`${writer.typewriter} ${writer.delay3}`}>
                  <span>MAIS RECENTES EM QUE TENHO TRABALHADO.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 flex flex-col">
          <div className={` w-full pt-12`}>
            <p
              className={`${start.animatedPhrase} ${start.delay2} py-7 text-3xl sm:text-4xl md:text-5xl 
            font-architectsDaughter`}
            >
              EWERTON REIS
            </p>
            <div className="w-full">
              <p
                className={`${start.animatedPhrase} ${start.delay3} py-7 pl-7 sm:pl-12 md:pl-14 
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
