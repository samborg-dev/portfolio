import { Metadata } from "next/types";
import { Card as UICard, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import SpinFlower from "@/components/flower";

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
        subtitle: 'Data-Enabled Photovoltaics',
        subsubtitle: 'May 2025 - Present',
        image: '/logos/DPV.png',
        body:
            [
                '• Automated parsing and normalization of heterogeneous instrument metadata by developing an object-oriented Python parser with Pandas and SQLite, reducing manual preprocessing time by over 75%.',
                '• Achieved consistent metadata provenance and context tracking by defining and validating FAIR data model standards and integrating workflow outputs across pipelines.',
            ]
    },
    {
        title: 'Software Engineer',
        subtitle: 'Knight Hacks',
        subsubtitle: 'February 2025 - Present',
        image: '/logos/white-kh-logo.svg',
        body:
            [
                '• Improved site accessibility and maintainability by developing reusable React/TypeScript UI components to replace non-semantic SVG elements and embed proper ARIA attributes, enhancing keyboard navigation compliance and cutting UI code duplication.',
                '• Developed a ground-up email automation system using the Google API to send personalized acceptance, denial, and event-detail communications to applicants for one of Florida’s largest hackathons.'
            ]
    },
    {
        title: 'Software Engineer Intern',
        subtitle: 'Zuleris Interactive',
        subsubtitle: 'March 2025 - May 2025',
        image: '/logos/zuleris_interactive_logo.jpeg',
        body:
            [
                '• Developed a modular Unity/C# radio interference simulator with configurable overlap frequencies and coroutine-driven randomized jamming, enabling a fully adjustable multi-radio training tool.',
                '• Implemented global static C# events to broadcast UI open/close and frequency changes, synchronizing audio playback and tuning across four independent radio instances for seamless, consistent behavior.',
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
        subsubtitle: 'June 2022 - August 2022',
        image: '/logos/mlec.jpg',
        body:
            [
                '• Provided technical support to over 50 teachers & staff members, solving a wide array of IT-related issues to ensure minimal or zero downtime enhancing operational efficiency by 30%.',
                '• Managed the installation of hardware & software, system upgrades, & regular maintenance on over 300 devices to ensure flawless performance and integration into the upcoming school year.'
            ],
    },

    {
        title: 'Volunteer Manager & Information Technology Support Assistant',
        subtitle: 'Miami Springs Middle School',
        subsubtitle: 'June 2019 - August 2023',
        image: '/logos/msms.webp',
        body:
            [
                '• Maintained a team of over 15 volunteers to assist with the school\'s yearly summer maintenance & renovations, scheduling & assisting with assignments for each subdivision, increasing productivity from previous years by 70%.',
                '• Provided intensive technical support to over 50 teachers & staff by troubleshooting & solving a wide array of IT-related problems to ensure minimal or zero downtime enhancing operational efficiency by 30%.',
                '• Implemented & maintained a digital inventory system for tracking school equipment and resources, reducing misplacements and improving asset management efficiency by 40%. ',
            ],
    },
];

export default function Experience() {
    return (
        <TooltipProvider>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-48 mb-20">
                <div suppressHydrationWarning className="theme-container" style={{ fontFamily: 'Cute Sunrise' }}>
                    <div className="min-h-screen flex flex-col justify-center items-center text-center pb-10 px-4 sm:px-14">
                        <div className="w-full">
                            <div className="grid gap-8 max-w-6xl mx-auto">
                                {cards.map((exp, index) => (
                                    <UICard key={index} className="hover:shadow-lg transition-shadow top">
                                        <CardContent className="p-6">
                                            <div className="flex flex-col sm:flex-row sm:items-start items-center gap-6">
                                                <div className="flex-shrink-0">
                                                    <Image
                                                        src={exp.image}
                                                        alt={exp.title}
                                                        width={100}
                                                        height={100}
                                                        draggable={false}
                                                        className="object-cover rounded-lg"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                                        <span className="text-2xl sm:text-3xl font-bold text-center sm:text-left flex-1" style={{ fontFamily: 'Good Matcha' }}>
                                                            {exp.title}
                                                        </span>
                                                        <span className="text-lg sm:text-xl text-center sm:text-right whitespace-nowrap">
                                                            {exp.subsubtitle}
                                                        </span>
                                                    </div>
                                                    <span className="text-lg sm:text-xl text-[#92A6D8] text-center sm:text-left mb-3 block">
                                                        {exp.subtitle}
                                                    </span>
                                                    <div className="text-base sm:text-lg text-left leading-relaxed block space-y-2">
                                                        {exp.body?.map((bodys, index) => (
                                                            <div key={index} className="block">
                                                                <span>{bodys}</span>
                                                            </div>
                                                        )) ?? '???'}
                                                    </div>
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
                            <div className="relative z-0">
                                <SpinFlower />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
}