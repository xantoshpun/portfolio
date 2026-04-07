/**
 * ============================================================
 *  PORTFOLIO DATA — edit this file to update your site
 * ============================================================
 *  To update anything: find the right section below, change
 *  the text, save the file. No HTML/CSS knowledge needed.
 * ============================================================
 */

const PORTFOLIO = {

  // ── Identity ────────────────────────────────────────────
  name:      "Humendra Pun",
  initials:  "hp",
  location:  "United Kingdom",
  email:     "humendrapun2@gmail.com",

  social: {
    linkedin:  "https://www.linkedin.com/in/humendrapun/",
    github:    "https://github.com/humendrapun",
    instagram: "https://instagram.com/xantoshpun",
    resume:    "https://drive.google.com/file/d/1ZL4OMmD4Fs0m-SvoUHt0YCIhbsTmSd8W/view?usp=sharing"
  },

  // ── Hero ─────────────────────────────────────────────────
  // titles: cycles through in the typewriter animation
  titles: [
    "Data Analyst",
    "Python Developer",
    "Power BI Specialist",
    "ML Practitioner"
  ],
  heroBio: "MSc Software Engineering graduate turning raw data into actionable insights through Python, SQL, Power BI, and machine learning.",

  // ── About ────────────────────────────────────────────────
  // Use <strong>...</strong> for bold highlights
  aboutParagraphs: [
    "Hi! I'm <strong>Humendra Pun</strong> — a data professional with an MSc in Software Engineering from the <strong>University of West London</strong>, graduated with <strong>First-Class Honours</strong>.",
    "I specialise in transforming complex datasets into clear, <strong>actionable intelligence</strong> using Python, SQL, Power BI, and Excel. My background spans <strong>machine learning</strong>, big data analytics, and software engineering — giving me both the technical depth and the strategic mindset to solve real business problems.",
    "I'm passionate about using data to <strong>tell stories</strong> and build models that make a real impact. Whether it's a churn prediction model or an executive dashboard, I focus on insights that <strong>drive decisions</strong>."
  ],

  // ── Skills ───────────────────────────────────────────────
  // color options: "cyan" | "purple" | "green"
  skills: [
    {
      icon: "🐍",
      title: "Programming",
      color: "cyan",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "XGBoost", "Jupyter"]
    },
    {
      icon: "🗄️",
      title: "Data & Databases",
      color: "purple",
      tags: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "ETL", "Data Cleaning", "EDA"]
    },
    {
      icon: "📊",
      title: "Visualisation & BI",
      color: "green",
      tags: ["Power BI", "DAX", "Excel", "Tableau", "Pivot Tables", "Dashboards"]
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      color: "cyan",
      tags: ["Scikit-learn", "Classification", "Regression", "Feature Engineering", "Statistical Analysis", "A/B Testing", "Time Series"]
    },
    {
      icon: "⚙️",
      title: "Tools & Workflow",
      color: "purple",
      tags: ["Git", "Agile", "VS Code", "Jupyter Notebooks"]
    }
  ],

  // ── Projects ─────────────────────────────────────────────
  // Each project has a brief card view + full detail modal
  projects: [
    {
      id: "bank-churn",
      icon: "🏦",
      tech: "Python · Machine Learning",
      techColor: "cyan",
      title: "Bank Customer Churn Analysis",
      summary: "End-to-end Python analysis identifying key factors driving customer churn — from data cleaning through EDA to actionable business recommendations.",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      metrics: ["32.4% Germany churn rate", "25.1% female churn rate"],
      github: "https://github.com/xantoshpun/Bank-Customer-Churn-Analysis-",
      live: null,
      detail: {
        overview: "This project analyses customer churn for a bank using Python. Customer churn — the loss of clients — is a critical business problem. The analysis covers the full data science workflow: raw data ingestion, cleaning, EDA, and strategic recommendations.",
        objective: "Identify the key factors influencing customer churn and develop insights that help the bank reduce attrition and improve retention strategies.",
        phases: [
          {
            title: "Phase 1 — Data Understanding & Preparation",
            steps: [
              "Initial Data Exploration: load dataset, check dimensions, understand column structure and data types",
              "Data Quality Assessment: check for missing values, duplicates, inconsistencies, and validate ranges (Age, CreditScore)",
              "Data Cleaning: handle duplicates & missing values, remove unnecessary columns (RowNumber, CustomerId, Surname), fix data types"
            ]
          },
          {
            title: "Phase 2 — Exploratory Data Analysis (EDA)",
            steps: [
              "Univariate Analysis: distribution of numerical and categorical variables",
              "Bivariate Analysis: churn rate by each feature, comparative analysis of churned vs retained customers",
              "Target Variable Analysis: overall churn rate calculation and distribution visualisation"
            ]
          }
        ],
        findings: [
          "Germany has the highest churn rate at 32.4%",
          "Female customers churn at a higher rate (25.1%) than males",
          "Older customers churn more frequently",
          "Customers with fewer products are significantly more likely to churn"
        ],
        recommendations: [
          "Targeted retention campaigns in Germany with personalised offers",
          "Gender-specific engagement strategies for female customer segments",
          "Age-segmented loyalty programmes for older demographics",
          "Cross-sell products to single-product customers to improve stickiness"
        ]
      }
    },
    {
      id: "adventure-works",
      icon: "🚲",
      tech: "Power BI · Business Intelligence",
      techColor: "purple",
      title: "Adventure Works — Bike Shop Analysis",
      summary: "Multi-page interactive Power BI dashboard analysing sales performance, product trends, and customer insights for Adventure Works Bike Shop.",
      tools: ["Power BI", "DAX", "Data Modelling", "What-if Params", "Slicers"],
      metrics: ["$24.9M Revenue", "$10.5M Profit", "25.16K Orders", "2.17% Return Rate"],
      github: null,
      live: null,
      detail: {
        overview: "An interactive multi-page Power BI dashboard for Adventure Works Bike Shop, analysing sales performance, product trends, and customer behaviour across multiple dimensions and geographies.",
        objective: "Answer key business questions: What are overall revenue, profit, orders, and return rates? How has revenue trended over time? Which products and regions perform best? Who are the top customers?",
        phases: [
          {
            title: "Dashboard Pages Built",
            steps: [
              "Main Dashboard: high-level KPIs, revenue trend chart, top products with custom tooltip on bar chart",
              "Map View: geographic breakdown of orders and revenue by region",
              "Product Detail: drill-down into individual product performance with What-if revenue forecasting",
              "Customer Detail: customer segmentation, top customers by revenue and order volume"
            ]
          },
          {
            title: "Technical Implementation",
            steps: [
              "Imported Adventure Works dataset and built a star-schema relational data model",
              "Created DAX calculated fields and measures for all KPIs",
              "Implemented What-if parameters for interactive revenue forecasting scenarios",
              "Added slicers and cross-page filters for dynamic exploration"
            ]
          }
        ],
        findings: [
          "Total revenue reached $24.9M with $10.5M in profit",
          "25,160 orders placed with a healthy 2.17% return rate",
          "Mountain bikes drive the highest revenue segment",
          "Strong performance concentrated in North America and Europe"
        ],
        recommendations: [
          "Focus inventory investment on the top-performing mountain bike category",
          "Investigate return rate drivers in underperforming regions",
          "Leverage top customer insights to design loyalty and upsell programmes"
        ]
      }
    }
  ],

  // ── Education ────────────────────────────────────────────
  education: [
    {
      degree: "MSc Software Engineering",
      institution: "University of West London · London, UK",
      date: "Oct 2023",
      honour: "First-Class Honours",
      honourColor: "cyan",
      focus: ["Machine Learning", "Big Data Analytics", "Software Engineering", "Security Operations"]
    },
    {
      degree: "BSc Computing",
      institution: "Coventry University · Coventry, UK",
      date: "Jan 2021",
      honour: "Upper Second-Class Honours",
      honourColor: "purple",
      focus: ["IoT", "Web Development", "Database Systems", "OOP", "Mobile App Development"]
    }
  ],

  // ── Experience ───────────────────────────────────────────
  experience: [
    {
      role: "Data Analysis Internship",
      company: "Victoria Solutions",
      date: "Jul 2025",
      skills: ["Data Cleaning & Transformation", "Dashboard Development", "Statistical Analysis", "Predictive Modelling"]
    },
    {
      role: "Data Specialist",
      company: "CloudFactory",
      date: "Previous Role",
      skills: ["Large-scale Data Workflows", "Team Collaboration", "Data Quality Management"]
    }
  ],

  // ── Certifications ───────────────────────────────────────
  certifications: [
    { icon: "🗄️", name: "The Complete SQL Bootcamp",                   issuer: "Udemy",                    date: "Jul 2025" },
    { icon: "📊", name: "Power BI Desktop for Business Intelligence",   issuer: "Udemy",                    date: "Jul 2025" },
    { icon: "📋", name: "Microsoft Excel — Beginner to Advanced",       issuer: "Udemy",                    date: "Jul 2025" },
    { icon: "🐍", name: "Programming in Python",                        issuer: "Deerwalk Learning Center",  date: "Apr 2021" }
  ]

};
