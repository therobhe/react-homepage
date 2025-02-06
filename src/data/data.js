/*import project1 from "../assets/projects/project-1.jpg";*/
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
/*import project4 from "../assets/projects/project-4.jpg";*/

/* Experiences */
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Stand-in Teamlead Frontend",
    company: "apo.com Group",
    description: `Designed and developed user interfaces for web applications using React. Implemented headless CMS Contentful to empower content managers to actively update the shop. Conducted code reviews and mentored junior developers and increased knowledge in e2e testing with Cypress.`,
    technologies: ["React", "PHP", "Contentful", "mySQL"],
  },
  {
    year: "2021 - 2024",
    role: "Frontend Developer",
    company: "apologistics GmbH",
    description: `Developed and maintained a pharmaceutical xt:Commerce system using JavaScript and PHP plus its smarty engine. Transferred the legacy mobile/desktop-templates into responsive templates using Bootstrap5 and React. Actively involved in the conception of an own component library based on Bootstrap5. Optimized the performance of the web shop regarding Lighthouse standards. Worked in a multi-developer team based on SCRUM.`,
    technologies: ["React", "JavaScript", "PHP", "Bootstrap5"],
  },
  {
    year: "2020 - 2021",
    role: "Content Manager Frontend",
    company: "apologistics GmbH",
    description: `Developed and maintained contentpages using JavaScript, jQuery, HTML5 and CSS. Implemented and analyzed A/B-Tests with Dynamic Yield in close communication with the marketing team. Worked closely with the design team to implement new features and designs.`,
    technologies: ["JavaScript", "jQuery", "HTML5", "CSS"],
  },
];

/* Projects */
export const PROJECTS = [
/*  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: ""
  },*/
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "FramerMotion"],
    link: "https://github.com/therobhe/react-homepage"
  },
/*  {
    title: "Quiz App",
    image: project4,
    description:
      "A simple app, fetching some questions from an API and displaying them to the user. Features a score counter and a timer.",
    technologies: ["React", "TailwindCSS", "Open Trivia API"],
    link: ""
  },*/
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation and progress tracking.",
    technologies: ["React", "TailwindCSS"],
    link: "https://github.com/therobhe/project-managing-tool"
  },
];
