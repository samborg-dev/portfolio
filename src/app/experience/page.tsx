import { Metadata } from "next/types";
import { Card as UICard, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

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
        <TooltipProvider>
            <div suppressHydrationWarning className="theme-container">
                <div className="min-h-screen flex flex-col justify-center items-center text-center pb-10 px-4 sm:px-14">
                    <div className="w-full">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-16">
                            Projects
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-16">
                            A collection of my work
                        </h2>
                        <div className="grid gap-8 max-w-6xl mx-auto">
                            {cards.map((exp, index) => (
                                <UICard key={index} className="hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col sm:flex-row items-start gap-6">
                                            <div className="flex-shrink-0">
                                                <Image 
                                                    src={exp.image} 
                                                    alt={exp.title}
                                                    width={100}
                                                    height={100}
                                                    className="object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-2xl sm:text-3xl font-bold text-left mb-2">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-lg sm:text-xl text-gray-400 text-left mb-3">
                                                    {exp.subtitle}
                                                </p>
                                                <p className="text-base sm:text-lg text-left mb-4 leading-relaxed">
                                                    {exp.body}
                                                </p>
                                                {exp.link && (
                                                    <div className="flex justify-start">
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="transform transition hover:scale-110">
                                                                    <Link href={exp.link} target="_blank">
                                                                        <Button className="px-6 py-2">
                                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                                            View Project
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>Open {exp.title}</TooltipContent>
                                                        </Tooltip>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </UICard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
}