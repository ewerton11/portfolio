import Image from 'next/image'

interface ProjectPreviewProps {
  project: IProjectPreview
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
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
        </div>
      </div>
    </div>
  )
}
