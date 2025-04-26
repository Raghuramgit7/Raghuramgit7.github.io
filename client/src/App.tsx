import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    // Section fade-in animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });
    
    document.querySelectorAll(".section-fade-in").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll(".section-fade-in").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-light text-dark font-sans">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
