import {
    web,
    javascript,
    typescript,
    html,
    java,
    bootstrap,
    nextjs,
    postman,
    angular,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    carrent,
    jobit,
    tripguide,
    kanban,
    firetablecsv,
    calendly,
    firebase,
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
      title: "React Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Fullstack Developer",
      icon: web
    }
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "Html",
      icon: html,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "Postman",
      icon: postman,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Blobcity ",
      iconBg: "#383E56",
      date: "August 2022 - March 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Project Engineer",
      company_name: "Wipro",
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Collaborated with cross-functional teams to understand and translate business requirements into effective frontend solutions",
        "Integrated with backend APIs to fetch and display real-time data related to inventory, orders, and logistics",
        "Implemented data visualization tools and charts to present complex supply chain data in a clear and comprehensible manner.",
        "Developed and maintained user interfaces for a supply chain management system, ensuring a seamless and intuitive user experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Kanban Clone",
      description:
        "The Kanban Board Clone, streamlines project management with drag-and-drop features. Responsive and collaborative, it enables users to organize tasks across customizable columns.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: kanban,
      Demo:"https://kanban-clone-delta.vercel.app/",
      source_code_link: "https://github.com/SushantKumar1999/Kanban_clone",
    },
    {
      name: "Fire Table CSV",
      description:
        "This React project with Firebase integration enables user authentication, showcasing a responsive design with a sidebar menu. Users can upload CSV files via a modal, and the data is instantly displayed in a table on the home screen.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Papaparse",
          color: "pink-text-gradient",
        },
      ],
      image: firetablecsv,
      Demo:"https://openinapp-assignment-nu.vercel.app/",
      source_code_link: "https://github.com/SushantKumar1999/FireTableCSV",
    },
    {
      name: "Calendly Clone",
      description:
        "Explore my Calendly clone, crafted with React.js & Tailwind CSS! Enjoy seamless scheduling and appointment management with an intuitive interface mirroring the convenience of the original platform.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Faker",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: calendly,
      Demo: "https://calendly-clone-orpin.vercel.app/",
      source_code_link: "https://github.com/SushantKumar1999/Calendly-Clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  