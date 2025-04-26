import { experience } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 section-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="timeline relative pl-12">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item pb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start flex-wrap mb-2">
                    <h3 className="text-xl font-semibold text-primary">{job.company}</h3>
                    <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-1 font-medium">{job.title}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
