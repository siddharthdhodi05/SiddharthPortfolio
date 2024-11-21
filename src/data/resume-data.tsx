import { ConsultlyLogo, EvercastLogo, ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Siddharth Dhodi",
  initials: "SD",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai/india",
  about: "Full Stack Developer with expertise in the MERN stack.",
  summary:
    "Hey, I'm Siddharth Dhodi, a passionate Full Stack Developer with a degree in Computer Engineering from Mumbai University. I enjoy building web applications using the MERN stack (MongoDB, Express.js, React, Node.js), focusing on both frontend and backend development. I’m a self-taught developer and a life-long learner, always curious about new technologies and eager to enhance my skills. Currently, I’m diving deeper into React, Node.js, and learning TypeScript for more efficient and scalable development.",

  avatarUrl:
    "https://avatars.githubusercontent.com/u/141346737?s=400",
  personalWebsiteUrl: "https://siddharth-portfolio-ivory.vercel.app/",
  contact: {
    email: "siddharth.dhodi.work@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/siddharthdhodi05",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/siddharth-dhodi-108790319/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/DhodiSiddharth_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Vidyavardhini’s College of Engineering and Technology",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Prodigy InfoTech",
      link: "https://prodigyinfotech.dev/",
      badges: ["Remote"],
      title: "Data Science Intern",
      logo: ConsultlyLogo,
      start: "June 2023",
      end: "July 2023",
      description:
        "During my internship as a Data Science Intern from June to July 2023, I worked extensively with industrial datasets to extract meaningful insights and trends that supported decision-making processes. I developed and fine-tuned machine learning models, achieving accurate predictions that significantly improved operational efficiency. Additionally, I conducted comprehensive Exploratory Data Analysis (EDA) to identify key patterns and derive actionable conclusions, contributing to a deeper understanding of the data and its implications for the organization.",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ],
  projects: [
    {
      title: "Job-Portal",
      techStack: [
        "JavaScript",
        "React",
        "Redux-toolkit",
        "Tailwind CSS",
        "Node",
        "Jwt Authentication",
        "Express",
        "MongoDB"
      ],
      description:
        "The Job Portal Application is a MERN-based full-stack web application designed to connect students and recruiters, providing a platform for job search, application submission, and efficient management of user and company profiles.",
      logo: ParabolLogo,
      link: {
        label: "Job Portal",
        href: "https://jobportal-production.onrender.com/",
      },
      github: "https://github.com/siddharthdhodi05/Job-Portal",
    },

    {
      title: "Real-time Chat Application",
      techStack: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Socket.io",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      description:
        "The Real-Time Chat Application is a full-stack MERN web application that allows users to communicate instantly with real-time messaging capabilities. This app ensures a smooth and engaging user experience with seamless communication, secure authentication, and efficient state management. ",
      logo: ParabolLogo,
      link: {
        label: "Real-Time Chat Application",
        href: "https://epic-blogs.vercel.a",
      },
      github: "https://github.com/siddharthdhodi05/Chat-Application",
    },
    
    {
      title: "Email Application",
      techStack: [
        "JavaScript",
        "React",
        "Tailwind",
        "Redux-toolkit",
        "Firebase",
        "DaisyUI"
      ],
      description:
        "The Email Application is a dynamic React-based web application integrated with Firebase for authentication and database management. This app offers a clean, intuitive interface for users to manage their emails, with key features for composing, viewing, and deleting emails.",
      logo: ParabolLogo,
      link: {
        label: "Email Application",
        href: "https://email-application-five.vercel.app/",
      },
      github: "https://github.com/siddharthdhodi05/Email-Application",
    },
  ],
} as const;
