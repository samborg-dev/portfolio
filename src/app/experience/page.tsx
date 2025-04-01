import LongCard from "@/components/LongCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sam Borges | Experience",
    description: "Sam Borges is a undergraduate student at the University of Central Florida and an aspiring software engineer.",
    keywords: [
        "Sam Borges",
        "Samuel Borges",
        "Samuel Xavier Borges",
        "Software Engineer",
        "UCF",
        "University of Central Florida",
        "Knight Hacks",
        "Web Development",
        "Full stack",
    ],
    openGraph: {
        type: "website",
        title: "Sam Borges",
        description: "Sam Borges is a undergraduate student at the University of Central Florida and an aspiring software engineer.",
    },
};

type card = {
    title: string;
    subtitle: string;
    subsubtitle?: string;
    image: string;
    body: string[];
    skills?: string[];
    link?: string;
};

const cards: card[] = [
    {
        title: 'Software Engineer Intern',
        subtitle: 'Zuleris Interactive',
        subsubtitle: 'March 2025 - Present',
        image: '/logos/zuleris_interactive_logo.jpeg',
        body: 
        [
            '• Designed and developed a cutting-edge training simulation for the U.S. Department of Defense.',
            '• Utilized Unity to create immersive gameplay that strengthens soldier proficiency in electromagnetic warfare through realistic communication scenarios.', 
            '• Optimized user experience by refining UI/UX design, incorporating intuitive interface layouts and smooth interaction flows for a more engaging and user-friendly training environment.', 
            '• Boosted soldiers\' adaptability and operational readiness in electromagnetic warfare situations.'        
        ]
    },
    {
        title: 'Software Engineer',
        subtitle: 'Knight Hacks',
        subsubtitle: 'February 2025 - Present',
        image: '/logos/white-kh-logo.svg',
        body: 
        [
            '• Collaborated with a team of 8 developers to create tools to support & facilitate the growth of UCF’s largest computer science club of 500+ concurrent yearly members.',
            '• Assisted in the development of club infrastructure tooling using React & TypeScript to improve member retention by 60%.'
        ]
    },
    {
        title: 'Software Engineer Intern',
        subtitle: 'Miami EdTech',
        subsubtitle: 'June 2023 - August 2023',
        image: '/logos/miamiedtech.png',
        body: 
        [
            '• Assisted with the testing and development of visual recognition AI software in Python, increasing efficiency & accuracy by 25%. ', 
            '• Researched the possible integrations & benefits of STEM education curriculum packages as part of a team of interns, suggesting a proposal to reach over 30 schools in the surrounding area.'
        ]
    },

    {
        title: 'Information Technology Support Assistant',
        subtitle: 'Miami Lakes Educational Center',
        subsubtitle: 'June 2022 – August 2022',
        image: '/logos/mlec.jpg',
        body: 
        [
            '• Collaborated to create an AI-driven brainstorming platform that gathers data from top hackathon projects in order to generate winning ideas tailored to the user using TypeScript & Next.js.', 
            '• Developed a sleek & intuitive front-end using Tailwind & React, prioritizing a clean & seamless user experience to boost engagement by 35%.'
        ],
    },

    {
        title: 'Volunteer Manager & Information Technology Support Assistant',
        subtitle: 'Miami Springs Middle School',
        subsubtitle: 'June 2019 - August 2023',
        image: '/logos/msms.webp',
        body: 
        [
            '• Led & managed a team of 6 members, creating project timelines & assignments for each to increase productivity & efficiency by 45%.',
            '• Placed second in the Technology Student Association, Florida State Video Game Design Competition, 2024, besting over 35 other teams through the creation of enticing & innovative map, enemy, & battle design.'
        ],
    },
];

export default function Experience() {
    return (
        <>
            <div className='flex flex-col text-[#F5F1ED] bg-[#13293D] min-h-screen items-center justify-center pt-40'>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                    Experience
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-16">
                    A timeline of my work
                </h2>
                <div className='pt-16'>
                    <LongCard lcards={cards} />
                </div>
            </div>
        </>
    );
}