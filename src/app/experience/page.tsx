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
    body: string;
    skills?: string[];
    link?: string;
};

const cards: card[] = [
    {
        title: 'Volunteer Manager & Information Technology Support Assistant',
        subtitle: 'Miami Springs Middle School',
        subsubtitle: 'June 2019 - August 2023',
        image: '/logos/msms.webp',
        body: 'just wait for it',
        link: 'https://www.kmodo.org/'
    },

    {
        title: 'Spark-a-Hack',
        subtitle: 'KnightHacks VII 2024',
        image: '/logos/sparkahack.png',
        body: 'Website that generates user tailored hackathon project ideas based on the user’s intrests, skills, & choice of challenges using generative AI APIs.',
        skills: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'tRPC', 'Gemini API',],
        link: 'https://spark-a-hack-production.up.railway.app/'
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

export default function Experience() {
    return (
        <>
            <div className='flex flex-col text-[#F5F1ED] bg-[#13293D] min-h-screen items-center justify-center pt-40'>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                    Experience
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-16">
                    A collection of my work
                </h2>
                <div className='pt-16'>
                    <LongCard lcards={cards} />
                </div>
            </div>
        </>
    );
}