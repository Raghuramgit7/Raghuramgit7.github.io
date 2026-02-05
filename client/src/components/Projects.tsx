import { ExternalLink, Github, Code2 } from "lucide-react";
import { projects } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark text-white section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of my work spanning AI, Data Engineering, and Full-Stack Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-primary/50 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-primary/80 text-xs font-semibold uppercase tracking-wider mb-3">
                  {project.period}
                </p>

                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-md text-[10px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] text-gray-500 self-center">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                  <a
                    href={project.github || "https://github.com/Raghuramgit7"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-8"
            asChild
          >
            <a
              href="https://github.com/Raghuramgit7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
