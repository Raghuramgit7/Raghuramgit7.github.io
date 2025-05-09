import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollToSection";



export default function Home() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-black">Hello, I'm</span>
              <span className="text-primary block">Raghuram</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Software Engineer specializing in cloud computing, scalable systems, and backend development.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button 
                className="bg-primary hover:bg-blue-800 text-white font-medium py-3 px-8 h-auto"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 h-auto"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </div>
            <div className="flex mt-8 space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/Raghuramgit7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/raghuram-gn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:raghuram0311@gmail.com"
                className="text-gray-600 hover:text-primary transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/Screenshot (75).png"
              alt="Raghuram G.N."
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl"
            />*/
          </div>
        </div>
      </div>
    </section>
  );
}
