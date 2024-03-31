import { nanoid } from 'nanoid';

export const headData = {
  title: 'Abhinav Patidar',
  lang: 'en',
  description: 'Abhinav Patidar',
};

export const heroData = {
  title: '',
  name: 'Abhinav Patidar',
  subtitle: "I'm Mechanical Engineer",
  cta: '',
};

export const aboutData = {
  img: 'me2.jpg',
  paragraphOne:
    'I am a Mechanical Engineer with {{years}} of experience in the field of design and development of mechanical systems, including 3D modeling, simulation, and analysis.',
  paragraphTwo:
    'I have worked on various projects involving the design, development and optimization of mechanical components, systems, and processes. I have experience working with CAD software like SolidWorks and AutoCAD, and simulation software like ANSYS, MATLAB and HyperMesh.',
  paragraphThree:
    'currently working as a Mechanical Engineer at Epsilon Graphite Pvt Ltd, Bellary, Karnataka Driven by a passion for more sustainable and more green technologies, I am looking to transition into the field of renewable energy and sustainable engineering.',
  resume: 'https://drive.google.com/file/d/1OFmc6O1lQ25vQ6CqEjwybFpzCavjMP3w/view',
  // resume: 'https://www.dropbox.com/scl/fi/qh3xzt432p3algjuqf7j6/Ritik_Resume.pdf?rlkey=c3pgv0ug68g3yz8jct8amh9cx&dl=0',
  //!    MM/DD/YYYY  - do not change the format
  careerStartDate: '04/01/2023',
};

export const skillsData = [
  {
    id: nanoid(),
    img: 'skills/javascript-colored.jpg',
    title: 'JavaScript',
    info: '',
    info2: '',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: nanoid(),
    img: 'skills/typescript-colored.jpg',
    title: 'TypeScript',
    info: '',
    info2: '',
    url: 'https://www.typescriptlang.org',
  },
  {
    id: nanoid(),
    img: 'skills/react-colored.jpg',
    title: 'React',
    info: '',
    info2: '',
    url: 'https://reactjs.org/',
  },
  {
    id: nanoid(),
    img: 'skills/react-colored.jpg',
    title: 'React Native',
    info: '',
    info2: '',
    url: 'https://reactnative.dev/',
  },
  {
    id: nanoid(),
    img: 'skills/html5-colored.jpg',
    title: 'HTML5',
    info: '',
    info2: '',
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    id: nanoid(),
    img: 'skills/css3-colored.jpg',
    title: 'CSS3',
    info: '',
    info2: '',
    url: 'https://www.w3.org/TR/CSS/#css',
  },
  {
    id: nanoid(),
    img: 'skills/tailwindcss-colored.jpg',
    title: 'Tailwind CSS',
    info: '',
    info2: '',
    url: 'https://tailwindcss.com/',
  },
  {
    id: nanoid(),
    img: 'skills/bootstrap-colored.jpg',
    title: 'Bootstrap',
    info: '',
    info2: '',
    url: 'https://getbootstrap.com/',
  },
  {
    id: nanoid(),
    img: 'skills/materialui-colored.jpg',
    title: 'Material UI',
    info: '',
    info2: '',
    url: 'https://mui.com/',
  },
  {
    id: nanoid(),
    img: 'skills/nodejs-colored.jpg',
    title: 'NodeJS',
    info: '',
    info2: '',
    url: 'https://nodejs.org/en/',
  },
  {
    id: nanoid(),
    img: 'skills/mongodb-colored.jpg',
    title: 'MongoDB',
    info: '',
    info2: '',
    url: 'https://www.mongodb.com/',
  },
  {
    id: nanoid(),
    img: 'skills/python-colored.jpg',
    title: 'Python',
    info: '',
    info2: '',
    url: 'https://www.python.org/',
  },
];

// EXPERIENCE DATA
export const experienceData = [
  {
    title: 'Intern, Manufacturing Operations',
    company_name: 'Volvo Eicher Commercial Vehicles Ltd, Pithampur',
    icon: 'experience/vecv.png',
    iconBg: '#fff',
    date: 'Aug 2021 - Sep 2021',
  },
  {
    title: 'Intern, Team CAE',
    company_name: 'Larsen and Toubro Technical Services, Vadodara',
    icon: 'experience/lnt.png',
    iconBg: '#fff',
    date: 'May 2022 - Jun 2022',
  },
  {
    title: 'Graduate Engineer Trainee (GET)',
    company_name: 'EPSILON GRAPHITE PVT. LTD., Bellary, Karnataka',
    icon: 'experience/epln.png',
    iconBg: '#fff',
    date: 'Jun 2023 - Present',
  },
];

// PROJECT DATA
export const projectsData = {
  projects: [
    {
      id: nanoid(),
      img: 'projects/news.jpg',
      title: 'News App-Web Version',
      info: 'A Web application where one can read the latest news articles.',
      info2:
        'This news articles are sorted into different categories like General, Entertainment, Business, Health, Sports, and Technology.',
      url: 'https://github.com/Ritik-Patidar/NewsApp-Web',
      repo: 'https://github.com/Ritik-Patidar/NewsApp-Web',
    },
    {
      id: nanoid(),
      img: 'projects/password-generator.jpg',
      title: 'Password Generator',
      info: 'A tool to Instantly generate a secure, random password and save it online.',
      info2: '',
      url: 'https://pass-wordgenerator.netlify.app/',
      repo: 'https://github.com/Ritik-Patidar/password-generator',
    },
    {
      id: nanoid(),
      img: 'projects/youtube.jpg',
      title: 'Youtube Clone',
      info: 'Clone of youtube app.',
      info2: 'here you can stream videos just like youtube.',
      url: 'https://y-tube-clone.netlify.app',
      repo: 'https://github.com/Ritik-Patidar/youtube_clone',
    },
  ],
  // seeMore: {
  //   cta: 'See more on github',
  //   link: 'https://github.com/Ritik-Patidar',
  // },
};

// CONTACT DATA
export const contactData = {
  title: 'Contact',
  cta: 'Would you like to connect with me? Awesome!',
  btn: "Let's Connect",
  linkedIn: 'https://www.linkedin.com/in/abhinavpatidar01',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abhinavpatidar01',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/abhinavptdr',
    },
  ],
};

export const githubButtons = {
  isEnabled: false,
};
