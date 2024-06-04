import Image from 'next/image'

const About = () => {
  return (
    <div className="w-full h-screen flex justify-center" id="about">
      <div className="w-[80%] h-full flex flex-col justify-center relative my-32">
        <div className="w-full h-full flex flex-col justify-center text-xl font-robotoMono">
          <h1 className="text-offWhite">(SOBRE)</h1>
          <div className="w-full h-auto flex items-center mt-3">
            <p className="flex-1">
              Me chamo Ewerton e sou desenvolvedor fullstack. Atualmente, tenho
              21 anos e moro no Rio de Janeiro, Brasil. Sempre fui apaixonado
              por tecnologias e sou curioso. Foi assim que conheci a área de
              programação.
              <br />
              Aprendi os fundamentos de forma autodidata e, com o passar dos
              anos, comecei a me aperfeiçoar com projetos e freelances. Hoje,
              sigo nesse modelo, trabalhando como freelancer, ajudando pessoas e
              me desenvolvendo cada vez mais.
              <br />
              Meu objetivo é criar minha própria startup, combinando minha
              paixão por tecnologia com meu espírito empreendedor.
            </p>
            <div className="w-auto">
              <div className="bg-white rounded-full flex justify-center item-center">
                <Image
                  src="/MyProfile.png"
                  width={512}
                  height={512}
                  alt="profile"
                  className="rounded-full w-64 h-64 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-64 flex justify-center pt-10">
              <p className="text-base text-center text-offWhite">
                DESENVOLVEDOR FULLSTACK
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 cursor-pointer">
          {/* <p className="text-base font-bold font-roboto">SOBRE</p> */}
        </div>
      </div>
    </div>
  )
}

export default About
