import start from '@/styles/start.module.css'

const Start = () => {
  return (
    <div className="w-full h-screen flex justify-center" id="start">
      <div className="w-[80%] h-full relative">
        <div className="w-full h-1/2 flex justify-end">
          <div
            className="w-72 h-full flex flex-col justify-center text-base font-robotoMono
          text-offWhite"
          >
            <p className="text-end">BEM-VINDO AO MEU PORTFÓLIO!</p>
            <p className="text-start">
              AQUI VOCÊ PODE ENCONTRAR OS PROJETOS MAIS RECENTES EM QUE TENHO
              TRABALHADO.
            </p>
          </div>
        </div>
        <div className="w-full h-1/2">
          <div className="w-full h-auto flex flex-col">
            <div className={`w-full ${start.animatedPhrase}`}>
              <p className="text-5xl text-offWhite font-architectsDaughter py-5">
                EWERTON REIS
              </p>
              <p className="text-5xl font-medium font-robotoMono py-5 pl-16">
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
