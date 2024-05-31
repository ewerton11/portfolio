import Github from '@/public/GithubIcon'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className="flex flex-col items-center min-h-screen" id="projects">
      <div className="w-[80%] h-auto">
        <div className="w-full h-auto flex justify-center items-center relative">
          <div className="w-3/4 flex flex-col items-center">
            <div className="w-full h-[412px]">
              <Image
                src="/sneaker.jpg"
                width={512}
                height={412}
                alt="sneaker"
                className="w-full h-full object-cover"
              />
              <div className="w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <p className="text-[7rem] text-nowrap text-center font-robotoMonoItalic">
                  SNEAKERHEAD-WEB
                </p>
              </div>
            </div>
            <div className="w-full mt-10 flex justify-between items-center font-robotoMono text-xl">
              <p className="">Desenvolvedor Full-Stack</p>
              <p className="">2023</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-32">
          <div className="w-3/4">
            <p className="font-robotoMono text-xl text-offWhite">
              Este site facilita a busca pelos tênis ideais, realizando busca em
              diferentes sites como Nike e Adidas. Com soluções inteligentes,
              você encontra tênis de diversos estilos, preços e descontos, além
              de acessar um histórico de preços detalhado. Outros sites podem
              ser adicionados para expandir suas opções de busca.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-end">
          <div className="w-[87.5%] text-xl font-robotoMono font-bold">
            <div className="w-full flex my-10">
              <div className="w-1/2 h-full">
                <p>VISÃO GERAL DO PROJETO</p>
              </div>
              <div className="w-1/2 h-full">
                <p>
                  Parte do desenvolvimento principal deste site de busca de
                  tênis. Identificar melhorias e refatorar o código com melhores
                  práticas, utilizando TypeScript. Implementação de scraping de
                  dados e exibição dinâmica de produtos.
                </p>
              </div>
            </div>
            <div className="w-full flex py-10">
              <div className="w-1/2 h-full">
                <p>HABILIDADES TÉCNICAS</p>
              </div>
              <div className="w-1/2 h-full">
                <ul className="space-y-1 list-disc list-inside">
                  <li>Manipulação da DOM</li>
                  <li>Programação Orientada a Objetos (POO)</li>
                  <li>Gerenciamento de containers Docker</li>
                </ul>
              </div>
            </div>
            <div className="w-full flex py-10">
              <div className="w-1/2 h-full">
                <p>TECNOLOGIAS</p>
              </div>
              <div className="w-1/2 h-full">
                <ul className="space-y-1 list-disc list-inside">
                  <li>NextJs</li>
                  <li>TypeScript</li>
                  <li>Eslint</li>
                  <li>Styled Components</li>
                  <li>Axios</li>
                  <li>ChartJs</li>
                  <li>React ChartJs 2</li>
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>MySql 2</li>
                  <li>Puppeteer</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-full h-[580px] bg-white rounded-3xl flex flex-col">
            <div className="w-full h-[520px] overflow-hidden rounded-t-3xl">
              <Image
                src="/projectSneakerhead.png"
                width={1065}
                height={520}
                alt="project sneaker"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-1 flex items-center">
              <button
                className="w-36 ml-10 flex justify-between items-center border
               border-gray-400 rounded-lg px-2"
                onClick={() =>
                  window.open(
                    'https://github.com/ewerton11/sneakerhead-web',
                    '_blank'
                  )
                }
              >
                <div className="flex items-center">
                  <Github />
                  <p className="text-black font-roboto text-base text-center p-2">
                    GitHub
                  </p>
                </div>
                <div className="">
                  <Image
                    src="/share.png"
                    width={15}
                    height={15}
                    alt="share"
                    className="w-full h-full"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
