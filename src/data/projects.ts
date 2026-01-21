export interface Project {
    id: string;
    title: string;
    summary: string;
    problem: string;
    scale: string;
    architecture: string;
    tradeoffs: string;
    result: string;
    nextSteps: string;
    technologies: string[];
    metrics: { label: string; value: string }[];
    image?: string;
    github?: string;
    live?: string;
    roles: ('ml-engineer' | 'genai-engineer' | 'data-analyst')[];
}

export const projects: Project[] = [
    {
        id: 'driving-style-classification',
        title: 'CNN-LSTM Driving Style Classification',
        summary: 'Deep learning model classifying driving styles from time-series operation data with 99.58% accuracy',
        problem: 'Traditional driving behavior analysis relied on rule-based systems that couldn\'t capture temporal patterns in driver operation data. Needed an ML approach to classify driving styles from time-series sensor data.',
        scale: '79,000+ records of driver operation time-series data with multiple sensor inputs',
        architecture: 'Data pipeline (Pandas cleaning → normalization → feature preparation) → CNN layer for spatial feature extraction → LSTM for temporal patterns → Bi-LSTM layer for bidirectional context → Dense classification head',
        tradeoffs: 'Chose Bi-LSTM over standard LSTM for better temporal context, accepting increased training time. Used Keras over PyTorch for faster prototyping. Implemented custom data pipeline for domain-specific preprocessing.',
        result: 'Achieved 99.58% accuracy, improving 2.05% over baseline CNN and 1.78% over standard CNN-LSTM. Validated using precision, recall, and accuracy metrics.',
        nextSteps: 'Would explore attention mechanisms for interpretability. Add real-time inference capability. Implement model quantization for edge deployment.',
        technologies: ['Python', 'TensorFlow/Keras', 'CNN', 'LSTM', 'Bi-LSTM', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
        metrics: [
            { label: 'Accuracy', value: '99.58%' },
            { label: 'Dataset Size', value: '79K+' },
            { label: 'Improvement', value: '+2.05%' },
        ],
        image: '/projects/cnn-lstm.png',
        roles: ['ml-engineer', 'data-analyst'],
    },
    {
        id: 'rag-chat-app',
        title: 'RAG Chat Application — Gemini + FAISS',
        summary: 'End-to-end RAG-based document Q&A system with multi-format ingestion and persistent vector indexing',
        problem: 'Users needed to query information from multiple document formats (PDF, DOCX, TXT) without manually searching. Required a system that could understand context and provide accurate, grounded answers.',
        scale: 'Multi-format document ingestion with persistent FAISS vector index, supporting session management and concurrent users via Streamlit',
        architecture: 'Document parsing (PyPDF, Python-DOCX) → Token-overlap chunking → Google Gemini embeddings → FAISS inner-product similarity indexing → Context retrieval → Gemini LLM answer generation → Streamlit UI',
        tradeoffs: 'Chose FAISS over cloud vector DBs for data privacy and zero latency. Used token-overlap chunking to preserve context at chunk boundaries. Implemented persistent index to avoid re-embedding on restart.',
        result: 'Built production-ready RAG pipeline with secure API key loading, session management, and comprehensive error handling. Users can query documents and get grounded, contextual answers.',
        nextSteps: 'Add hybrid search (semantic + keyword). Implement conversation memory. Explore fine-tuning embedding model on domain-specific data.',
        technologies: ['Python', 'Streamlit', 'Google Gemini API', 'FAISS', 'NumPy', 'Tiktoken', 'PyPDF', 'Python-DOCX'],
        metrics: [
            { label: 'Formats', value: '3 types' },
            { label: 'Vector Store', value: 'FAISS' },
            { label: 'LLM', value: 'Gemini' },
        ],
        github: 'https://github.com/gopichand-1551/Rag_bot.git',
        image: '/projects/rag-chat.png',
        roles: ['genai-engineer', 'ml-engineer'],
    },
    {
        id: 'wikipedia-agent',
        title: 'Wikipedia QA Agent — CrewAI + OpenRouter',
        summary: 'Agentic AI system that retrieves Wikipedia content and generates grounded, source-cited answers',
        problem: 'General LLMs often hallucinate facts. Needed a system that strictly grounds answers in retrieved Wikipedia content with explicit source citations.',
        scale: 'Multi-provider LLM support (GPT, Claude, LLaMA via OpenRouter), Wikipedia API with caching and rate limiting',
        architecture: 'CrewAI agent orchestration → Wikipedia search tool → Content extraction with caching → Rate-limited requests → OpenRouter LLM integration → Grounded answer synthesis → CLI + Streamlit UI with clickable citations',
        tradeoffs: 'Enforced strict no-hallucination policy by restricting answers to retrieved content only. Chose CrewAI over custom agent framework for faster development. Implemented caching for repeated queries.',
        result: 'Built modular, tested agent system with both CLI and web interface. All answers grounded in Wikipedia with clickable source citations. Zero tolerance for hallucinated content.',
        nextSteps: 'Add multi-hop reasoning for complex queries. Implement source ranking for relevance. Build feedback loop for answer quality improvement.',
        technologies: ['Python', 'CrewAI', 'LangChain', 'OpenRouter', 'Streamlit', 'Wikipedia API', 'Requests', 'Cachetools', 'PyTest'],
        metrics: [
            { label: 'LLM Providers', value: '3+' },
            { label: 'Hallucination', value: '0%' },
            { label: 'Test Coverage', value: 'PyTest' },
        ],
        github: 'https://github.com/gopichand-1551/Wikipedia-Q-A-Agent.git',
        image: '/projects/wiki-agent.png',
        roles: ['genai-engineer'],
    },
    {
        id: 'job-market-analysis',
        title: 'Job Market Insights & Skill Demand Analysis',
        summary: 'Exploratory Data Analysis on 79K+ job listings from 15K+ companies across five experience levels.',
        problem: 'Needed to understand trending skills and salary benchmarks to address skill shortages in cybersecurity and AI job markets.',
        scale: '79,000+ job listings, 15,000+ companies, multi-parameter analysis (salary, experience, skills).',
        architecture: 'Data Ingestion -> Cleaning (duplicate removal, missing value handling) -> EDA (salary benchmarking, skill frequency) -> Market Insight Generation -> 15-page Visualization Report.',
        tradeoffs: 'Prioritized data quality by removing 5K+ duplicates and handling 46% missing values. Chose high-coverage EDA over complex modeling for immediate actionable insights.',
        result: 'Identified 30% growth in AI job postings and established 6-9 LPA salary benchmarks. Provided cybersecurity skill-gap recommendations for a major bank.',
        nextSteps: 'Automate data collection via periodic scraping. Implement interactive Plotly dashboard for real-time trend monitoring.',
        technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Statistics'],
        metrics: [
            { label: 'Job Listings', value: '79K+' },
            { label: 'Visualizations', value: '12+' },
            { label: 'AI Job Growth', value: '30%' },
        ],
        github: 'https://github.com/gopichand-1551/EDA-Project-Job_Analysis-.git',
        image: '/projects/job-market.png',
        roles: ['data-analyst'],
    },
    {
        id: 'bank-customer-segmentation',
        title: 'Bank Customer Segmentation Analysis — Power BI',
        summary: 'Integrated Power BI project analyzing 1.04M transactions for customer segmentation and financial KPIs.',
        problem: 'Large volume of transaction records from multiple sources required an ETL pipeline and interactive visualization for business insights into demographics and spending.',
        scale: '1.04M+ transaction records across multiple accounts and demographics.',
        architecture: 'ETL Pipeline (Power Query) -> Data Modeling -> Custom DAX Measures -> Interactive Dashboard (Drill-through, Slicers, KPI Cards).',
        tradeoffs: 'Utilized data aggregation and custom measures to improve dashboard performance and reduce refresh time while maintaining drill-down detail.',
        result: 'Built interactive dashboards tracking volumes and peak activity. Improved refresh performance and provided real-time financial insights through map and card visuals.',
        nextSteps: 'Integrate machine learning models for predictive churn analysis and automated customer tiering.',
        technologies: ['Power BI', 'Power Query', 'DAX', 'ETL', 'Data Modeling', 'Financial Analytics'],
        metrics: [
            { label: 'Transactions', value: '1.04M+' },
            { label: 'Efficiency', value: 'Reduced Refresh' },
            { label: 'Insights', value: 'Real-time' },
        ],
        github: 'https://github.com/gopichand-1551/PowerBI_project.git',
        image: '/projects/bank-segmentation.png',
        roles: ['data-analyst'],
    },
    {
        id: 'sql-employee-management',
        title: 'Employee Management System — SQL',
        summary: 'Relational database system managing 1,000+ records with 3NF normalized schema and complex HR reporting.',
        problem: 'HR departments needed a robust, referentially consistent system to manage employee data, payroll, and leave-related correlations.',
        scale: '1,000+ employee records, 6 normalized relational tables.',
        architecture: 'Relational Schema (3NF) -> Database Implementation -> Advanced SQL (JOINs, Window Functions, Aggregates) -> HR Dashboard Reports.',
        tradeoffs: 'Enforced strict referential integrity (PK/FK) and cascading rules at the DB level, ensuring 100% consistency over insert speed.',
        result: 'Automated payroll summaries, salary benchmarking, and leave correlation reports. Provided targeted insights into highest credentials and upskilling needs.',
        nextSteps: 'Build a web-based administrative frontend and implement automated backup procedures.',
        technologies: ['SQL', 'PostgreSQL', 'Database Design', '3NF Normalization', 'Window Functions', 'Relational Modeling'],
        metrics: [
            { label: 'Normal Tables', value: '6' },
            { label: 'Complexity', value: '20+ Queries' },
            { label: 'Consistency', value: '100% RI' },
        ],
        github: 'https://github.com/gopichand-1551/my_projects.git',
        image: '/projects/sql-ems.png',
        roles: ['data-analyst'],
    },
    {
        id: 'icc-cricket-scraper',
        title: 'ICC Cricket Rankings Scraper & Analysis',
        summary: 'End-to-end data project scraping player rankings and performing EDA on batting trends.',
        problem: 'Collecting and structuring unstructured web data on cricket rankings for performance analysis.',
        scale: '224 Top Players, multiple performance columns across categories.',
        architecture: 'Web Scraper (Requests, BeautifulSoup) -> Pandas Structuring -> Data Cleaning -> Exploratory Data Analysis.',
        tradeoffs: 'Chose BeautifulSoup for efficient parsing of simple HTML structures with minimal overhead.',
        result: 'Completed full data lifecycle: extraction -> structuring -> analysis. Generated insights into batting trends within the top 224 rankings.',
        nextSteps: 'Extend scraper to capture historic tournament data and player-vs-pitch history.',
        technologies: ['Python', 'BeautifulSoup', 'Requests', 'Pandas', 'EDA', 'Web Scraping'],
        metrics: [
            { label: 'Players', value: '224' },
            { label: 'Columns', value: '7' },
            { label: 'Status', value: 'End-to-end' },
        ],
        github: 'https://github.com/gopichand-1551/Web_Scraping_project-EDA-.git',
        image: '/projects/icc-scraper.png',
        roles: ['data-analyst'],
    },
];

export function getProjectsByIds(ids: string[]): Project[] {
    return ids.map(id => projects.find(p => p.id === id)).filter(Boolean) as Project[];
}

export function getProjectsForRole(role: 'ml-engineer' | 'genai-engineer' | 'data-analyst'): Project[] {
    return projects.filter(p => p.roles.includes(role));
}
