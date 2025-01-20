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
        title: 'Software Engineer Intern',
        subtitle: 'Miami EdTech',
        subsubtitle: 'June 2023 - August 2023',
        image: '/logos/miamiedtech.png',
        body: 'lalala',
    },

    {
        title: 'Information Technology Support Assistant',
        subtitle: 'Miami Lakes Educational Center',
        subsubtitle: 'June 2022 – August 2022',
        image: '/logos/mlec.jpg',
        body: 'lalala',
    },

    {
        title: 'Volunteer Manager & Information Technology Support Assistant',
        subtitle: 'Miami Springs Middle School',
        subsubtitle: 'June 2019 - August 2023',
        image: '/logos/msms.webp',
        body: 'lalala',
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