/*import project1 from "../assets/projects/project-1.jpg";*/
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import apocom from "../assets/projects/apocom.jpeg";
/*import project4 from "../assets/projects/project-4.jpg";*/

/* Experiences */
export const EXPERIENCES = [
  {
    id: "lead-frontend",
    technologies: ["React", "PHP", "Contentful", "mySQL"],
  },
  {
    id: "frontend-dev",
    technologies: ["React", "JavaScript", "PHP", "Bootstrap5"],
  },
  {
    id: "content-manager",
    technologies: ["JavaScript", "jQuery", "HTML5", "CSS"],
  },
];

/* Projects */
export const PROJECTS = [
  {
    id: "apocom",
    image: apocom,
    technologies: ["React", "Bootstrap5", "PHP", "HTML5"],
    link: "https://apo.com/"
  },
  {
    id: "portfolio",
    image: project3,
    technologies: ["React", "TailwindCSS", "FramerMotion"],
    link: "https://github.com/therobhe/react-homepage"
  },
  {
    id: "task-manager",
    image: project2,
    technologies: ["React", "TailwindCSS"],
    link: "https://github.com/therobhe/project-managing-tool"
  }
  /*  {
      title: "Quiz App",
      image: project4,
      description:
        "A simple app, fetching some questions from an API and displaying them to the user. Features a score counter and a timer.",
      technologies: ["React", "TailwindCSS", "Open Trivia API"],
      link: ""
    },*/
];
