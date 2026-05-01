import {
  mobile,
  backend,
  creator,
  code,
  web,
  javascript,
  html,
  css,
  reactjs,
  sass,
  laravel,
  nodejs,
  mongodb,
  git,
  figma,
  java,
  quizapp,
  techprimeweb,
  theheights,
  selenium,
  techprime,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "QA Engineer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SaSS",
    icon: sass,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Selenium",
    icon: selenium,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Front-End_Development",
    company_name: "Techprime",
    icon: techprime,
    iconBg: "#000000",
    date: "Jan 2023 - July 2024",
    points: [
     "Designed and developed a full website for TechPrime Consulting using JavaScript, Express, Node.js, HTML, and SASS.",
      "Collaborated with a QA team on a data migration project, transferring data from Oracle to Google Cloud and conducting manual testing to ensure accuracy.",
      "Implemented both front-end and back-end features, ensuring functionality, responsiveness, and user-friendly design.",
      "Worked closely with cross-functional teams to deliver high-quality technology solutions, including testing, deployment, and maintenance."
    ],
  },
  {
    title: "Cape Peninsula University of Technology",
    company_name: "Education",
    icon: code,
    iconBg: "#000000",
    date: "Jan 2022 - December 2024",
    points: [
     "Currently pursuing a Diploma in Multimedia Applications, developing skills in multimedia software, web design, UI/UX design, and programming.",
  "Engaged in hands-on projects and coursework to gain expertise in creating visually appealing and interactive digital content.",
  "Building experience in graphic design, animation, and web development to enhance technical proficiency and creative abilities in multimedia solutions.",
  "Applying knowledge in various digital media aspects to lay a solid foundation for a career in digital content creation and interactive multimedia solutions."

    ],
  },
  {
    title: "Modules learned",
    company_name: "First Year",
    icon: code,
    iconBg: "#000000",
    date: "Jan 2022 - December 2022",
    points: [
    "Applications Development Foundations 1",
    "Business Practice 1",
    "Communications Networks Foundations 1",
    "ICT Fundamentals 1",
    "Multimedia Foundations 1",
    "Professional Communications 1",
    "Programming 1",
    "Project 1"


    ],
  },
  {
    title: "Modules learned",
    company_name: "Second Year",
    icon: code,
    iconBg: "#000000",
    date: "Jan 2023 - December 2023",
    points: [
   "Applications Development Fundamentals 2",
    "Communications Networks Fundamentals 2",
    "ICT Electives 2 - Artificial Intelligence",
    "Information Management 2",
    "Multimedia Applications Fundamentals 2",
    "Multimedia Design 2",
    "Multimedia Practice 2",
    "Multimedia Technology 2",
    "Professional Communications 2",
    "Project 2"


    ],
  },
  {
    title: "Modules learned",
    company_name: "Third Year",
    icon: code,
    iconBg: "#000000",
    date: "Jan 2024 - December 2024",
    points: [
    "ICT Electives 3 - Laravel",
    "Multimedia Design 3",
    "Multimedia Practice 3",
    "Multimedia Technology 3",
    "Professional Practice 3",
    "Project 3",
    "Project Management 3",
    "Project Presentation 3"


    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kutlo proved me wrong.",
    name: "Kagisho Modiakgotla",
    designation: "CFO",
    company: "Techprime",
    image: code,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kutlo does.",
    name: "Takalani Ramokala",
    designation: "COO",
    company: "Aviation",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
 
];

const projects = [
  {
    name: "Quiz App",
    description:
      "I built a Quiz App using React with dynamic questions, real-time score tracking, and a responsive design. The app uses React hooks for state management and offers a smooth, interactive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "white-text-gradient",
      },
    ],
    image: quizapp,
    source_code_link: "https://chore-snooze.azurewebsites.net/",
  },
  
  {
    name: "Techprime",
    description:
      "I developed a responsive website for TechPrime, an IT consulting company, featuring custom animations and an optimized layout to showcase their services and enhance client engagement.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      ,
      {
        name: "Node.js",
        color: "white-text-gradient",
      }
    ],
    image: techprimeweb,
    source_code_link: "https://kutloseperi.github.io/Techprime_Website/",
  },
  {
    name: "The Heights Restaurant",
    description:
      "I created a website for The Heights Restaurant & Bistro in Kimberly that displays their menu, promotes specials, and allows customers to easily make reservations through an integrated form. Although not currently in use, the website was designed to enhance their online presence and improve customer engagement.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: theheights,
    source_code_link: "https://kutloseperi.github.io/The-Heights/index.html",
  },
];

export { services, technologies, experiences, testimonials, projects };
