import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Eric Kuo",
  initials: "EK",
  url: "https://dillion.io",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/seattle",
  description:
    "Aspiring Software Engineer & Data Scientist. I love building things and helping people.",
  current: "Currently a Front-End Engineer @ ",
  company: "Destinate",
  past: "(previously at XRSPACE & Dell)",
  summary:
    "I’m Eric Kuo, a Master's student at the University of Washington studying Information Management: Data Science. As a goal-driven Software Engineer with a strong passion for Design and Project Management, I’m always seeking opportunities to work on high-impact technologies that drive sustainable innovation and empower communities. I'm excited about leveraging generative AI and data-driven design to build accessible, sustainable solutions that empower users and optimize complex workflows. Feel free to connect with me at [erickuo0210@gmail.com](mailto:erickuo0210@gmail.com)!",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "Agile Methodologies",
    "CI/CD Pipelines",
  ],
  technologies: [
    "React",
    "React Native",
    "Next.js",
    "Redux",
    "HTML/CSS",
    "FastAPI",
    "Express.js",
    ".NET",
    "REST APIs",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "Microservices",
    "AWS",
    "Azure",
    "Kafka",
    "Redis",
    "LangChain",
    "CrewAI",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "erickuo0210@gmail.com",
    tel: "+1 (206) 602-9393",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/erickuokuo/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ericallenkuo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      schedulingUrl: "https://calendly.com/ericallenkuo/30min",
      instagram: {
        name: "instagram",
        url: "https://www.instagram.com/equal0210",
        icon: Icons.instagram,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Destinate Inc",
      href: "https://destinate.com",
      badges: [],
      location: "Los Angeles, CA",
      title: "Frontend Engineer",
      logoUrl: "/destinate.png",
      start: "August 2025",
      end: "Present",
      description:
        "Engineered and optimized responsive landing pages using HTML, CSS, and JavaScript, integrating SEO best practices and caching strategies that reduced page load times by 30% across mobile and desktop. Converted Figma wireframes into production-ready code, collaborating with designers to deliver user-centric interfaces that boosted visitor engagement by 18%.",
    },
    {
      company: "University of Washington",
      href: "https://washington.edu",
      badges: [],
      location: "Seattle, WA",
      title: "Lead Web Engineer",
      logoUrl: "/uw.png",
      start: "May 2024",
      end: "June 2025",
      description:
        "Architected and developed fully accessible web pages using HTML5, CSS3, and Bootstrap, achieving WCAG 2.1 compliance via Axe automation, semantic markup, and screen reader optimization. Implemented responsive design systems with Sass preprocessing and CI/CD pipelines. Integrated Google Analytics API and SEO optimization, reducing churn by 15% and increasing conversion by 12%.",
    },
    {
      company: "XRSPACE (Humi)",
      href: "https://xrspace.io",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Frontend Engineer",
      logoUrl: "/xrspace.png",
      start: "June 2022",
      end: "September 2023",
      description:
        "Optimized object transformation algorithms in Unity with C# and spatial partitioning, improving AR rendering efficiency by 15% and reducing CPU overhead by 25%. Developed the 'Social Party' feature in React Native with Redux state management and REST API integration, deployed to 600+ beta users on iOS TestFlight. Designed and wireframed 20+ high-fidelity interfaces for MR/VR platforms using Figma and Unity, shaping experiences later launched on Apple Vision Pro.",
    },
    {
      company: "MAXIEYE",
      href: "https://maxieye.com",
      badges: [],
      location: "Shanghai, China",
      title: "Software Engineer",
      logoUrl: "/maxieye.png",
      start: "June 2021",
      end: "October 2021",
      description:
        "Integrated PyTorch-based neural networks for traffic cone detection, trained on 50,000+ annotated images, boosting real-time recognition accuracy. Developed HMI integrations via CAN bus and cross-platform GUI to surface detection alerts on vehicle dashboards. Improved safety system accuracy by 15% using TensorFlow optimization, data augmentation, and hyperparameter tuning.",
    },
    {
      company: "DELL Technologies",
      href: "https://dell.com",
      badges: [],
      location: "Shanghai, China",
      title: "Full-Stack Developer",
      logoUrl: "/dell.png",
      start: "June 2020",
      end: "September 2020",
      description:
        "Built an ML model in Python/TensorFlow to predict hardware failures, integrated with Flask backend and React UI achieving <200ms latency. Automated Dell EMC Data Protection Suite backup scheduling in Python/MySQL, improving efficiency by 40%. Designed a Kafka-based microservice system for Excalibur Project, processing 10,000+ data points daily with 30% higher task efficiency.",
    },
  ],
  education: [
    {
      school: "University of Washington",
      href: "",
      degree: "Master's Degree of Information Management (MSIM) Data Science",
      logoUrl: "/uw.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "University of Washington",
      href: "",
      degree: "Bachelor's Degree of Informatics (BS) Software Development",
      logoUrl: "/uw.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "TariffAgent",
      href: "",
      dates: "Jul 2025 - Present",
      active: true,
      description:
        "Architected a multi-agent AI platform using CrewAI framework, Python FastAPI, and PostgreSQL for Bill of Materials analysis and tariff optimization across global trade agreements with CLI interface. Implemented real-time tariff rate APIs, and a generative AI recommendation engine featuring compliance documentation generation and ERP system integration for business needs.",
      technologies: [
        "Python",
        "FastAPI",
        "CrewAI",
        "PostgreSQL",
        "Docker",
        "Generative AI",
        "LangChain",
        "CLI Tools",
        "ERP Integration",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Erickuokuo/tariff-mitigation-agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tariff-mitigation.png",
      video: "",
    },
    {
      title: "MediScan",
      href: "",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "Developed a React Native app with camera API integration and OCR text extraction for automated prescription label scanning. Implemented a dashboard with a medication scheduling algorithm, featuring medication tracking and push notification systems.",
      technologies: [
        "React Native",
        "TypeScript",
        "OCR",
        "Camera API",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Push Notifications",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Erickuokuo/mediscan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mediscan.png",
      video: "",
    },
    {
      title: "Dewy",
      href: "",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Developed a dermatology solution hosting a Python neural network, leveraging AWS for image processing and cloud services. Interfaced React.js and Node.js backend, ensuring efficient Python Flask server computer vision processes for real-time analysis.",
      technologies: [
        "Python",
        "Flask",
        "React.js",
        "Node.js",
        "AWS",
        "Computer Vision",
        "Neural Networks",
        "Cloud Services",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/wtom002/dewy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dewy.png",
      video: "",
    },
    {
      title: "BookTank",
      href: "",
      dates: "Sep 2021 - Present",
      active: true,
      description:
        "Founded an app for school textbook resale with the implementation of an intuitive messaging system and UI for online transactions. Developed a textbook bundle search algorithm with the textbook API, optimizing 1000+ student purchases from different sellers.",
      technologies: [
        "React Native",
        "TypeScript",
        "PostgreSQL",
        "Node.js",
        "Express",
        "Messaging System",
        "Search Algorithms",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Erickuokuo/BookTank",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/booktank.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],

  leadership: [
    {
      title: "GenAI Researcher, SVMLC GenAI Club @ SFBU",
      dates: "June 2025 - Present",
      location: "Silicon Valley, California",
      description:
        "Contribute to generative AI research discussions and publish a weekly newsletter highlighting emerging trends and applications.",
      image: "/sfbu.png",
      links: [],
    },
    {
      title: "President, UW Taiwanese Overseas Student Association",
      dates: "October 2021 - June 2025",
      location: "Seattle, Washington",
      description:
        "Directed 20+ cultural and networking events with 5,000+ participants, securing $50K in sponsorship revenue.",
      image: "/tosa.png",
      links: [],
    },
    {
      title: "Executive Vice President, Phi Chi Theta",
      dates: "March 2022 - June 2025",
      location: "Seattle, Washington",
      description:
        "Leading 60 members through weekly chapter meetings and facilitated weekly executive board meetings for chapter operations. Driving $4K+ in annual fundraising revenue through monitoring 10+ campus initiatives focusing on food sales and conferences.",
      image: "/pct.png",
      links: [],
    },
  ],
} as const;
