import Image from 'next/image'

interface ProjectCardProps {
  project: IProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-[90%] md:w-[88%] lg:my-14">
      <div className="w-full flex flex-col items-center">
        <div className="w-10/12 lg:w-1/2 flex flex-col items-center">
          <div className="w-full h-[160px] lg:h-[340px] relative">
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
          <div className="w-full mt-5 flex justify-between font-roboto text-sm lg:text-xl text-gray-100">
            <p className="w-3/4">{project.experience}</p>
            <p className="">{project.year}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-24 lg:my-16">
        <div className="lg:w-1/2">
          <p className="font-roboto text-sm lg:text-2xl text-gray-100">
            {project.description}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-end">
        <div className="w-full lg:w-[75%] flex flex-col items-end pb-16 text-sm lg:text-xl font-roboto">
          <div className="w-full flex py-14">
            <div className="w-1/3 h-full font-bold">
              <p>Visão Geral</p>
            </div>
            <div className="w-2/3 h-full text-gray-100">
              <p>{project.overview}</p>
            </div>
          </div>
          <div className="w-2/3">
            <div className="w-full flex py-10 border-b border-white">
              <div className="w-1/2 h-full font-medium">
                <p>HABILIDADES TÉCNICAS</p>
              </div>
              <div className="w-1/2 h-full">
                <ul className="space-y-1">
                  {project.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full flex pt-10">
              <div className="w-1/2 h-full font-medium">
                <p>TECNOLOGIAS</p>
              </div>
              <div className="w-1/2 h-full">
                <ul className="space-y-1">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
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
