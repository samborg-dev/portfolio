import { Metadata } from "next/types";
import { Card as UICard, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SpinFlower from "@/components/flower";

export const metadata: Metadata = {
    title: "Sam Borges | Skills",
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

        skills: [
            'logos/python-original.svg', 'logos/c-plain.svg', 'logos/csharp-plain.svg',
            'logos/cplusplus-plain.svg', 'logos/java-original-wordmark.svg',
            'logos/html5-plain.svg', 'logos/css3-plain-wordmark.svg',
            'logos/javascript-original.svg', 'logos/typescript-original.svg', 'logos/latex.svg',
        ],

        snames: ['Python', 'C', 'C#', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'LaTeX'],
    },

    {
        title: 'Libraries & Frameworks',

        skills: [
            'logos/pygame_logo.svg', 'logos/pandas.svg', 'logos/react-original.svg', 'logos/tailwindcss-original.svg',
            'logos/nextjs-original.svg', 'logos/node-js.svg', 'logos/vitejs-original.svg',
            'logos/trpc-original.svg', 'logos/postgresql-original.svg', 'logos/mongodb.svg', 'logos/sqlite-original.svg',
            'logos/gemini_api.svg', 'logos/chrome-extension.svg', 'logos/opencv-original.svg',
            '/logos/mediapipe.png', 'logos/cheerio.svg',
        ],

        snames: [
            'Pygame', 'Pandas', 'React', 'Tailwind CSS',
            'Next.js', 'Node.js', 'Vite',
            'tRPC', 'PostgreSQL', 'MongoDB', 'SQLite',
            'Gemini API', 'Chrome Extension API',
            'OpenCV', 'Media Pipe', 'Cheerio',
        ],
    },

    {
        title: 'Developer Tools',

        skills: [
            'logos/github-mark.svg', 'logos/git-plain.svg', 'logos/vscode-original.svg',
            'logos/visualstudio-plain.svg', 'logos/anaconda-original.svg', 'logos/pycharm-original.svg',
            'logos/spyder-original.svg', 'logos/eclipse-original.svg',
            'logos/unity-original.svg', 'logos/vercel.svg', 'logos/prisma-original.svg',
            '/logos/drizzle.png', 'logos/sqlitebrowser.svg', 'logos/figma-original.svg',
            'logos/overleaf.svg',
        ],

        snames: [
            'GitHub', 'Git', 'VS Code', 'Visual Studio',
            'Anaconda', 'Spyder',
            'PyCharm', 'Eclipse', 'Unity', 'Vercel',
            'Prisma', 'Drizzle', 'SQLite Browser', 'Figma',
            'Overleaf',
        ],
    }
];

export default function Skills() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-48 mb-20">
            <div suppressHydrationWarning className="theme-container" style={{ fontFamily: 'Cute Sunrise' }}>
                <div className="min-h-screen flex flex-col justify-center items-center text-center pb-10 px-4 sm:px-14">
                    <div className="w-full">
                        <div className="grid gap-8 max-w-6xl mx-auto">
                            {cards.map((skill, index) => (
                                <UICard key={index} className="hover:shadow-lg transition-shadow top">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col sm:flex-row items-start gap-6">
                                            <div className="flex-1 min-w-0 text-left">
                                                <div className="mb-5">
                                                    <span className="text-2xl sm:text-3xl font-bold text-left" style={{ fontFamily: 'Good Matcha' }}>
                                                        {skill.title}
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-9 gap-2">
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
                        <div className="relative z-0">
                            <SpinFlower />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}