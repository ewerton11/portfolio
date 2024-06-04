import ProjectCard from '@/components/projectCard'

const projectsData: IProject[] = [
  {
    title: 'FUT-433',
    imageSrc: '/fantasy.jpg',
    year: 'Atual',
    description: `Oferecer uma plataforma de gerenciamento de times de fantasy football, 
    onde os usuários podem selecionar jogadores, criar ligas, acompanhar estatísticas em tempo real 
    e competir com outros usuários.`,
    overview: ` SaaS desenvolvido com boas práticas de desenvolvimento, utilizando TDD, DDD, .NET 
    com Clean Architecture e o padrão de Injeção de Dependência.`,
    skills: ['DDD', 'Clean Architecture', 'TDD', 'IoC'],
    technologies: [
      '.Net Core',
      'Asp.Net Core',
      'EF Core',
      'SQLServer',
      'xUnit ',
      'NextJs',
      'TypeScript',
      'TailwindCSS',
      'Zod',
      'React-hook-form',
      'React-slick',
      'Slick-carousel',
      'Axios',
    ],
    showcaseImage: '/select-team.png',
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
  {
    title: 'SNEAKER-HEAD',
    imageSrc: '/sneaker.jpg',
    year: '2023',
    description: `Este site facilita a busca pelos tênis ideais, realizando busca em diferentes sites como 
      Nike e Adidas. Com soluções inteligentes, você encontra tênis de diversos estilos, 
      preços e descontos, além de acessar um histórico de preços detalhado. Outros sites podem ser 
      adicionados para expandir suas opções de busca.`,
    overview: `Parte do desenvolvimento principal deste site de busca de tênis. Identificar melhorias e refatorar
       o código com melhores práticas, utilizando TypeScript. Implementação de scraping de dados e 
       exibição dinâmica de produtos.`,
    skills: [
      'Manipulação da DOM',
      'Programação Orientada a Objetos (POO)',
      'Gerenciamento de containers Docker',
    ],
    technologies: [
      'NextJs',
      'TypeScript',
      'Eslint',
      'Styled Components',
      'Axios',
      'ChartJs',
      'React ChartJs 2',
      'NodeJs',
      'Express',
      'MySql 2',
      'Puppeteer',
      'Docker',
    ],
    showcaseImage: '/projectSneakerhead.png',
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
  {
    title: 'MOMENTS-SOCCER',
    imageSrc: '/estadio-de-futebol.jpg',
    year: '2023',
    description: `Site para ver o resultados dos ultimos jogos dos jogos brasileiro e ver os melhores momentos
      de toda rodada`,
    overview:
      'Site desenvolvido com intuido de treinamento e evoluido com o passar do tempo',
    skills: ['Gerenciamento de API externa'],
    technologies: ['ReactJs', 'TypeScript', 'Vite', 'Styled-Components'],
    showcaseImage: '/best-moments-soccer.png',
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
  // Adicione mais projetos aqui
]

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen" id="projects">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}

export default Projects
