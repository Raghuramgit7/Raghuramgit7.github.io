import React from "react";
import { School, MapPin, GraduationCap, Laptop } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50/50 section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            {/* Visual Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-2xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary/30 rounded-br-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1472&q=80"
              alt="Workspace and technology"
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video lg:aspect-square"
            />
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-dark mb-6">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Results-Driven Software Engineer</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              I'm a Software Engineer specializing in cloud computing, scalable systems, and AI-driven solutions.
              My focus is on bridging the gap between complex backend architectures and intelligent, user-centric experiences.
              With a strong foundation in MS Computer Science and real-world experience in ETL workflows and API design,
              I build systems that are not just functional, but highly performant and scalable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-dark mb-1">Education</h4>
                <p className="text-gray-500 text-sm mb-2">MS Computer Science</p>
                <p className="text-primary text-xs font-bold uppercase">Portland State University</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-dark mb-1">Location</h4>
                <p className="text-gray-500 text-sm mb-2">Based in</p>
                <p className="text-blue-500 text-xs font-bold uppercase">Portland, Oregon</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 mb-4">
                  <Laptop className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-dark mb-1">Specialization</h4>
                <p className="text-gray-500 text-sm mb-2">Design & Development</p>
                <p className="text-green-500 text-xs font-bold uppercase">Scalable Systems</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-4">
                  <School className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-dark mb-1">Undergrad</h4>
                <p className="text-gray-500 text-sm mb-2">BE Computer Science</p>
                <p className="text-purple-500 text-xs font-bold uppercase">VTU, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
