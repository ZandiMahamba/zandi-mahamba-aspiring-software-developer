
import { ArrowDownIcon, GithubIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="section-container flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Coding Queen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Aspiring Software Developer with a passion for coding, problem-solving, and continuous learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild className="gap-2">
              <a href="#contact">
                <MailIcon className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDownIcon className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
