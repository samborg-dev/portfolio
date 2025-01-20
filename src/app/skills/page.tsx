import NoImageCard from "@/components/NoImageCard";
import { Metadata } from "next";

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
    subtitle?: string;
    subsubtitle?: string;
    body?: string;
    skills?: string[];
    snames?: string[];
    link?: string;
};

const cards: card[] = [
    {
        title: 'Languages',
        skills: ['logos/python-original.svg', 'logos/c-plain.svg', 'logos/csharp-plain.svg', 'logos/cplusplus-plain.svg', 'logos/java-original-wordmark.svg', 'logos/html5-plain.svg', 'logos/css3-plain-wordmark.svg', 'logos/javascript-original.svg', 'logos/typescript-original.svg'],
        snames: ['Python', 'C', 'C#', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    
    {
        title: 'Libraries & Frameworks',
        skills: ['logos/react-original.svg', 'logos/tailwindcss-original.svg', 'logos/nextjs-plain.svg', 'logos/node-js.svg', 'logos/trpc-original.svg'],
        snames: ['React', 'Tailwind CSS', 'Next.js', 'Node.js', 'tRPC'],
    }, 

    {
        title: 'Developer Tools',
        skills: ['logos/github-mark.svg', 'logos/git-plain.svg', 'logos/vscode-original.svg', 'logos/visualstudio-plain.svg', 'logos/pycharm-original.svg', 'logos/eclipse-original.svg', 'logos/unity-original.svg', 'logos/vercel.svg', 'logos/prisma-original.svg', '/logos/drizzle.png'],
        snames: ['GitHub', 'Git', 'VS Code', 'Visual Studio', 'PyCharm', 'Eclipse', 'Unity', 'Vercel', 'Prisma', 'Drizzle'],
    }
];

export default function Skills() {
    return (

        <div className='flex flex-col min-h-screen items-center justify-center text-[#F5F1ED] bg-[#13293D] pt-40'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                Skills
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-16">
                My repetoire of skills
            </h2>
            <div className='pt-16'>
                <NoImageCard nicards={cards} />
            </div>
        </div>

    );
}