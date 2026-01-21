import { Role } from '@/context/RoleContext';

export interface RoleContent {
    hero: {
        headline: string;
        subheadline: string;
        cta: string;
    };
    skillPriority: string[];
    projectPriority: string[];
    resume: string;
}

export const roleContent: Record<Role, RoleContent> = {
    'ml-engineer': {
        hero: {
            headline: 'Building End-to-End ML Pipelines',
            subheadline: 'Deep learning models with 99.58% accuracy on real-world datasets. Specializing in time-series classification, CNN-LSTM architectures, and production-oriented ML systems.',
            cta: 'View ML Projects',
        },
        skillPriority: ['ml-engineering', 'deep-learning', 'data-analysis'],
        projectPriority: ['driving-style-classification', 'job-market-analysis', 'rag-chat-app', 'wikipedia-agent'],
        resume: '/resumes/resume-ml-engineer.pdf',
    },
    'genai-engineer': {
        hero: {
            headline: 'Architecting RAG Pipelines & Agentic AI',
            subheadline: 'Production RAG systems with FAISS vector indexing, multi-format document ingestion, and agentic workflows using CrewAI. Building AI that retrieves, reasons, and responds.',
            cta: 'Explore GenAI Work',
        },
        skillPriority: ['llms-genai', 'rag-systems', 'agentic-ai'],
        projectPriority: ['rag-chat-app', 'wikipedia-agent', 'icc-cricket-scraper', 'driving-style-classification'],
        resume: '/resumes/resume-genai-engineer.pdf',
    },
    'data-analyst': {
        hero: {
            headline: 'Transforming Data into Actionable Insights',
            subheadline: 'Comprehensive data analysis with SQL, Python, and Power BI. Statistical modeling, EDA, and visualization on large-scale datasets (79,000+ records).',
            cta: 'See Analytics Projects',
        },
        skillPriority: ['data-analysis', 'visualization', 'sql-databases'],
        projectPriority: ['job-market-analysis', 'bank-customer-segmentation', 'sql-employee-management', 'icc-cricket-scraper'],
        resume: '/resumes/resume-data-analyst.pdf',
    },
};

export const roleLabels: Record<Role, string> = {
    'ml-engineer': 'ML Engineer',
    'genai-engineer': 'GenAI Engineer',
    'data-analyst': 'Data Analyst',
};

export const personalInfo = {
    name: 'Anabathula Gopichand',
    firstName: 'Gopichand',
    title: 'Machine Learning Engineer | GenAI Engineer',
    email: 'gopichandanabathula1551@gmail.com',
    phone: '+91 7569165652',
    location: 'Hyderabad, Telangana',
    linkedin: 'https://linkedin.com/in/anabathula-gopichand-679946334',
    github: 'https://github.com/gopichand-1551',
    certifications: 'https://github.com/gopichand-1551/certifications.git',
    profileImage: '/image/profile3.png',
    summary: 'Machine Learning and GenAI engineer with hands-on experience in building end-to-end ML pipelines, LLM-based RAG systems, and agentic AI applications. Experienced in working with large real-world datasets (79,000+ records), time-series classification, SQL-based data systems, and deep learning models.',
};
