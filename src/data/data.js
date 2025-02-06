import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

/* Experiences */
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Stand-in Teamlead Frontend",
    company: "apo-group.com",
    description: `Designed and developed user interfaces for web applications using React. Implemented headless CMS Contentful to empower content managers to actively update the shop. Conducted code reviews and mentored junior developers.`,
    technologies: ["React", "PHP", "Contentful", "mySQL"],
  },
  {
    year: "2021 - 2024",
    role: "Frontend Developer",
    company: "apologistics GmbH",
    description: `Developed and maintained a pharmaceutical xt:Commerce system using JavaScript and PHP plus its smarty engine. Transferred the legacy mobile/desktop-templates into responsive templates using Bootstrap5 and React. Actively involved in the conception of an own component library based on Bootstrap5. Optimized the performance of the web shop regarding lighthouse standards. Worked in a multi-developer team with SCRUM.`,
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
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];
