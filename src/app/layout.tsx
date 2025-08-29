import "./globals.css";
import { ThemeProvider, ThemeToggle } from "../components/ui/theme";
import type { Metadata, Viewport } from "next/types";
import { GeistSans } from "geist/font/sans"; 
import { GeistMono } from "geist/font/mono";
import Navbar from "../components/ui/navbar";
//import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sam Borges",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#C1CEFE" },
    { media: "(prefers-color-scheme: dark)", color: "#624CAB" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="theme-container">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <Navbar />
            <div>
              {props.children}
            </div>
            <div className="top">
              <div className="fixed bottom-10 justify-center items-center flex w-full">
                <ThemeToggle />
              </div>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
