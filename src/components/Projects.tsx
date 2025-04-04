
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with React and Tailwind CSS.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Project Management App",
      description: "A tool to help teams organize and track project milestones.",
      tags: ["JavaScript", "Node.js", "MongoDB"],
      githubLink: "#",
      liveLink: "#", 
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts.",
      tags: ["JavaScript", "API Integration", "CSS"],
      githubLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A showcase of my projects, including personal and educational work. 
          Each project demonstrates different skills and concepts I've learned.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="animate-slide-up h-full flex flex-col justify-between" 
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <GithubIcon className="h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
