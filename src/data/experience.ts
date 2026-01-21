export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: 'cogninode-intern',
        title: 'Cyber Security and AI Research Intern',
        company: 'CogniNode Technologies',
        location: 'Hyderabad',
        period: 'Nov 2025 - Present',
        description: 'Research and implementation of AI models for cybersecurity enhancement.',
        achievements: [
            'Assisted in research and implementation of AI models for cybersecurity enhancement',
            'Worked on cyber threat identification and analysis using machine learning techniques',
            'Contributed to intelligent automation systems for data protection and risk assessment',
            'Helped in building malware detection and predictive security models',
            'Followed data confidentiality, integrity, and professional security practices',
        ],
        technologies: ['Python', 'Machine Learning', 'Cybersecurity', 'AI Models'],
    },
];

export const education = [
    {
        id: 'btech',
        degree: 'B.Tech in AI & Data Science (CSE)',
        institution: 'CMR College of Engineering and Technology',
        location: 'Hyderabad',
        period: '2021 - 2025',
        grade: 'CGPA: 7.8/10',
    },
    {
        id: 'intermediate',
        degree: 'Intermediate (MPC)',
        institution: 'Resonance Jr College',
        location: 'Hyderabad',
        period: '2019 - 2021',
        grade: '974/1000 • State Rank: Top 5%',
    },
];

export const certifications = [
    {
        id: 'python-programming',
        title: 'Python Programming',
        issuer: 'Innomatics Research Labs, Elewayte',
    },
    {
        id: 'python-ds',
        title: 'Python Libraries for Data Science',
        issuer: 'Simplilearn SkillUp',
    },
    {
        id: 'sql-analysis',
        title: 'SQL for Data Analysis',
        issuer: 'Simplilearn SkillUp, Innomatics Research Labs',
    },
];
