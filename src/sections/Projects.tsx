import { motion } from "framer-motion";
import {Github, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { StarBorder } from "@/components/ui/star-border";

interface Contentprop {
  title: string;
  description?: string;
  imgLink: string;
  Github: string;
  Priview: string;
  ytLink?: string;
  tech: string[];
}
const content: Contentprop[] = [
  {
    title: "PlayerForm",
    description:
      "PlayerForm is an online platform that allows users to submit player details digitally, eliminating the need for paper forms. Responses are securely sent to the form creator, streamlining data collection and management.",
    imgLink: "/project1.png",
    Github: "https://github.com/me-safwan-07/Play-Form",
    Priview: "",
    tech: [
      "React","NodeJS", "Express", "MongoDB", "Prisma", "TailwindCSS", "Shadcn",
    ]
  },
  {
    title: "SuperHack-Flow",
    description:
      "This project was developed as a submission for the Level Supermind Hackathon. It provides a comprehensive solution to analyze social media performance metrics using DataStax Astra DB and Langflow for data handling and GPT-based insights generation.",
    imgLink: "/project2.jpg",
    Github: "https://github.com/me-safwan-07/SuperHackFlow",
    Priview: "",
    tech: [
      "React","NodeJS", "Express", "MongoDB", "TailwindCSS", "Shadcn",
    ],
    ytLink: "https://www.youtube.com/embed/vBK-2hLyv0k?si=smECiUoUq0XYl-aC"
  },
];



function Projects () {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full md:py-10 md:px-10"
    >
      {/* <ButtonColorful label="Selected Project" /> */}
      <div className="flex justify-center items-center mb-10">
        <TypingAnimation
          className="text-2xl md:text-4xl font-bold text-black dark:text-white"
          text="SELECTED PROJECTS"
        />
      </div>
      <div className="container mx-auto">
        {content.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className={cn(
              index === 1 ? "flex md:flex-row-reverse flex-col-reverse" : "flex md:flex-row flex-col-reverse",
              "gap-8 items-center justify-between pb-10"
            )}
          >
            <div className="md:w-1/2 w-full flex gap-4 flex-col">
              <div className="flex gap-4 w-full h-auto flex-col">
                <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-center md:text-left font-regular">
                  {project.title}
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-lg p-2 text-left">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                {project.tech.map((skill, index) => (
                  <Badge key={index}>
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-row flex-shrink-1 md:flex-row gap-4">
                {project.Github && (
                  <StarBorder onClick={() => window.open(project.Github, '_blank')}>
                    <div className="flex items-center justify-center">
                      Source Code <Github className="w-4 h-4 ml-2" />
                    </div>
                  </StarBorder>
                )}
                {project.Priview && (
                  <div 
                    onClick={() => window.open(project.Priview, '_blank')}
                    className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
                    <Button
                      className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                      variant="outline"
                    >
                      Preview
                    </Button>
                    <Button
                      className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                      variant="outline"
                      size="icon"
                      aria-label="Open link"
                    >
                      <SquareArrowOutUpRight size={16} strokeWidth={2} aria-hidden="true" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2 h-auto ">
              {project.ytLink ? (
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="top-in-bottom-out"
                  videoSrc={project.ytLink}
                  thumbnailSrc={project.imgLink}
                  thumbnailAlt="Hero Video"
                />
              ) : (
                <img src={project.imgLink} alt={project.title} />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export { Projects };
