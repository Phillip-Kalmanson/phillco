import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Github } from "lucide-react";
  
  const projects = [
    {
      title: "Fish Detection API",
      stack: "Python, FastAPI, TensorFlow",
      description:
        "AI model that detects fish species from images. Custom-trained and deployed with FastAPI.",
      link: "https://github.com/Phillip-Kalmanson/FishIdentification",
    },
    {
      title: "Python Minesweeper Clone",
      stack: "Python, PyGame",
      description:
        "A 1 day programming challenge; recreating the classic windows game Minesweeper",
      link: "https://github.com/Phillip-Kalmanson/Sweeper",
    },
    {
      title: "Edge Detection using OpenCV",
      stack: "Python, OpenCV",
      description:
        "Edge Detection for machine vision and pattern recogintion",
      link: "https://github.com/Phillip-Kalmanson/Edge-Detection",
    },
    {
      title: "AlgoEz",
      stack: "React",
      description:
        "A react app highlighting several searching and sorting algorithms.",
      link: "https://github.com/Phillip-Kalmanson/AlgoEz",
    },
    {
      title: "Hexadecimel Color Guessing Game",
      stack: "React",
      description:
        "A quick game I built on react to test my skills, both in react and hex colors",
      link: "https://github.com/Phillip-Kalmanson/hex_color_app",
    },
    {
      title: "Phillco.com",
      stack: "React",
      description:
        "The source code to this very website :)",
      link: "https://github.com/Phillip-Kalmanson/phillco",
    },
  ];
  
  export default function Projects() {
    return (
      <section
        id="projects"
        className="max-w-6xl mx-auto px-4 py-24 text-white space-y-16"
      >
        <h2 className="text-4xl font-extrabold text-center">Projects</h2>
  
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="bg-gradient-to-br from-[#1d1d1d]/80 to-[#121212]/80 border border-white/10 rounded-xl shadow-md hover:scale-[1.01] transition-all duration-300"
            >
              <CardHeader className="pb-0">
                <CardTitle className="text-lg font-semibold text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-400">
                  {project.stack}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="text-sm text-white/90 leading-relaxed">
                  {project.description}
                </p>
                <Button
                  asChild
                  className="w-full justify-center gap-2 bg-white text-black hover:bg-gray-200"
                >
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4" /> View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }
  