import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sam Borges",
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



export default function Home() {
  return (
    <div className="flex items-center justify-center text-[#F5F1ED] bg-[#13293D] min-h-screen">
      <div className='flex flex-row items-start justify-evenly '>
        <div className="flex flex-row items-center justify-center">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-10">
            Hi I&apos;m Sam Borges
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="px-10">
            <Link href="/projects">
              <button className="text-[#F5F1ED] bg-[#1B4465] p-10 rounded-3xl transform transition sm:scale-90 hover:scale-100 border-solid border-[#F5F1ED] border-4 shadow-xl shadow-transparent hover:shadow-[#F5F1ED] mb-10 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-10 py-4">
                Projects
              </button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <button className="text-[#F5F1ED] bg-[#1B4465] p-10 rounded-3xl transform transition sm:scale-90 hover:scale-100 border-solid border-[#F5F1ED] border-4 shadow-xl shadow-transparent hover:shadow-[#F5F1ED] mb-10 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-10 py-4">
                Resume
              </button>
            </Link>
          </div>
        </div>

      </div>

    </div>


  );
}