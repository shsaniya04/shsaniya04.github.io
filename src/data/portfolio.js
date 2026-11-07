import docmindImg from "../assets/projects/docmind.webp";
import customerImg from "../assets/projects/customer-behavior.webp";
import superstoreImg from "../assets/projects/global-superstore.webp";

export const portfolio = {
  personal: {
    name: "Saniya Shaikh",

    role: "Data Science Student | Aspiring AI/ML Engineer",

    shortBio:
      "I build practical AI and data systems, from a document question-answering app that runs fully on a local machine to analytics dashboards that turn raw data into decisions.",

    email: "saniyashaikh6052@gmail.com",

    github: "https://github.com/shsaniya04",

    linkedin: "https://www.linkedin.com/in/saniya-shaikh-39b492297",
  },

  education: {
    degree: "B.E. Computer Science and Engineering (Data Science)",
    institution: "St. John College of Engineering and Management, Palghar, Maharashtra",
    duration: "2023 - 2027",
    cgpa: "CGPA 8.5 / 10",
    details:
      "Studying computer science with a specialization in data science, with a focus on programming, statistics, machine learning, and artificial intelligence.",
  },

  experience: [
    {
      role: "Data Analyst Intern",
      company: "Helllo Uniglobe Pvt. Ltd.",
      duration: "May 2026 - June 2026",
      points: [
        "Cleaned, transformed, and analyzed business datasets using Python, Pandas, NumPy, and SQL.",
        "Ran exploratory data analysis to find trends, patterns, and actionable business insights.",
        "Built data preprocessing, validation, analysis, and visualization workflows for data-driven requirements.",
      ],
    },
    {
      role: "ML Intern",
      company: "Testriq QA",
      duration: "Nov 2024 - Dec 2024",
      points: [
        "Built predictive models for concrete material strength using machine learning.",
        "Applied feature engineering, preprocessing, and model evaluation to improve prediction accuracy and stability.",
      ],
    },
  ],

  resume: {
    resumeFile: "/resume.pdf",

    achievements: [
      {
        title: "3rd Prize, Tech Prix Hackathon",
        description:
          "Developed and presented a technology-based solution.",
      },
      {
        title: "CIVIHACK Participant & Developer",
        description:
          "Contributed to CiviShare, a civic issue reporting and community platform.",
      },
    ],

    certifications: [
      {
        issuer: "Cinute Digital",
        note: "Industry oriented",
        courses: [
          "Machine Learning",
          "Data Analytics with Power BI",
          "Prompt Engineering",
        ],
      },
      {
        issuer: "Blessed IT Solution and Million Minds",
        note: "Industry oriented",
        courses: ["Applied Machine Learning using Python"],
      },
      {
        issuer: "LinkedIn Learning",
        note: "",
        courses: [
          "Machine Learning with Python: Foundations",
          "Python for Data Engineering: from Beginner to Advanced",
          "Introduction to Data Science",
          "Supervised Learning Essential Training",
        ],
      },
    ],
  },

  skills: {
    programming: [
      "Python",
      "SQL",
      "FastAPI",
      "Streamlit",
      "Git",
      "GitHub",
      "Jupyter Notebooks",
      "VS Code",
    ],

    dataScience: [
      "Data Analysis",
      "Data Cleaning",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Feature Engineering",
      "Model Evaluation",
    ],

    machineLearning: [
      "Machine Learning",
      "Scikit-learn",
      "XGBoost",
      "Regression",
      "Classification",
      "Model Deployment",
    ],

    ai: [
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "Neural Networks",
      "NLP",
      "Generative AI",
      "LLMs",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "Vector Databases",
      "LlamaIndex",
      "Ollama",
      "Prompt Engineering",
    ],

    businessIntelligence: [
      "Power BI",
      "Dashboard Development",
      "KPI Reporting",
      "Advanced Excel",
      "Pivot Tables",
      "Power Query",
      "VLOOKUP / XLOOKUP",
    ],
  },

  projects: [
    {
      number: "01",
      title: "DocMind AI",
      category: "Generative AI / RAG",
      description:
        "A document question-answering system that runs fully on your own machine. It uses hybrid retrieval and an evidence floor, so it declines to answer when the supporting evidence is weak. Evaluated with a 43-test harness, and the basis for two research manuscripts.",
      technologies: ["Python", "LlamaIndex", "Ollama", "Streamlit", "RAG"],
      github: "https://github.com/Amaann190/DocMind-AI",
      demo: "",
      image: docmindImg,
      imageAlt: "DocMind AI chat workspace with a source library panel",
    },

    {
      number: "02",
      title: "Customer Behavior Analysis",
      category: "Data Analytics / Power BI",
      description:
        "An interactive Power BI dashboard on customer purchasing behavior. It tracks customer count, average purchase amount and review rating, and breaks revenue and sales down by category, age group, subscription status, gender and shipping type.",
      technologies: ["Power BI", "Data Analysis", "KPI Reporting", "Dashboard Design"],
      github:
        "https://github.com/shsaniya04/Customer_Behavior_Analysis_Project",
      demo: "",
      image: customerImg,
      imageAlt: "Customer Behavior Dashboard built in Power BI",
    },

    {
      number: "03",
      title: "Global Superstore Analytics Dashboard",
      category: "Data Analytics / Power BI",
      description:
        "A Power BI dashboard for a global retail dataset. Filter by region and quarter to compare sales by category and segment, see sales by country on a map, follow yearly sales and profit from 2011 to 2014, and review shipping cost by ship mode.",
      technologies: ["Power BI", "Data Analysis", "Data Visualization", "KPI Reporting"],
      github:
        "https://github.com/shsaniya04/global-superstore-analytics-dashboard",
      demo: "",
      image: superstoreImg,
      imageAlt: "Global Superstore Analysis Dashboard built in Power BI",
    },
  ],

  research: {
    interests: [
      {
        title: "Retrieval-Augmented Generation",
        description:
          "Building private, local document intelligence systems that retrieve evidence first and abstain when that evidence is weak.",
      },
      {
        title: "Continual Learning",
        description:
          "Interested in how AI systems can keep learning from new data without losing what they already know, including catastrophic forgetting.",
      },
      {
        title: "AI Engineering",
        description:
          "Building practical, reliable, and useful AI systems that connect models with real-world applications.",
      },
    ],

    publications: [
      {
        title:
          "Experimental Evaluation of DocMind AI: Hybrid Retrieval, Evidence-Floor Abstention, and Resource-Aware Local RAG",
        type: "Experimental paper",
        status: "Manuscript",
      },
      {
        title:
          "Privacy-Preserving Hybrid Retrieval-Augmented Generation for Local Document Intelligence: A Systematic Review and Design Requirements for DocMind AI",
        type: "Review paper",
        status: "Manuscript",
      },
    ],
  },
};
