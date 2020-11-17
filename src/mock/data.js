import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zach Ayers | Full Stack Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Zach Ayers's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Zachariah Ayers.',
  subtitle: "I'm a Full-Stack Software Engineer.",
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a software engineer specializing in JavaScript, TypeScript, React, C#, and .NET Core.',
  paragraphTwo:
    'I have 5 years of experience architecting applications on both the front and back-end while managing a team of developers using Jira and Scrum workflows.',
  paragraphThree:
    'I have experience in cutting-edge frameworks such as Angular, React, Nextjs, Express, and .NET Core 5. As an experienced engineer with a love for automation and robotics - I combine my analytical mind and creative ability to bring complex projects to life.',
  resume: 'https://drive.google.com/file/d/12RFbSK8QHu5yjC0fwS86L-IK8icvHcBw/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'natours.png',
    title: 'Natours',
    info:
      'Nature trail application for booking, purchasing, and exploring user created trails around the globe.',
    info2: 'React | Redux | Stripe | Node | JavaScript | Heroku',
    url: 'http://natours-ayers.herokuapp.com/',
    repo: 'https://github.com/zjayers/natours', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'donewithit.png',
    title: 'Done With It',
    info:
      'Social application for posting, selling, and connecting with buyers of various products.',
    info2: 'React Native | Expo | Nestjs | TypeScript | Github Actions',
    url: 'https://zjayers.github.io/host.donewithit/',
    repo: 'https://github.com/zjayers/react.native.complete', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lively.png',
    title: 'Lively',
    info: 'Social event application for sharing, attending, and following events / users.',
    info2: 'ASP.NET Core 5 | Entity Framework | React | TypeScript | Azure',
    url: 'https://livelyapp.azurewebsites.net',
    repo: 'https://github.com/zjayers/asp.net.core.react', // if no repo, the button will not show up
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
    repo: 'https://github.com/zjayers/proto.vue.jobscan', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nexter.png',
    title: 'Nexter',
    info: 'Landing page for a modern real estate firm.',
    info2: 'HTML | SCSS | JavaScript',
    url: 'https://zjayers.github.io/design.nexter/',
    repo: 'https://github.com/zjayers/design.nexter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'trillo.png',
    title: 'Trillo',
    info: 'Landing page for hotel booking, messaging, notifications, and reviews.',
    info2: 'HTML | SCSS | JavaScript',
    url: 'https://zjayers.github.io/design.trillo/',
    repo: 'https://github.com/zjayers/design.trillo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'aurora.png',
    title: 'Aurora Grove',
    info: 'Mockup landing page for booking campsites',
    info2: 'Bootstrap | SCSS | JavaScript ',
    url: 'https://zjayers.github.io/design.bootstrap/',
    repo: 'https://github.com/zjayers/design.bootstrap', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I would love to work with you!',
  btn: 'Contact Me',
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
