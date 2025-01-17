import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-row text-[#F5F1ED] bg-[#13293D] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        <div className="flex flex-col min-h-screen items-left justify-center pb-32 pt-16 pl-80 mr-10">
          <div className="flex items-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pb-20 pl-8">
            Hi, I'm Sam Borges
          </div>
          <div className="space-x-10">
            <Link href="/projects">
              <button className="bg-[#1B4465] hover:bg-[#246796] rounded-md text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-4 py-2 transform transition hover:scale-110">
                Projects
              </button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <button className="bg-[#1B4465] hover:bg-[#246796] rounded-md text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-4 py-2 transform transition hover:scale-110">
                Resume
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center ml-96 text-[#F5F1ED] bg-[#13293D] lg:text-2xl">
          lalala
        </div>
      </div>

      <footer>

      </footer>
    </>
  );
}
