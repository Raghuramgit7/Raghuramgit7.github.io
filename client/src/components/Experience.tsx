import React from "react";
import { experience } from "@/lib/constants";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline line for desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content card */}
                  <div className="w-full md:w-[45%]">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 text-primary mb-3">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm font-bold uppercase tracking-wider">{job.title}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-dark mb-1">{job.company}</h3>

                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>

                      <ul className="space-y-3">
                        {job.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute md:relative left-0 md:left-auto md:mx-8 top-0 md:top-auto w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10"></div>

                  {/* Spacer for other side on desktop */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
