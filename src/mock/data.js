import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zach Ayers | Full Stack Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Zach Ayers's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I\'m',
  name: 'Zachariah Ayers,',
  subtitle: "Full-Stack Software Engineer.",
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    '• Software engineer specializing in Java, Spring (Boot & Cloud), JavaScript, TypeScript, React, C#, and .NET Core.',
  paragraphTwo:
    '• 5 years of experience architecting applications on both the front and back-end while managing a team of developers using Jira and Scrum workflows.',
  paragraphThree:
    '• Mastery in cutting-edge frameworks such as Angular, React, Nextjs, Express, and Spring. As an experienced engineer with a love for automation and robotics - I combine my analytical mind and creative ability to bring complex projects to life.',
  resume: 'https://drive.google.com/file/d/17opsXRe6iq52D4VRKOXLznSAoZ9_gbGA/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lively.png',
    title: 'Lively',
    info: 'Social event application for sharing, attending, and following events / users.',
    info2:
      'ASP.NET Core 5 | Entity Framework | React | TypeScript | C# | Microsoft SQL Server | Azure',
    url: 'https://livelyapp.azurewebsites.net',
    repo: 'https://github.com/zjayers/asp.net.core.react',
  },
  {
    id: nanoid(),
    img: 'natours.png',
    title: 'Natours',
    info:
      'Nature trail application for booking, purchasing, and exploring user created trails around the globe.',
    info2: 'React | Redux | Stripe | Express | JavaScript | MongoDB | Heroku',
    url: 'http://natours-ayers.herokuapp.com/',
    repo: 'https://github.com/zjayers/natours',
  },
  {
    id: nanoid(),
    img: 'donewithit.png',
    title: 'Done With It',
    info:
      'Social application for posting, selling, and connecting with buyers of various products.',
    info2: 'React Native | Expo | Nestjs | TypeScript | MySQL | Github Actions',
    url: 'https://zjayers.github.io/host.donewithit/',
    repo: 'https://github.com/zjayers/react.native.complete',
  },
  {
    id: nanoid(),
    img: 'remix.png',
    title: 'Remix IDE',
    info: 'Popular Etherium/Solidity IDE ported to Mac Desktops (packaged with electron).',
    info2: 'Electron | Javascript | Etherium | Solidity | Blockchain ',
    url: 'https://github.com/zjayers/remix.ide/releases/tag/1.0',
    repo: 'https://github.com/zjayers/remix.ide',
  },
  {
    id: nanoid(),
    img: 'vocation.png',
    title: 'Vocation',
    info:
      'Light-weight browser overlay that uses pre-defined templates to generate cover letters, outreach messages, and recruiter responses.',
    info2: 'Vue | Chrome Plugin',
    url:
      'https://chrome.google.com/webstore/detail/vocation/icppkimiacdjokmejcmlhhdphlanokbo?hl=en',
    repo: 'https://github.com/zjayers/proto.vue.jobscan',
  },
  {
    id: nanoid(),
    img: 'hostify.png',
    title: 'Hostify',
    info: 'Front-end mockup for a web deployment/hosting service.',
    info2: 'HTML | CSS | JavaScript',
    url: 'https://zjayers.github.io/hostify/',
    repo: 'https://github.com/zjayers/hostify',
  },
  {
    id: nanoid(),
    img: 'mfe.png',
    title: 'Micro Front Ends',
    info:
      'Template application built with Webpack Module Federation - combining multiple front-end apps into a single container.',
    info2:
      'React | Vue | Webpack Module Federation | Material UI | JavaScript | Amazon S3 | Amazon Cloudfront | Github Actions',
    url: 'https://dod1fwu8el2f8.cloudfront.net/',
    repo: 'https://github.com/zjayers/mfe.complete',
  },
  {
    id: nanoid(),
    img: 'shareposts.png',
    title: 'CraterMVC PHP Framework',
    info:
      'Model-View-Controller framework built in PHP 7.+ and deployed on LAMP stack EC2 instance.',
    info2: 'PHP | PDO | MySQL | Apache | Amazon EC2 | LAMP Stack',
    url: 'http://ec2-52-14-3-104.us-east-2.compute.amazonaws.com/php.mvc.blog/',
    repo: 'https://github.com/zjayers/php.mvc.framework',
  },
  {
    id: nanoid(),
    img: 'nexter.png',
    title: 'Nexter',
    info: 'Landing page for a modern real estate firm.',
    info2: 'HTML | SCSS | JavaScript',
    url: 'https://zjayers.github.io/design.nexter/',
    repo: 'https://github.com/zjayers/design.nexter',
  },
  {
    id: nanoid(),
    img: 'trillo.png',
    title: 'Trillo',
    info: 'Landing page for hotel booking, messaging, notifications, and reviews.',
    info2: 'HTML | SCSS | JavaScript',
    url: 'https://zjayers.github.io/design.trillo/',
    repo: 'https://github.com/zjayers/design.trillo',
  },
  {
    id: nanoid(),
    img: 'aurora.png',
    title: 'Aurora Grove',
    info: 'Mockup landing page for viewing and booking campsites.',
    info2: 'Bootstrap | SCSS | JavaScript ',
    url: 'https://zjayers.github.io/design.bootstrap/',
    repo: 'https://github.com/zjayers/design.bootstrap',
  },
];

export const metricsData = {
  id: nanoid(),
  img: 'metrics.png',
  title: 'Portfolio: Site Metrics',
  info:
    'SEO optimized, Progressive Web Application. Click the link below to open and run the lighthouse report.',
  info2: 'PWA | Gatsby | React | GraphQL | Lighthouse ',
  url:
    'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fzachayers.io%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
  repo: 'https://github.com/zjayers/portfolio',
};

// CONTACT DATA
export const contactData = {
  cta: 'I would love to work with you!',
  btn: 'Email Me',
  email: 'z.ayers@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/zjayers',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'http://www.github.com/zjayers',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
