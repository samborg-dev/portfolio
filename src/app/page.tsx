import "./globals.css";
import { Metadata } from "next";
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
        <div className="min-h-screen flex flex-col justify-center items-center text-center pb-10 px-4 sm:px-14"> 
          <div className="w-full">
            <Card className="max-w-xl mx-auto"> 
              <CardHeader>
                <CardTitle className="text-4xl sm:text-5xl font-bold pb-5" style={{ fontFamily: 'Good Matcha' }}>Sam Borges</CardTitle>
                <CardDescription>
                  <Sound audioUrl="./meow.mp3">
                    <Badge>
                      <Image src="/cat.gif" alt=":3" width={50} height={50} unoptimized />
                    </Badge>
                  </Sound>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row justify-center p-3 sm:p-5 supertop">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="transform transition hover:scale-110 mx-3 sm:mx-7">
                        <Link href={resume} target="_blank">
                          <Button className="px-3 sm:px-6">
                            <FileUser className="w-4 h-4 sm:w-6 sm:h-6" />
                          </Button>
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Resume</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="transform transition hover:scale-110 mx-3 sm:mx-7">
                        <Link href={github} target="_blank">
                          <Button className="px-3 sm:px-6">
                            <Github className="w-4 h-4 sm:w-6 sm:h-6" />
                          </Button>
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Github</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="transform transition hover:scale-110 mx-3 sm:mx-7">
                        <Link href={linkedin} target="_blank">
                          <Button className="px-3 sm:px-6">
                            <Linkedin className="w-4 h-4 sm:w-6 sm:h-6" />
                          </Button>
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Linkedin</TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
              <CardFooter>
                <Confetti>
                  <Sound audioUrl="./confetti.mp3">
                    <div className="transform transition scale-110 sm:scale-125 hover:scale-125 sm:hover:scale-150">
                      <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </Sound>
                </Confetti>
              </CardFooter>
            </Card>

            <SpinFlower />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}