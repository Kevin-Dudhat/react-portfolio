import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import edublink from "../assets/projects/edublink.png";
import masonryLayout from "../assets/projects/masonry-layout.png";
import flipkartCompare from "../assets/projects/flipkart-compare.png";
import breeze from "../assets/projects/breeze.png";
import cricketGully from "../assets/projects/cricket-gully.png";

export const HERO_CONTENT = `I am a passionate Front-End Developer with a strong focus on creating interactive and user-friendly web applications. Over the past year, I have honed my skills in React, building dynamic, responsive UIs while leveraging my solid foundation in HTML and CSS for clean, semantic, and accessible web designs. I am continuously improving my understanding of front-end technologies and am eager to build visually appealing and high-performing websites that deliver exceptional user experiences. My goal is to create solutions that are not only aesthetically pleasing but also intuitive and seamless to navigate.`;

export const ABOUT_TEXT = `As a passionate Front-End Developer with two years of experience, I specialize in creating intuitive, responsive, and visually compelling web applications. With a strong foundation in React, HTML, and CSS, I build seamless user interfaces that deliver exceptional user experiences. My knowledge of back-end technologies like Node.js and MySQL complements my front-end skills, allowing me to build well-rounded, dynamic applications. My journey in web development started with a deep interest in design and functionality, and it has evolved into a career where I’m constantly learning and taking on new challenges. I thrive in collaborative environments, enjoy solving complex problems, and am dedicated to delivering high-quality, user-centered solutions. Outside of development, I actively explore new technologies and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - Present",
    role: "Frontend Developer",
    company: "Stealth Startup",
    description: `Working as a Frontend Developer at a stealth startup, focusing on building and optimizing user interfaces using modern JavaScript frameworks. Collaborating with cross-functional teams to deliver high-quality web applications that meet user needs and business goals.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Node.js", "HTML", "CSS"],
  },
  {
    year: "Oct 2023 - Nov 2024",
    role: "Frontend Developer and Team Lead",
    company: "Festum Evento Pvt Ltd",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with designers and backend developers to create seamless user experiences. Ensured code quality through regular reviews and testing.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Node.js", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Cricket Gully",
    image: cricketGully,
    description:
      "Cricket Gully is a dynamic platform designed for cricket enthusiasts, providing the latest updates, news, and engaging content about the sport. With a growing community of passionate users, the site attracts over 1.3 million views per month, making it one of the most visited cricket-related websites.",
    additionalDescription:
      "Built with a focus on user engagement, Cricket Gully offers an interactive experience, allowing users to stay up-to-date with cricket news, match schedules, player stats, and more. The site is fully responsive, ensuring seamless access across all devices.",
    technologies: ["React", "Tailwind"],
    demoLink: "https://cricketgully.com/",
  },
  {
    title: "Edublink Clone",
    image: edublink,
    description: "This project is a clone of Edublink education site.",
    technologies: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    demoLink: "https://edu-blink.vercel.app/index.html",
  },
  {
    title: "Breeze Clone",
    image: breeze,
    description: "This project is a UI clone of Breeze E-commerce.",
    technologies: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    demoLink: "https://kd-breeze.netlify.app/",
  },
  {
    title: "Masonry Layout",
    image: masonryLayout,
    description:
      "In this project, I built a responsive Masonry Grid using only HTML and CSS without relying on JavaScript or external libraries. The layout adapts to different screen sizes, automatically adjusting the number of columns to fit the available space.",
    technologies: ["HTML", "CSS"],
    demoLink: "https://kevin-portfolio-html.vercel.app/Masonry-layout/index.html",
  },
  {
    title: "Flipkart Product Comparisons",
    image: flipkartCompare,
    description: "This project is a clone of Flipkart's Product Compare Page, allowing users to compare products side by side.",
    technologies: ["HTML", "CSS"],
    demoLink: "https://kevin-portfolio-html.vercel.app/flipkart-compare/index.html",
  },
];

// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     image: project1,
//     description:
//       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Task Management App",
//     image: project2,
//     description:
//       "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
//     technologies: ["HTML", "CSS", "Angular", "Firebase"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React", "Bootstrap"],
//   },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
// ];

export const CONTACT = {
  address: "Surat, Gujarat 395006 ",
  phoneNo: "+91 97127 93805 ",
  email: "kevindudhat654@gmail.com",
};
