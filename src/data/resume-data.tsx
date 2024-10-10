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
  personalWebsiteUrl: "https://patilpranit.vercel.ap",
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
      title: "MegaBlog",
      techStack: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Appwrite",
      ],
      description:
        "This is a blog web application built using React for the frontend and Appwrite as the backend service for handling database, authentication, and other essential services. The application leverages React Hook Form for efficient form management and validation. The project is deployed on Netlify for seamless and fast hosting.",
      logo: ParabolLogo,
      link: {
        label: "MegaBlog",
        href: "https://epic-blogs.vercel.ap",
      },
      github: "https://github.com/siddharthdhodi05/Blog-Application",
    },

    {
      title: "Video-Streaming-Platform",
      techStack: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      description:
        "Video Streaming Platform built with Node.js, Express.js, MongoDB, and JWT for authentication. Features include user login, video uploads, likes, comments, subscriptions, and more. Implements access tokens, refresh tokens, and secure password hashing with bcrypt. Follows best practices for security and scalability.",
      logo: ParabolLogo,
      link: {
        label: "Video-Streaming-Platform",
        href: "https://epic-blogs.vercel.a",
      },
      github: "https://github.com/siddharthdhodi05/Video-Streaming-Platform",
    },
    
    {
      title: "Weather Web Application",
      techStack: [
        "HTML/CSS",
        "JavaScript",
        "React",
      ],
      description:
        "This React-based web application leverages the OpenWeather API to provide real-time weather data. Users can search for any location to view current weather details, including temperature, humidity, and wind speed. The application is user-friendly, featuring a clean design with a dynamic search functionality for quick access to weather updates across different cities.",
      logo: ParabolLogo,
      link: {
        label: "Weather Web Application",
        href: "https://weather-application-liart-three.vercel.app/",
      },
      github: "https://github.com/siddharthdhodi05/Weather-Application",
    },
  ],
} as const;
