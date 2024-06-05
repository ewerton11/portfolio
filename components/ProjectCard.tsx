import Image from 'next/image'

interface ProjectCardProps {
  project: IProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-[80%] lg:my-14">
      <div className="w-full flex flex-col items-center">
        <div className="w-2/3 flex flex-col items-center">
          <div className="w-full h-[160px] lg:h-[360px] relative">
            <Image
              src={project.imageSrc}
              width={512}
              height={412}
              alt={project.title}
              className="w-full h-full object-cover filter brightness-50"
            />
            <p
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              text-4xl lg:text-9xl text-nowrap text-center font-robotoMonoItalic"
            >
              {project.title}
            </p>
          </div>
          <div className="w-full mt-7 flex justify-between font-robotoMono text-sm lg:text-xl">
            <p className="w-3/4 lg:w-auto">Desenvolvedor Full-Stack</p>
            <p className="">{project.year}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-32">
        <div className="w-2/3">
          <p className="font-robotoMono text-sm lg:text-xl text-offWhite">
            {project.description}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-end">
        <div className="w-[83%] text-sm lg:text-xl font-robotoMono font-bold">
          <div className="w-full flex mb-14">
            <div className="w-1/2 h-full">
              <p>VISÃO GERAL DO PROJETO</p>
            </div>
            <div className="w-1/2 h-full">
              <p>{project.overview}</p>
            </div>
          </div>
          <div className="w-full flex mb-14">
            <div className="w-1/2 h-full">
              <p>HABILIDADES TÉCNICAS</p>
            </div>
            <div className="w-1/2 h-full">
              <ul className="space-y-1 list-disc list-inside">
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/2 h-full">
              <p>TECNOLOGIAS</p>
            </div>
            <div className="w-1/2 h-full">
              <ul className="space-y-1 list-disc list-inside">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full overflow-hidden">
          <Image
            src={project.showcaseImage}
            width={1065}
            height={520}
            alt={`project ${project.title}`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="flex-1 flex items-center p-2 sm:ml-10">
            <button
              className="w-24 sm:w-36 flex justify-between items-center border
             border-gray-400 rounded-lg px-2"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              <div className="flex items-center">
                <Github width={16} height={16} />
                <p className="text-black font-roboto text-[0.7rem] sm:text-base text-center p-1 sm:p-2">
                  GitHub
                </p>
              </div>
              <div className="w-3 h-3">
                <Image
                  src="/share.png"
                  width={15}
                  height={15}
                  alt="share"
                  className="w-full h-full"
                />
              </div>
            </button>
          </div> */}
      </div>
    </div>
  )
}
