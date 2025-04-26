import { School, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/scrollToSection";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt="Technology background"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-semibold mb-4">Results-Driven Software Engineer</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a Software Engineer specializing in cloud computing, scalable systems, backend development, 
              and object-oriented programming. With extensive experience building efficient data pipelines, 
              I focus on enhancing system performance and scalability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <School className="text-primary text-xl mr-2 mt-1"/>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-gray-600">MS in Computer Science, Portland State University</p>
                  <p className="text-gray-500 text-sm">September 2023 — June 2025</p>
                  <p className="text-gray-600">BE in Computer Science, Visvesvaraya Technological University</p>
                  <p className="text-gray-500 text-sm">August 2016 — June 2020</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-primary text-xl mr-2 mt-1"/>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">Portland, Oregon</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Let's connect 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
