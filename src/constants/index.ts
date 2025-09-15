import gaImg from '../assets/generalAssembly.jpeg'
import malaeb from '../assets/malaeb.png'
import tamC from '../assets/tamC.png'
import spaceThreads from '../assets/spaceThreads.png'
import yallaAthletes from '../assets/yallaAthletes.png'
import oceanThreads from '../assets/oceanThreads.png'
import jeopardy from '../assets/jeopardy.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import typescript from '../assets/typescript.png'
import react from '../assets/react.png'
import tailwindcss from '../assets/tailwindcss.png'

export const homeText = {
        introduction: "Hello, I'm",
        name: 'Hamad Alhibshi',
        role: 'Full-Stack Developer',
        about: 'Full-stack developer with a passion for building innovative and user-friendly applications. Strong work ethic with hands-on experience across front-end, back-end, and mobile development. Skilled at delivering creative, effective solutions to complex challenges while exceeding client expectations and enhancing user experiences.',
        downloadResume:'Download Resume',
        contact: 'Contact Me',
};

export const titles = {
    experience: 'Experience',
    projects: 'Projects',
    technologies: 'Technologies',
};

export const experiences = [
        {
        id: '0',
        date:'Feb 2025 - May 2025',
        role:'Full Stack Developer',
        company:'Tam-C Solutions',
        tech:['React', 'SQL', 'Postgres'],
        logo: tamC,
        description: [
            {
                point: 'Developed and optimized frontend features using React, improving usability and ensuring seamless user interactions across web platforms.',
            },
            {
                point: 'Customized ESRI maps within the application, enabling dynamic data visualization and interactive geospatial features.',
            },
            {
                point: 'Identified and resolved frontend performance bottlenecks, reducing load times and enhancing rendering efficiency for large data sets.',
            },
            {
                point: 'Debugged and fixed critical UI and logic issues, ensuring smoother user experiences and improving overall product stability.',
            },
        ]
    },
        {
        id: '1',
        date:'May 2024 - Feb 2025',
        role:'Frontend Developer',
        company:'Malaeb',
        tech:['React', 'React Native', 'XCode', 'Android Studio'],
        logo: malaeb,
        description:[
            {
                point:'Led the development of new mobile and web features, ensuring timely delivery aligned with business goals.'
            },
            {
                point:'Collaborated with UI/UX, QA, and cross-functional teams to refine user flows and implement seamless user experiences.'
            },
            {
                point:'Optimized performance, debugging, and monitoring through tools like Flipper and Reactotron, improving app reliability.'
            },
            {
                point:'Contributed to deployment processes.'
            },
            {
                point:'Actively participated in sprint planning, task management, and provided input on technical design decisions.'
            },
        ]
    },
        {
        id: '2',
        date:'Nov 2023 - May 2024',
        role:'Mobile Developer Trainee',
        company:'Malaeb',
        tech:['React Native', 'XCode', 'Android Studio'],
        logo: malaeb,
        description:[
            {
                point:'Assisted in building and testing mobile app features under the guidance of senior developers.'
            },
            {
                point:'Learned and applied best practices in React Native development, debugging, and testing.'
            },
            {
                point:'Worked closely with mentors to review code, improve problem-solving approaches, and adopt efficient development workflows.'
            },
            {
                point:'Supported integration of APIs documented in Swagger and gained hands-on experience with deployment tools.'
            },
            {
                point:'Collaborated with designers and QA to align development with product requirements.'
            },
        ]
    },
    {
        id: '3',
        date:'June 2023 - Sept 2023',
        role:'Software Engineer Bootcamp',
        company:'General Assembly',
        tech:['React', 'Nodejs', 'mongoDB', 'Postgres', 'Javascript'],
        logo: gaImg,
        description: [
            {
                point: 'Completed an intensive software engineering bootcamp, gaining hands-on experience with modern web development tools and best practices.',
            },
            {
                point: 'Built full-stack projects, strengthening understanding of both frontend and backend development.',
            },
            {
                point: 'Collaborated with peers in team-based projects, practicing agile workflows, code reviews, and version control with Git/GitHub.',
            },
            {
                point: 'Developed problem-solving skills by debugging applications, optimizing performance, and applying fundamental computer science concepts.',
            },
        ]
    },
];

export const projects = [
    // {
    //     id: '4',
    //     title: 'Portfolio',
    //     description:'Personal Portfolio showcasing skills, projects, and experience.',
    //     tech: ['React', 'Vite', 'TailwindCSS', 'Typescript', 'GSAP', 'Javascript'],
    //     img:'src/assets/spaceThreads.png',
    // },
    {
        id: '3',
        title: 'SpaceThreads',
        description:'A platform that serves as a collaborative storytelling platform. Users can visit various pages where authors have the creative freedom to craft their own stories. What sets SpaceThreads apart is its unique feature that allows authors to seamlessly merge their stories with those of others.',
        tech: ['Django', 'Python', 'JWT', 'PostGresQL', 'React', 'Material UI', 'pgAdmin4'],
        img: spaceThreads,
        link:'https://github.com/hamadalhibshi/spaceThreads'
    },
    {
        id: '2',
        title: 'YallaAthletes',
        description:"This platform breaks down the barriers that often limit people's access to sports, making it possible for individuals from all walks of life to embrace their inner athlete and embark on a journey of physical excellence.",
        tech: ['Node.js', 'Express', 'MongoDB', 'bcrypt', 'React', 'Material UI'],
        img: yallaAthletes,
        link:'https://github.com/hamadalhibshi/yallaAthletes'
    },
    {
        id: '1',
        title: 'OceanThreads',
        description:'A space where students from General Assembly Middle East could connect, share their issues, ideas, or even showcase their projects. This setup allows others within the General Assembly Middle East community to jump in, leave comments, offer solutions, or simply spread some positivity.',
        tech: ['React', 'Material UI', 'Node.js', 'Express', 'MongoDB', 'jQuery'],
        img: oceanThreads,
        link:'https://github.com/hamadalhibshi/oceanThreads'
    },
    {
        id: '0',
        title: 'Jeopardy',
        description:'Two-player Jeopardy game, pits two players against each other in a battle of knowledge.',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git', 'GitHub'],
        img: jeopardy,
        link:'https://github.com/hamadalhibshi/Jeopardy'
    },
]

export const footer = {
    title:'Get in Touch',
    description: "I'm open for new opportunities - especially ambitious or large projects. However, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    buttonText: 'Say Hello',
}

export const scrambleTextRoles = [
    "Full-Stack Engineer",
    "Frontend Developer",
    "Mobile Developer",
    "I build things."
]

export const techCardsConst = [
    {
        id: '0',
        title:'html',
        image: html
    },
    {
        id: '1',
        title:'javascript',
        image: javascript
    },
    {
        id: '2',
        title:'typescript',
        image: typescript
    },
    {
        id: '3',
        title:'react',
        image: react
    },
    {
        id: '4',
        title:'tailwindcss',
        image: tailwindcss
    },
]