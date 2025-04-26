// Skills data
export const skills = {
  languages: [
    "Java", 
    "Python", 
    "JavaScript", 
    "SQL", 
    "C", 
    "HTML/CSS", 
    "Bash"
  ],
  frameworks: [
    "NextJS", 
    "ReactJS", 
    "Flask", 
    "Bootstrap", 
    "Pandas", 
    "TensorFlow"
  ],
  databases: [
    "MySQL", 
    "PostgreSQL", 
    "RDBMS", 
    "MongoDB"
  ],
  tools: [
    "Docker", 
    "Kubernetes", 
    "Git", 
    "Terraform", 
    "Azure", 
    "GCP", 
    "Kafka", 
    "Power BI"
  ]
};

// Experience data
export const experience = [
  {
    company: "Pentachrome Technologies",
    title: "Software Engineer",
    period: "September 2022 - June 2023",
    responsibilities: [
      "Collaborated in a 5-member team to optimize ETL workflows by refining queries, achieving a 70% reduction in retrieval time and a 50% improvement in data processing efficiency, enabling faster enterprise decision-making.",
      "Optimized SQL query performance and improved code quality by refining stored procedures, debugging with PySpark, and resolving critical incidents, achieving a 2x improvement in query execution speed for enhanced report generation and user experience.",
      "Leveraged Kafka for real-time data streaming, achieving a 60% reduction in ETL pipeline latency and boosting data throughput. Enhanced scalability and seamless handling of high-volume datasets."
    ]
  },
  {
    company: "NTT DATA Services",
    title: "Software Engineer",
    period: "November 2020 - August 2022",
    responsibilities: [
      "Engineered custom Power Apps, boosting user satisfaction and task efficiency by 25% through agile development and user-focused UI design.",
      "Contributed to developing RESTful APIs using Spring Boot in Java, emphasizing modularity and separation of concerns in microservices. Improved scalability and reduced API latency by 30%, enabling seamless enterprise workflows.",
      "Optimized API performance, cutting query time from 500ms to under 300ms by efficiently using MySQL with JPA/Hibernate. Enhanced scalability to support high-volume transactions with minimal latency."
    ]
  }
];

// Projects data
export const projects = [
  {
    title: "TriMet GPS Data Engineering Project",
    period: "April 2024 - May 2024",
    description: "Built a scalable data pipeline using Python and Google Cloud Pub/Sub, processing over 1 million GPS sensor readings daily for transit analytics.",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Python", "GCP", "PostgreSQL", "Pandas"],
    link: "https://github.com/Raghuramgit7"
  },
  {
    title: "BookTown E-commerce Platform",
    period: "January 2024 - March 2024",
    description: "Designed a responsive e-commerce bookstore with user authentication, shopping cart, order placement, and secure payment integration.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80",
    technologies: ["HTML/CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/Raghuramgit7"
  },
  {
    title: "Cloud-Native Stock & Currency Converter",
    period: "April 2024 - June 2024",
    description: "Engineered a cloud-native backend application using Google Cloud Run and Docker, optimizing API response times by 50%.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Flask", "Docker", "GCP", "REST API"],
    link: "https://github.com/Raghuramgit7"
  }
];
