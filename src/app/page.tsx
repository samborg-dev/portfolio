import "./globals.css";
import { Metadata } from "next/types";
import Link from "next/link";
import Image from "next/image";
import Confetti from "../components/confetti";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../components/ui/tooltip";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Sound } from "../components/sound";
import { PartyPopper, FileUser, Github, Linkedin } from 'lucide-react';
import SpinFlower from "@/components/flower";

const resume = "/resume.pdf";
const github = "https://github.com/samborg-dev";
const linkedin = "https://www.linkedin.com/in/samuel-xavier-borges/";

export const metadata: Metadata = {
  title: "Sam Borges",
  description: "Sam Borges is an undergraduate student at the University of Central Florida and an aspiring software engineer.",
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
    description: "Sam Borges is an undergraduate student at the University of Central Florida and an aspiring software engineer.",
  },
};

export default function SamPage() {
  return (
    <TooltipProvider>
      <div suppressHydrationWarning className="theme-container">
        {/* Flowers are pulled out of flow so they can never add page height */}
        <div className="fixed inset-0 z-0 flex items-end justify-center overflow-hidden pointer-events-none">
          <SpinFlower />
        </div>

        <div className="h-dvh overflow-hidden flex flex-col pt-20 sm:pt-24 lg:pt-28 pb-20 px-4 sm:px-8">
          <div className="top w-full max-w-6xl mx-auto flex-1 min-h-0 grid grid-cols-1 grid-rows-12 gap-2 sm:gap-3 lg:grid-cols-12 lg:gap-4">

            {/* TODO: replace placeholder copy */}
            <div className="min-h-0 row-start-4 row-span-3 lg:row-start-1 lg:row-span-5 lg:col-start-1 lg:col-span-7">
              <Card className="h-full overflow-hidden text-center lg:text-left">
                <CardHeader className="h-full justify-center p-4 lg:p-6">
                  <CardTitle className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold pb-1 lg:pb-3" style={{ fontFamily: 'Good Matcha' }}>
                    Lorem Ipsum
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="min-h-0 row-start-7 row-span-3 lg:row-start-6 lg:row-span-4 lg:col-start-1 lg:col-span-6">
              <Card className="h-full overflow-hidden text-center lg:text-left">
                <CardContent className="h-full flex items-center p-4 lg:p-6 text-xs sm:text-sm lg:text-base">
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="hidden min-h-0 lg:block lg:row-start-10 lg:row-span-3 lg:col-start-1 lg:col-span-4">
              <Card className="h-full overflow-hidden text-center lg:text-left">
                <CardContent className="h-full flex items-center p-4 lg:p-6 text-sm lg:text-base">
                  <p>Sunt in culpa qui officia deserunt mollit.</p>
                </CardContent>
              </Card>
            </div>

            <div className="min-h-0 row-start-1 row-span-3 lg:row-start-1 lg:row-span-3 lg:col-start-9 lg:col-span-4">
              <Card className="h-full overflow-hidden text-center">
                <CardHeader className="h-full justify-center items-center p-4 lg:p-6">
                  <CardTitle className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold pb-2" style={{ fontFamily: 'Good Matcha' }}>
                    Sam Borges
                  </CardTitle>
                  <CardDescription>
                    <Sound audioUrl="./meow.mp3">
                      <Badge className="transform transition hover:scale-110">
                        <Image src="/cat.gif" alt=":3" width={50} height={50} unoptimized draggable={"false"} />
                      </Badge>
                    </Sound>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="min-h-0 row-start-10 row-span-2 lg:row-start-4 lg:row-span-4 lg:col-start-8 lg:col-span-5">
              <Card className="h-full overflow-hidden">
                <CardContent className="h-full flex flex-row items-center justify-center p-3 lg:p-5 supertop">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="transform transition hover:scale-110 mx-2 sm:mx-5">
                        <Link href={resume} target="_blank">
                          <Button className="px-3 sm:px-6">
                            <FileUser className="w-4 h-4 sm:w-6 sm:h-6" />
                          </Button>
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-sm" style={{ fontFamily: 'Cute Sunrise' }}>
                        Resume
                      </span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="transform transition hover:scale-110 mx-2 sm:mx-5">
                        <Link href={github} target="_blank">
                          <Button className="px-3 sm:px-6">
                            <Github className="w-4 h-4 sm:w-6 sm:h-6" />
                          </Button>
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-sm" style={{ fontFamily: 'Cute Sunrise' }}>
                        Github
                      </span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="transform transition hover:scale-110 mx-2 sm:mx-5">
                        <Link href={linkedin} target="_blank">
                          <Button className="px-3 sm:px-6">
                            <Linkedin className="w-4 h-4 sm:w-6 sm:h-6" />
                          </Button>
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-sm" style={{ fontFamily: 'Cute Sunrise' }}>
                        Linkedin
                      </span>
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>
            </div>

            <div className="min-h-0 row-start-12 row-span-1 lg:row-start-8 lg:row-span-5 lg:col-start-7 lg:col-span-6">
              <Card className="h-full overflow-hidden">
                <CardFooter className="h-full items-center justify-center p-3 lg:p-6">
                  <Confetti>
                    <Sound audioUrl="./confetti.mp3">
                      <div className="transform transition scale-110 sm:scale-125 hover:scale-125 sm:hover:scale-150">
                        <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </Sound>
                  </Confetti>
                </CardFooter>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
