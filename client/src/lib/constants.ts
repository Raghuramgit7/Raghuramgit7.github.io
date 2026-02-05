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
    company: "Portland State University",
    title: "AI Research Engineer",
    period: "September 2025 - Present",
    responsibilities: [
      "Developing high-complexity datasets to benchmark and fine-tune frontier Large Language Models (LLMs), advancing agentic reasoning in software engineering.",
      "Designed and deployed realistic, multi-step coding simulations (DevOps, SRE, Debugging) to stress-test AI agents, targeting 'hard' reasoning gaps.",
      "Architected secure, deterministic Docker sandboxes simulating real-world broken build environments, ensuring 100% reproducibility for agent execution.",
      "Engineered rigorous validation pipelines using pytest and Bash, achieving 100% accuracy on Oracle solutions and eliminating false positives.",
      "Accelerated the creation of novel terminal-based evaluation tasks, producing high-fidelity training data that bridges academic benchmarks and developer workflows."
    ]
  },
  {
    company: "Pentachrome Technologies",
    title: "Software Engineer",
    period: "August 2022 - June 2023",
    responsibilities: [
      "Orchestrated telecom data engineering pipelines, migrating billing and CRM data from Amdocs/Oracle GoldenGate into Azure Databricks, Kafka, and Snowflake.",
      "Built and monitored Databricks workflows for Rated Usage ETL, ensuring SLAs for daily runs by handling retries and debugging complex Spark exceptions.",
      "Developed PySpark transformations for cleansing, deduplication, and Bronze → Silver → Gold modeling on Delta Lake tables with secure Azure Key Vault integration.",
      "Resolved critical production incidents and stabilized pipelines by tuning Spark job configurations and collaborating with cross-functional support teams.",
      "Delivered end-to-end ETL flows supporting Snowflake/Tableau dashboards used for high-level business reporting and performance monitoring."
    ]
  },
  {
    company: "NTT DATA Services",
    title: "Software Engineer",
    period: "November 2020 - August 2022",
    responsibilities: [
      "Built backend services for Geronimo, NTT DATA’s global resource management platform used to plan staffing and project financials across onshore/offshore teams.",
      "Designed robust REST APIs in Java/Spring Boot for resource allocation and expense tracking, implementing consistent response contracts and input validation.",
      "Modeled core business entities in MySQL with normalized schemas and optimized SQL/JPA queries to support real-time planning dashboards.",
      "Improved key allocation query performance from 500ms to under 300ms using indexing, projections, and pagination, keeping high-traffic screens responsive.",
      "Implemented server-side business rules, role-based access control (RBAC), and structured logging with correlation IDs to reduce release regressions.",
      "Increased system reliability by enforcing CI checks, Swagger/OpenAPI documentation, and automated JUnit testing for critical allocation flows."
    ]
  }
];

// Projects data
export const projects = [
  {
    title: "IDA – Iterative Development Agent",
    period: "Oct 2024 - Present",
    description: "Evolutionary Code Agent built with LangGraph to automate coding tasks. Improved code quality to a PERFECT pass rate across test tasks and reduced developer rework through an agentic feedback loop (coder-critic-fixer).",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    technologies: ["LangGraph", "Streamlit", "Python", "LLMs"],
    link: "https://riajxpksrtnh7pckcvl6x7.streamlit.app/",
    github: "https://github.com/Raghuramgit7/Iterative-Dev-Agent-IDA-"
  },
  {
    title: "AI Lawyer Custom (RAG Chatbot)",
    period: "Aug 2024 - Sept 2024",
    description: "Built a legal chatbot using Retrieval-Augmented Generation (RAG) with Llama 3.3 70B via Groq and LangChain. Features PDF analysis, automated legal report generation, and structured insights from case law using FAISS vector search.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070",
    technologies: ["Llama 3.3", "Groq", "LangChain", "FAISS", "Streamlit", "Python"],
    link: "https://github.com/Raghuramgit7/ai-lawyer-custom",
    github: "https://github.com/Raghuramgit7/ai-lawyer-custom"
  },
  {
    title: "ReceiptLens AI Processor",
    period: "June 2024 - July 2024",
    description: "Developed an expense tracking system using Google Cloud Vision for OCR and Google Gemini for structured data extraction. Transforms unstructured receipt images into clean JSON with automated categorization.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2072",
    technologies: ["Gemini AI", "Flask", "Next.js", "PostgreSQL", "Google Cloud Vision"],
    link: "https://github.com/Raghuramgit7/ReceiptLens-AI-Powered-Receipt-Processing-System-",
    github: "https://github.com/Raghuramgit7/ReceiptLens-AI-Powered-Receipt-Processing-System-"
  },
  {
    title: "TriMet GPS Data Pipeline",
    period: "April 2024 - May 2024",
    description: "Engineered a real-time data pipeline for transit analytics using Google Cloud Pub/Sub and PostgreSQL. Processes 1M+ GPS sensor readings daily with complex spatial-temporal joins and Mapbox visualizations.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2069",
    technologies: ["Python", "GCP Pub/Sub", "PostgreSQL", "Pandas", "Mapbox"],
    link: "https://github.com/Raghuramgit7/Data-engineering-Project",
    github: "https://github.com/Raghuramgit7/Data-engineering-Project"
  },
  {
    title: "Nutrition Facts AI Assistant",
    period: "March 2024 - April 2024",
    description: "Conversational RAG agent specialized in plant-based nutrition using Dr. Michael Greger’s transcripts. Integrates ChromaDB for vector retrieval and OpenAI for evidence-based responses with source citations.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=2064",
    technologies: ["OpenAI", "LangChain", "ChromaDB", "Streamlit", "Python"],
    link: "https://github.com/Raghuramgit7/Nutrition-Facts-ChatBot",
    github: "https://github.com/Raghuramgit7/Nutrition-Facts-ChatBot"
  },
  {
    title: "Cloud-Native Stock Analytics",
    period: "Jan 2024 - Feb 2024",
    description: "Flask microservice deployed on Google Cloud Run utilizing Finnhub and ExchangeRate APIs. Features real-time stock metrics, currency conversion, and persistence via G Cloud Datastore.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070",
    technologies: ["Flask", "Docker", "GCP", "REST API", "Finnhub"],
    link: "https://github.com/Raghuramgit7/Stock-Currency-Converter-",
    github: "https://github.com/Raghuramgit7/Stock-Currency-Converter-"
  },
  {
    title: "BookTown E-commerce",
    period: "Dec 2023 - Jan 2024",
    description: "Responsive front-end bookstore application with a focus on seamless user experience. Implemented complex cart logic and dynamic product rendering using vanilla JavaScript and local storage.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2090",
    technologies: ["HTML/CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/Raghuramgit7/Web-application/tree/main/BookTown-Proj-main",
    github: "https://github.com/Raghuramgit7/Web-application/tree/main/BookTown-Proj-main"
  }
];
