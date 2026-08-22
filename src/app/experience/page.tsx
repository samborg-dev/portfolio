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
        title: 'Undergraduate Research Assistant',
        subtitle: 'Unary Lab - University of Central Florida',
        subsubtitle: 'May 2026 - Present',
        image: '/logos/unary.svg',
        body:
            [
                '• Characterized the Llama-2-7B inference workload for the Mugi LLM accelerator by classifying all 2,500+ per-pass operations into four hardware execution buckets, then generating a validated ONNX graph consumed by the lab’s cost/cycle simulator.',
                '• Rearchitected the Python/PyTorch profiling pipeline to replace per-model if/else dispatch with a plugin adapter registry, uncovering and fixing a latent binning-format defect that had silently broken instrumentation for every model outside the one hardcoded configuration, unblocking profiling for additional architectures.',
                '• Designed a one-shot profiling API producing per-layer lookup-table configs and hardware workload specs from a single config object, through a pluggable strategy/criterion sizer validated end-to-end against the simulator on an NCSA Delta HPC cluster, collapsing per-layer hand-editing into one command.',
                '• Designed an in process evaluation harness that repatches lookup tables in place rather than reloading a 13GB model per layer, converting a 32 round manual search into one unattended job that sweeps a 16-window grid at every layer, seeded per layer from measured exponent histograms.'
            ]
    },
    {
        title: 'Hackathon Organizer',
        subtitle: 'Knight Hacks',
        subsubtitle: 'April 2025 - January 2026',
        image: '/logos/KH2025Small.svg',
        body:
            [
                '• Assisted in the planning and execution of Knight Hacks VIII, a hackathon of 1,000+ attendees and 60+ events.', 
            ]
    },
    {
        title: 'Software Engineer',
        subtitle: 'Knight Hacks',
        subsubtitle: 'February 2025 - January 2026',
        image: '/logos/white-kh-logo.svg',
        body:
            [
                '• Drove site accessibility to WCAG 2.1 AA keyboard navigation compliance by building 15 reusable React UI components that replaced non-semantic SVG elements with properly labeled, ARIA attributed alternatives.',
                '• Engineered an email automation system from scratch, delivering personalized acceptance, denial, and event-detail communications to 1,000+ applicants for one of Florida’s largest hackathons.',
                '• Built a database backed email queue service and admin console, adding a four tier priority scheduling, batch recipient validation, and date-range blacklisting to replace ad hoc one off send calls across the platform.'
            ]
    },
    {
        title: 'Software Engineer Intern',
        subtitle: 'Data-Enabled Photovoltaics',
        subsubtitle: 'May 2025 - August 2025',
        image: '/logos/DPV.png',
        body:
            [
                '• Automated parsing and normalization of heterogeneous metadata across five instrument sources by developing an object-oriented Python parser with Pandas and SQLite, reducing manual preprocessing time by over 75%.',
                '• Defined and validated FAIR data model standards across 5 pipelines, integrating workflow outputs to preserve metadata provenance through cross pipeline handoffs and make downstream analyses reproducible from raw capture to database record.',
                '• Unified EXIF and TIFF metadata from electroluminescence camera captures with binary Sinton flash-test records into one normalized SQLite schema, adding per file failure logging that surfaced malformed captures instead of silently dropping them.',
                '• Documented the parser/outputer/database separation with an extension guide and D2 architecture diagrams, giving non programmer researchers a path to onboard new instrument types without modifying existing pipeline code.',
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