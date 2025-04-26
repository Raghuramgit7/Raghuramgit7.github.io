import { Code, Layers, Database, Wrench } from "lucide-react";
import { skills } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-20 section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Code className="text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((language) => (
                <span 
                  key={language}
                  className="skill-badge px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium transition duration-300"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
          
          {/* Frameworks */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Layers className="text-accent text-xl" />
              </div>
              <h3 className="text-lg font-semibold">Frameworks & Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((framework) => (
                <span 
                  key={framework}
                  className="skill-badge px-3 py-1 bg-green-50 text-accent rounded-full text-sm font-medium transition duration-300"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
          
          {/* Databases */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <Database className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((db) => (
                <span 
                  key={db}
                  className="skill-badge px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium transition duration-300"
                >
                  {db}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                <Wrench className="text-orange-500 text-xl" />
              </div>
              <h3 className="text-lg font-semibold">Tools & Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <span 
                  key={tool}
                  className="skill-badge px-3 py-1 bg-orange-50 text-orange-500 rounded-full text-sm font-medium transition duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
