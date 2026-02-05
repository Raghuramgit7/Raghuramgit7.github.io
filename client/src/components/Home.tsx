import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollToSection";
import myPhoto from "../assets/my-photo.png";
import { motion } from "framer-motion";
import React from "react";


export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Hello, I'm <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                Raghuram
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
              Software Engineer specializing in <span className="text-dark font-medium underline decoration-primary/30 underline-offset-4">Cloud Computing</span>, <span className="text-dark font-medium underline decoration-primary/30 underline-offset-4">Scalable Systems</span>, and <span className="text-dark font-medium underline decoration-primary/30 underline-offset-4">AI-Driven Solutions</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                className="bg-primary hover:bg-blue-600 text-white font-bold py-6 px-10 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-bold py-6 px-10 rounded-full transition-all hover:scale-105 active:scale-95"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </div>

            <div className="flex mt-12 space-x-6">
              {[
                { icon: <Github />, href: "https://github.com/Raghuramgit7", label: "GitHub" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/in/raghuramgn/", label: "LinkedIn" },
                { icon: <Mail />, href: "mailto:raghuram0311@gmail.com", label: "Email" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white border border-gray-100 shadow-sm text-gray-500 hover:text-primary hover:border-primary/30 transition-all hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {React.cloneElement(social.icon as React.ReactElement, { className: "w-6 h-6" })}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Image Frame Decor */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-[2.5rem] rotate-6 group-hover:rotate-0 transition-transform duration-500 -z-10 blur-sm opacity-20"></div>
              <div className="absolute inset-x-0 inset-y-0 border-2 border-gray-100 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10"></div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={myPhoto}
                  alt="Raghuram G.N."
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
