const projectsData: IProject[] = [
  {
    title: 'Smart-run',
    imageSrc: '/braden.jpg',
    experience: 'Full-Stack',
    year: 'Atual',
    description: `Aplicativo de monitoramento de corridas, onde os usuários podem registrar suas 
      corridas, receber treinos personalizados, acompanhar seu progresso em tempo real e melhorar 
      seu desempenho de forma contínua.`,
    overview: `Aplicativo desenvolvido com boas práticas de desenvolvimento, utilizando TDD, DDD, .NET 
      com Clean Architecture e o padrão de Injeção de Dependência.`,
    skills: ['DDD', 'Clean Architecture', 'TDD', 'IoC'],
    technologies: [
      '.Net Core',
      'Asp.Net Core',
      'EF Core',
      'SQLServer',
      'xUnit ',
      'React Native',
      'TypeScript',
      'TailwindCSS',
      'Axios',
    ],
    showcaseImage: null,
    mobileImage: ['/iPhone-Home.png', '/iPhone-Plan.png', '/iPhone-Run.png'],
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
  {
    title: 'Fut433',
    imageSrc: '/fantasy.jpg',
    experience: 'Full-Stack',
    year: 'Atual',
    description: `Plataforma de gerenciamento de times de fantasy football, onde os usuários podem
      selecionar jogadores, criar ligas, acompanhar estatísticas em tempo real e competir com outros 
      usuários.`,
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
    showcaseImage: '/selectTeam.png',
    mobileImage: null,
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
  {
    title: 'Sneakerhead',
    imageSrc: '/sneaker.jpg',
    experience: 'Full-Stack',
    year: '2023',
    description: `Site para facilitar a busca pelos tênis ideais, realizando busca em diferentes sites 
        como Nike e Adidas. Com soluções inteligentes, você encontra tênis de diversos estilos, 
        preços e descontos, além de acessar um histórico de preços detalhado. Outros sites podem ser 
        adicionados para expandir suas opções de busca.`,
    overview: `Parte do desenvolvimento principal deste site de busca de tênis. Identificar melhorias e
        refatorar o código com melhores práticas, utilizando TypeScript. Implementação de scraping de dados e 
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
    mobileImage: null,
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
  {
    title: 'Moments-soccer',
    imageSrc: '/estadio-de-futebol.jpg',
    experience: 'Front-End',
    year: '2022',
    description: `Site desenvolvido para consumir diferentes APIs externas, agregando as 
      informações de maneira eficiente. Gerenciamento de buscas e exibição organizada dos dados na 
      interface, proporcionando uma experiência de usuário clara e intuitiva.`,
    overview: `Otimização de integração com APIs externas e organização intuitiva de dados para uma 
      experiência de usuário eficiente.`,
    skills: [
      'Gerenciamento de APIs',
      'Organização de Informações',
      'Adaptabilidade',
    ],
    technologies: [
      'ReactJs',
      'TypeScript',
      'Styled Components',
      'Axios',
      'Vite',
    ],
    showcaseImage: '/best-moments-soccer.png',
    mobileImage: null,
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
]

export default projectsData
