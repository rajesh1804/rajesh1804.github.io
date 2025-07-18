export const fulltimeJobs = [
  {
    company: 'BlueCat Networks',
    location: 'Toronto, Canada',
    roles: [
      {
        title: 'Data Scientist II',
        duration: 'July 2024 - Present',
        points: [
          'Designed and deployed a Retrieval-Augmented Generation (RAG) chatbot to streamline real-time network diagnostics, reducing incident triage time by 40%.',
          'Built time series forecasting models (Exponential Smoothing, ARIMA) to predict infrastructure metrics, improving capacity planning accuracy by 30%.',
        ],
      },
      {
        title: 'Data Scientist',
        duration: 'January 2024 - July 2024',
        points: [
          'Built an anomaly detection system for network packet drops and TCP anomalies, achieving 92% precision and cutting false alerts by 40% across 500+ client devices.',
        ],
      },
    ],
  },
  {
    company: 'JP Morgan Chase',
    location: 'Bangalore, India',
    roles: [
      {
        title: 'Software Engineer 2 - SEP',
        duration: 'January 2022 - August 2022',
        points: [
          'Led design of a centralized data lake (HDFS/YARN) with 15+ TB data; optimized SQL queries, reducing runtime by 60%.',
          'Led a PoC migration to AWS EKS + Snowflake, improving scalability and reducing costs by ~20%.',
        ],
        accolades: ['Execution excellence (Q1 2022) for outstanding delivery in cross-functional initiatives.'],
      },
      {
        title: 'Software Engineer - SEP',
        duration: 'August 2020 - January 2022',
        points: [
          'Built a production-ready ETL framework in PySpark handling 10M+ records/day (5+ TB).',
          'Migrated legacy jobs to this system, reducing runtime from 45 mins to 4 mins (11x speedup), added schema validation and alerts.',
        ],
        accolades: ['Execution excellence (Q4 2020) for outstanding delivery in cross-functional initiatives.'],
      },
    ],
  },
];
