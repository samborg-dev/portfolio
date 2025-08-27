import { Metadata } from "next/types";
import { Card as UICard, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Sam Borges | Skills",
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
                        {cards.map((skill, index) => (
                            <UICard key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex flex-col sm:flex-row items-start gap-6">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-2xl sm:text-3xl font-bold text-left mb-2">
                                                {skill.title}
                                            </h3>
                                            <p className="text-lg sm:text-xl text-gray-400 text-left mb-3">
                                                {skill.subtitle}
                                            </p>
                                            <p className="text-base sm:text-lg text-left mb-4 leading-relaxed">
                                                {skill.body}
                                            </p>
                                            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-9 gap-2"                                >
                                    {skill.skills?.map((skillImage, index) => (
                                        <span
                                            key={skillImage}
                                            className="bg-[#13293D] p-2 rounded-md transform transition sm:scale-90 hover:scale-100 shadow-lg shadow-transparent hover:shadow-[#F5F1ED] flex items-center justify-center"
                                        >
                                            <Image
                                                src={skillImage ?? 'logos/vercel.svg'}
                                                alt={skill.snames?.[index] ?? '???'}
                                                title={skill.snames?.[index] ?? ''}
                                                width={50}
                                                height={50}
                                                className="items-center h-12"
                                                draggable={false}
                                            />
                                        </span>
                                    )) ?? '???'}
                                </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </UICard>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}