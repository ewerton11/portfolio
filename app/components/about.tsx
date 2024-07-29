import Image from 'next/image'

const About = () => {
  return (
    <div className="w-full h-screen flex justify-center" id="about">
      <div className="w-[90%] md:w-[88%] h-full flex flex-col justify-center relative">
        <div className="w-full h-full flex flex-col lg:justify-center text-sm lg:text-xl font-roboto">
          <div className="lg:hidden w-full flex justify-center">
            <div className="m-7 bg-white rounded-full flex justify-center item-center">
              <Image
                src="/MyProfile.png"
                width={128}
                height={128}
                alt="profile"
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
          </div>
          <h1 className="text-gray-100 mt-7">(SOBRE)</h1>
          <div className="w-full h-auto flex items-center mt-7 lg:mt-0">
            <p className="flex-1">
              Me chamo Ewerton e sou desenvolvedor fullstack. Atualmente, tenho
              22 anos e moro no Rio de Janeiro, Brasil. Sempre fui apaixonado
              por tecnologias e sou curioso. Foi assim que conheci a área de
              programação.
              <br />
              Aprendi os fundamentos de forma autodidata e, com o passar dos
              anos, comecei a me aperfeiçoar com projetos e freelances. Hoje,
              sigo nesse modelo, trabalhando como freelancer, ajudando pessoas e
              me desenvolvendo cada vez mais.
            </p>
            <div className="hidden lg:block lg:w-auto">
              <div className="bg-white rounded-full flex justify-center item-center">
                <Image
                  src="/MyProfile.png"
                  width={256}
                  height={256}
                  alt="profile"
                  className="rounded-full w-64 h-64 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-64 flex justify-center mt-16 lg:mt-10">
              <p className="text-base text-center text-gray-100">
                DESENVOLVEDOR FULL-STACK
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
