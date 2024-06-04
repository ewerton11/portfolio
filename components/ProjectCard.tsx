import Github from '@/public/GithubIcon'
import Image from 'next/image'

interface ProjectCardProps {
  project: IProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-[80%] h-auto my-32">
      <div className="w-full h-auto flex justify-center items-center relative">
        <div className="w-3/4 flex flex-col items-center">
          <div className="w-full h-[412px]">
            <Image
              src={project.imageSrc}
              width={512}
              height={412}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="w-full absolute top-1/4 left-1/2 -translate-x-1/2">
              <p className="text-[7rem] text-nowrap text-center font-robotoMonoItalic">
                {project.title}
              </p>
            </div>
          </div>
          <div className="w-full mt-10 flex justify-between items-center font-robotoMono text-xl">
            <p className="">Desenvolvedor Full-Stack</p>
            <p className="">{project.year}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-32">
        <div className="w-3/4">
          <p className="font-robotoMono text-xl text-offWhite">
            {project.description}
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
              <p>{project.overview}</p>
            </div>
          </div>
          <div className="w-full flex py-10">
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
          <div className="w-full flex py-10">
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
        <div className="w-full h-[580px] bg-white rounded-3xl flex flex-col">
          <div className="w-full h-[520px] overflow-hidden rounded-t-3xl">
            <Image
              src={project.showcaseImage}
              width={1065}
              height={520}
              alt={`project ${project.title}`}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex-1 flex items-center">
            <button
              className="w-36 ml-10 flex justify-between items-center border
             border-gray-400 rounded-lg px-2"
              onClick={() => window.open(project.githubLink, '_blank')}
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
  )
}

export default ProjectCard
