import { Metadata } from "next/types";
import { Card as UICard, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import SpinFlower from "@/components/flower";

export const metadata: Metadata = {
    title: "Sam Borges | Projects",
    description: "Sam Borges is a undergraduate student at the University of Central Florida and an aspiring software engineer.",
    keywords:[
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
    image: string;
    body: string;
    skills: string[];
    link?: string;
};

const cards: card[] = [
    {
        title: 'Kmodo',
        subtitle: 'January 2025 - Present',
        image: '/logos/kmodo_logo.jpeg',
        body: 'Hackathon & event management platform that allows users to create, manage, and participate in hackathons and events.',
        skills: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'tRPC', 'Drizzle', 'PostgreSQL', 'Git'],
        link: 'https://kmodo.org/'
    },

    {
        title: 'Spark-a-Hack',
        subtitle: 'KnightHacks VII 2024',
        image: '/logos/sparkahack.png',
        body: 'Website that generates user tailored hackathon project ideas based on the user\'s intrests, skills, & choice of challenges using generative AI APIs.',
        skills: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'tRPC', 'Gemini API', 'Git'],
        link: 'https://devpost.com/software/spark-a-hack'
    },

    {
        title: 'Night of Knights',
        subtitle: 'May 2023 - May 2024',
        image: '/logos/Night of Knights logo-export.png',
        body: 'Capstone project for my Computer Science magnet strand in my senior year of high school. A 2D action adventure platformer, which achieved 2nd place at the 2024 TSA Florida Regionals Game Design Competition.',
        skills: ['C#', 'Unity'],
        link: 'https://play.unity.com/en/games/27ee33fa-e1e3-4178-8acf-9e1f37546fd0/night-of-knights'
    },

];

export default function Projects() {
    return (
        <TooltipProvider>
            <div suppressHydrationWarning className="theme-container" style={{ fontFamily: 'Cute Sunrise' }}>
                <div className="min-h-screen flex flex-col justify-center items-center text-center pb-10 px-4 sm:px-14">
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
                            {cards.map((project, index) => (
                                <UICard key={index} className="hover:shadow-lg transition-shadow w-full h-full top">
                                    <CardContent className="p-6 h-full">
                                        <div className="flex flex-col h-full">
                                            <div className="flex flex-row items-center gap-6 mb-6">
                                                <div className="flex-shrink-0">
                                                    <Image 
                                                        src={project.image} 
                                                        alt={project.title}
                                                        width={100}
                                                        height={100}
                                                        className="object-cover rounded-lg w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <span className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-left block mb-2" style={{ fontFamily: 'Good Matcha' }}>
                                                        {project.title}
                                                    </span>
                                                    <span className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg text-left block text-[#92A6D8]">
                                                        {project.subtitle}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex-1 flex flex-col">
                                                <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg text-left mb-4 leading-relaxed">
                                                    {project.body}
                                                </span>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.skills.map((skill, skillIndex) => (
                                                        <Badge key={skillIndex} variant="default">
                                                            <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-base text-[#D7DFF5]">
                                                                {skill}
                                                            </span>
                                                        </Badge>
                                                    ))}
                                                </div>
                                                {project.link && (
                                                    <div className="flex justify-start mt-auto">
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="transform transition hover:scale-110">
                                                                    <Link href={project.link} target="_blank">
                                                                        <Button className="px-6 py-2">
                                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                                            View Project
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>Open {project.title}</TooltipContent>
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
        </TooltipProvider>
    );
}