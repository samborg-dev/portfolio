import { Metadata } from "next/types";
import { Card as UICard, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
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
            '/logos/python-original.svg', '/logos/c-plain.svg', '/logos/cplusplus-plain.svg', '/logos/csharp-plain.svg',
            '/logos/java-original-wordmark.svg', '/logos/typescript-original.svg', '/logos/javascript-original.svg',
            '/logos/html5-plain.svg', '/logos/css3-plain-wordmark.svg', '/logos/latex.svg',
        ],

        snames: [
            'Python', 'C', 'C++', 'C#',
            'Java', 'TypeScript', 'JavaScript',
            'HTML', 'CSS', 'LaTeX',
        ],
    },

    {
        title: 'Libraries & Frameworks',

        skills: [
            '/logos/pytorch-original.svg', '/logos/Nvidia_CUDA_Logo.jpg', '/logos/mujoco.png', '/logos/ONNX.svg',
            '/logos/pandas.svg', '/logos/numpy-original.svg', '/logos/scikitlearn-original.svg',
            '/logos/react-original.svg', '/logos/nextjs-original.svg', '/logos/node-js.svg', '/logos/threejs-original.svg',
            '/logos/trpc-original.svg', '/logos/drizzle.png', '/logos/tailwindcss-original.svg', '/logos/vitejs-original.svg',
            '/logos/electron-original.svg', '/logos/adk.png', '/logos/gemini_api.svg',
            '/logos/pygame_logo.svg', '/logos/opencv-original.svg', '/logos/mediapipe.png',
            '/logos/chrome-extension.svg', '/logos/cheerio.svg',
        ],

        snames: [
            'PyTorch', 'CUDA', 'MuJoCo', 'ONNX',
            'Pandas', 'NumPy', 'scikit-learn',
            'React', 'Next.js', 'Node.js', 'Three.js',
            'tRPC', 'Drizzle', 'Tailwind CSS', 'Vite',
            'Electron', 'Google ADK', 'Gemini API',
            'Pygame', 'OpenCV', 'MediaPipe',
            'Chrome Extension API', 'Cheerio',
        ],
    },

    {
        title: 'Developer Tools',

        skills: [
            '/logos/git-plain.svg', '/logos/linux-original.svg', '/logos/docker-mark-ocean-blue.svg',
            '/logos/postgresql-original.svg', '/logos/sqlite-original.svg', '/logos/mongodb.svg',
            '/logos/turborepo.svg', '/logos/pnpm-original.svg', '/logos/vercel.svg',
            '/logos/unity-original.svg', '/logos/figma-original.svg', '/logos/d2_graphic.svg',
            '/logos/github-mark.svg', '/logos/vscode-original.svg', '/logos/visualstudio-plain.svg',
            '/logos/anaconda-original.svg', '/logos/pycharm-original.svg', '/logos/spyder-original.svg',
            '/logos/eclipse-original.svg', '/logos/prisma-original.svg', '/logos/sqlitebrowser.svg',
            '/logos/overleaf.svg',
        ],

        snames: [
            'Git', 'Linux', 'Docker',
            'PostgreSQL', 'SQLite', 'MongoDB',
            'Turborepo', 'pnpm', 'Vercel',
            'Unity', 'Figma', 'D2',
            'GitHub', 'VS Code', 'Visual Studio',
            'Anaconda', 'PyCharm', 'Spyder',
            'Eclipse', 'Prisma', 'SQLite Browser',
            'Overleaf',
        ],
    }
];

export default function Skills() {
    return (
        <TooltipProvider>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div suppressHydrationWarning className="theme-container" style={{ fontFamily: 'Cute Sunrise' }}>
                <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-14 pt-32 pb-28">
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
                                                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                                    {skill.skills?.map((skillImage, index) => (
                                                        <Tooltip key={skillImage}>
                                                            <TooltipTrigger asChild>
                                                                <Badge variant="default" className="transform transition hover:scale-110 p-2 h-16 w-16 flex items-center justify-center">
                                                                    <Image
                                                                        src={skillImage ?? '/logos/vercel.svg'}
                                                                        alt={skill.snames?.[index] ?? '???'}
                                                                        width={50}
                                                                        height={50}
                                                                        className="rounded-sm object-contain max-h-12 max-w-12"
                                                                        draggable={false}
                                                                    />
                                                                </Badge>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <span className="text-lg" style={{ fontFamily: 'Cute Sunrise' }}>
                                                                    {skill.snames?.[index] ?? '???'}
                                                                </span>
                                                            </TooltipContent>
                                                        </Tooltip>
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
        </TooltipProvider>
    );
}