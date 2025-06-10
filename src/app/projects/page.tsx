import Card from "@/components/Card";
import type { Metadata } from "next/types";

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
        title: 'Tariffix',
        subtitle: 'Bitcamp 2025',
        image: '/logos/tariffix-icon.svg',
        body: 'Chrome extension and educational website that helps users understand the impact of tariffs on product prices using AI-powered estimations and live product metadata analysis.',
        skills: ['React', 'Vite', 'Tailwind CSS', 'Next.js', 'TypeScript', 'MongoDB', 'Chrome Extension API', 'Gemini API', 'Cheerio', 'Git'],
        link: 'https://devpost.com/software/tariffix'
    },
    {
        title: 'SightSync',
        subtitle: 'HackUSF 2025',
        image: '/logos/SightSync.jpg',
        body: 'System-level accessibility tool that enables hands-free computer control using head movements and voice commands through real-time computer vision and speech recognition.',
        skills: ['Python', 'Pygame', 'Pyautogui', 'OpenCV', 'MediaPipe', 'Git'],
        link: 'https://devpost.com/software/sightsync-iztcrl'
    },
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
        body: 'Website that generates user tailored hackathon project ideas based on the user’s intrests, skills, & choice of challenges using generative AI APIs.',
        skills: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'tRPC', 'Gemini API', 'Git'],
        link: 'https://devpost.com/software/spark-a-hack'
    },

    {
        title: 'Night of Knights',
        subtitle: 'May 2023 – May 2024',
        image: '/logos/Night of Knights logo-export.png',
        body: 'Capstone project for my Computer Science magnet strand in my senior year of high school. A 2D action adventure platformer, which achieved 2nd place at the 2024 TSA Florida Regionals Game Design Competition.',
        skills: ['C#', 'Unity'],
        link: 'https://play.unity.com/en/games/27ee33fa-e1e3-4178-8acf-9e1f37546fd0/night-of-knights'
    },

];

export default function Projects() {
    return (

        <div className='flex flex-col min-h-screen items-center justify-center text-[#F5F1ED] bg-[#13293D] pt-40'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                Projects
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-16">
                A collection of my work
            </h2>
            <div className='pt-16'>
                <Card cards={cards} />
            </div>
        </div>

    );
}