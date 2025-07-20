// src/data/projectData.js

export const projects = [
  {
    title: "ThreadNavigatorAI : Reddit-style Summarizer, Moderator & Reply Assistant (Agentic RAG)",
    duration: "2025",
    links: {
      article: "https://rajesh1804.medium.com/threadnavigatorai-reddit-style-thread-summarizer-moderator-reply-assistant-powered-by-b4d52126c454",
      live: "https://huggingface.co/spaces/rajesh1804/ThreadNavigatorAI",
      github: "https://github.com/rajesh1804/ThreadNavigatorAI"
    },
    description: {
      what: "ThreadNavigatorAI is a Reddit-style AI assistant that summarizes threads, flags bias/trolling, and suggests smart replies using multi-agent LangGraph workflows and OpenRouter LLMs.",
      why: "Reddit-style threads are chaotic — this project demonstrates how AI agents can contextually navigate and moderate discussions in real-time using Agentic RAG.",
      highlights: [
        "Multi-agent pipeline using LangGraph + Mistral-7B via OpenRouter.",
        "RAG using Sentence-BERT + Weaviate Cloud Vector DB.",
        "LLM-powered moderation and sarcasm/trolling detection.",
        "Smart Reddit-style reply generation with prompt injection guardrails.",
        "Verbose latency tracking and retry logic via Tenacity.",
        "Polished UI with Tabs, Demo Mode, and Sample Evaluations."
      ]
    }
  },
  {
    title: "StreamWiseAI : AI-Powered Movie Recommender & Retention Coach",
    duration: "2025",
    links: {
      article: "https://rajesh1804.medium.com/streamwiseai-an-ai-powered-movie-recommender-with-a-retention-coach-agent-b9b54319805f",
      live: "https://huggingface.co/spaces/rajesh1804/StreamWiseAI",
      github: "https://github.com/rajesh1804/StreamWiseAI"
    },
    description: {
      what: "StreamWiseAI is a Netflix-style AI recommender combining semantic search and an LLM-powered Retention Coach Agent using free-tier tools like Sentence-BERT and OpenRouter.",
      why: "It answers not just 'what to watch' but 'why you'll like it', enhancing personalization and engagement.",
      highlights: [
        "Semantic Recommendations using SBERT embeddings.",
        "LLM Agent generating content insights (OpenRouter Mistral-7B).",
        "Fuzzy Matching for typo resilience.",
        "Session-aware personalization.",
        "Latency-aware retries using Tenacity.",
        "Fully deployable via Streamlit + Hugging Face Spaces."
      ]
    }
  },
  {
    title: "RideCastAI : Real-Time ETA & Fare Prediction Engine for Ride-Hailing",
    duration: "2025",
    links: {
      article: "https://rajesh1804.medium.com/ridecastai-real-time-dynamic-pricing-eta-prediction-engine-for-ride-hailing-apps-2d4e3b8b57a5",
      live: "https://huggingface.co/spaces/rajesh1804/RideCastAI",
      github: "https://github.com/rajesh1804/RideCastAI"
    },
    description: {
      what: "RideCastAI is a real-time ML-powered engine predicting ETA and fare ranges for ride-hailing using NYC taxi data.",
      why: "Bridges the gap between black-box pricing models and explainable, real-time, quantile-aware ML solutions.",
      highlights: [
        "ETA prediction with XGBoost using engineered time features.",
        "Fare uncertainty via Quantile Regression (P10, P50, P90).",
        "Latency logging visible in the UI.",
        "Interactive heatmaps built using Plotly.",
        "End-to-end deployable with GitHub + Hugging Face Spaces.",
        "Smart feature encodings for rush-hour, weekends, etc."
      ]
    }
  },
  {
    title: "GroceryGPT+ : Personalized LLM-Powered Product Search Engine",
    duration: "2025",
    links: {
      article: "https://medium.com/@rajesh1804/grocerygpt-how-i-built-a-personalized-grocery-search-engine-with-llms-vector-dbs-zero-cloud-fbacddf0feef",
      live: "https://huggingface.co/spaces/rajesh1804/GroceryGPT",
      github: "https://github.com/rajesh1804/GroceryGPT"
    },
    description: {
      what: "GroceryGPT+ is a semantic AI product search engine — like a private shopping ChatGPT using open-weight LLMs.",
      why: "It transforms shopping by understanding natural language, re-ranking results, and personalizing experience without user login.",
      highlights: [
        "LLM-based re-ranking via OpenRouter APIs.",
        "Query-aware personalization engine.",
        "Semantic vector search via MiniLM + Weaviate.",
        "Startup-safe fallback models.",
        "LRU caching for latency control.",
        "Zero-cloud backend — 100% portable."
      ]
    }
  },
  {
    title: "Quantifying Uncertainty in Ensemble Learning",
    duration: "October 2022 - December 2022",
    links: {
      github: "https://github.com/rajesh1804/"
    },
    details: `Explores aleatoric and epistemic uncertainty in ensemble learning through Bayesian inference. Includes experimental comparison of GBDT (SGB/SGLB) and Random Forests using synthetic + real-world datasets. Evaluates predictive uncertainty and its role in detecting errors and out-of-domain inputs.`
  },
  {
    title: "Active Learning Strategies for NLP Classification",
    duration: "October 2022 - December 2022",
    links: {
      github: "https://github.com/rajesh1804/"
    },
    details: `Compares Active Learning (AL) query strategies with Weak Supervision (Snorkel, Snuba, ASTRA) on real-world NLP datasets. Demonstrates that actively sampled data outperforms weakly supervised baselines, using models like Bayesian optimization and iterative labeling feedback.`
  },
  {
    title: "Covid19 Stats Dashboard",
    duration: "May 2020",
    links: {
      live: "https://covid19app-5f5d3.web.app/",
      github: "https://github.com/rajesh1804/covid19"
    },
    details: `A PWA dashboard built using React.js + Redux fetching live COVID stats from open APIs. Auto-refresh every 15 minutes, installable on all platforms (Android/iOS/Mac/Windows).`
  },
  {
    title: "Detection of Phishing in Websites",
    duration: "March 2019",
    links: {
      github: "https://github.com/rajesh1804/Detection-of-Phishing-in-Websites"
    },
    details: `A Python-based phishing URL detector using ML and 17 website attributes to classify links as legitimate or malicious.`
  },
  {
    title: "Image Based Attendance Marker",
    duration: "Feb 2017 - Apr 2017",
    details: `Built in MATLAB, this system uses images from webcams to segment and match faces with a student database to record attendance.`
  },
  {
    title: "Realtime Weather Monitoring App",
    duration: "Feb 2018",
    details: `Java + Arduino app for real-time temperature & humidity monitoring. Sends sensor data to Firebase and displays it in an Android app.`
  },
  {
    title: "Classic Pong",
    duration: "June 2019",
    links: {
      github: "https://github.com/rajesh1804/Detection-of-Phishing-in-Websites"
    },
    details: `Multiplayer Pong game built in Python using the Turtle module. Simple and fast retro gameplay.`
  },
  {
    title: "Connect 4 Game",
    duration: "June 2019",
    links: {
      github: "https://github.com/rajesh1804/Connect-Four-Java-Application"
    },
    details: `Java + JavaFX implementation of the classic Connect 4 game with modular code and UI components.`
  }
];
