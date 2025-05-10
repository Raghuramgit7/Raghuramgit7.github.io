import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-semibold flex items-center">
              <span className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">
                Raghuram
              </span>
              Raghuram G.N.
            </a>
            <p className="text-gray-400 mt-2">
              Software Engineer specializing in cloud computing and backend development
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Raghuramgit7" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/raghuramgn/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:raghuram0311@gmail.com" 
              className="text-gray-400 hover:text-white transition"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Raghuram Gudemaranahalli Nataraja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
