export interface Skill {
    id: string;
    category: string;
    description: string;
    technologies: string[];
    usedIn: string[];
    icon: string; // Lucide icon name
    color: string; // Tailwind color class or hex
}

export const skills: Skill[] = [
    {
        id: 'llms-genai',
        category: 'LLMs & Generative AI',
        description: 'Building end-to-end RAG pipelines and autonomous Agentic AI workflows. Expertise in multi-format document ingestion, vector databases (FAISS), and LLM Quantization (INT8/INT4) for efficient local inference.',
        technologies: ['Google Gemini API', 'OpenRouter', 'Quantization (INT8/INT4)', 'FAISS', 'CrewAI', 'LangChain', 'Agent Architecture', 'Embeddings', 'Prompt Engineering'],
        usedIn: ['rag-chat-app', 'wikipedia-agent'],
        icon: 'Bot',
        color: '#c084fc',
    },
    {
        id: 'ml-engineering',
        category: 'Machine Learning',
        description: 'End-to-end ML pipelines from data preprocessing to model evaluation. Classification, regression, and statistical modeling with scikit-learn. Feature engineering and model validation.',
        technologies: ['Scikit-learn', 'Pandas', 'NumPy', 'Model Evaluation', 'Feature Engineering'],
        usedIn: ['driving-style-classification', 'job-market-analysis'],
        icon: 'Brain',
        color: '#22d3ee',
    },
    {
        id: 'deep-learning',
        category: 'Deep Learning',
        description: 'CNN, LSTM, and Bi-LSTM architectures for time-series classification. Model training and evaluation using TensorFlow/Keras and PyTorch. Achieved 99.58% accuracy on driving style classification.',
        technologies: ['PyTorch', 'TensorFlow/Keras', 'CNN', 'LSTM', 'Bi-LSTM', 'Model Training'],
        usedIn: ['driving-style-classification'],
        icon: 'Layers',
        color: '#06b6d4',
    },
    {
        id: 'data-analysis',
        category: 'Data Analysis & Statistics',
        description: 'Exploratory Data Analysis (EDA), hypothesis testing, probability and statistics. Regression analysis, descriptive and inferential statistics on large datasets.',
        technologies: ['Pandas', 'NumPy', 'Statistics', 'EDA', 'Hypothesis Testing', 'Regression Analysis'],
        usedIn: ['driving-style-classification', 'job-market-analysis', 'icc-cricket-scraper'],
        icon: 'Search',
        color: '#fb923c',
    },
    {
        id: 'visualization',
        category: 'Data Visualization & BI',
        description: 'Interactive dashboards and data storytelling with Power BI. Python visualization with Matplotlib and Seaborn. Excel analytics with Pivot Tables and VLOOKUP.',
        technologies: ['Power BI', 'Matplotlib', 'Seaborn', 'Excel', 'Pivot Tables', 'Charts'],
        usedIn: ['driving-style-classification', 'bank-customer-segmentation', 'job-market-analysis'],
        icon: 'BarChart3',
        color: '#fbbf24',
    },
    {
        id: 'sql-databases',
        category: 'SQL & Databases',
        description: 'MySQL database querying with JOINs, GROUP BY, and aggregations. Data extraction and manipulation for analysis workflows.',
        technologies: ['MySQL', 'SQL', 'JOINs', 'Aggregations', 'Data Extraction'],
        usedIn: ['driving-style-classification', 'sql-employee-management', 'bank-customer-segmentation'],
        icon: 'Table',
        color: '#4ade80',
    },
    {
        id: 'python-programming',
        category: 'Python Programming',
        description: 'Core Python development for data science and ML. Building modular, production-ready applications with proper error handling and testing.',
        technologies: ['Python', 'Streamlit', 'FastAPI', 'PyTest', 'Modular Architecture'],
        usedIn: ['rag-chat-app', 'wikipedia-agent', 'driving-style-classification', 'icc-cricket-scraper', 'job-market-analysis'],
        icon: 'Code2',
        color: '#2ecc71',
    },
    {
        id: 'tools-environment',
        category: 'Tools & Environment',
        description: 'Proficiency in essential development and data science tools. Streamlining workflows with Git, mastering database management, and leveraging collaborative research environments.',
        technologies: ['VS Code', 'Git', 'GitHub', 'Colab', 'Jupyter', 'MySQL', 'PostgreSQL', 'Postman', 'LLMs'],
        usedIn: [],
        icon: 'Wrench',
        color: '#94a3b8',
    },
];

export function getSkillsByIds(ids: string[]): Skill[] {
    return ids.map(id => skills.find(s => s.id === id)).filter(Boolean) as Skill[];
}
