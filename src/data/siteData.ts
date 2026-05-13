import saaBadge from '../assets/badges/aws-saa.png'
import dvaBadge from '../assets/badges/aws-dva.png'
import clfBadge from '../assets/badges/aws-clf.png'

export const personalInfo = {
  name: 'Amanda Miquilini',
  username: 'amanda.miquilini',
  title: 'Software Engineer',
  headline: 'Software Engineer focused on scalable systems, cloud architecture and software quality.',
  location: 'São Paulo, Brazil',
  email: 'amandamiquilini@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amandamiquilini/?locale=en_US',
  linkedinUsername: 'amandamiquilini',
  github: 'https://github.com/amiquilini',
  githubUsername: 'amiquilini',
  about: `TL;DR: I'm a backend software engineer with over 5 years of experience building systems with .NET and AWS. I have a background in science and a love for learning.

Over the past 5 years, I’ve been working as a backend engineer building reliable systems for investment banking platforms. My work is mainly focused on .NET (C#) and AWS, where I develop and maintain backend services, REST APIs, workers, and event-driven integrations using messaging systems like Kafka.

I’ve worked with both legacy and modern architectures, contributing to system modernization efforts as well as the development of new solutions. My day-to-day work also involves automated testing strategies, CI/CD pipelines, observability, and cloud-native infrastructure.

During my master's in chemistry, I worked with computational structural biology, developing computational approaches to integrate mass spectrometry (XL-MS) data into protein structure modeling (right before AlphaFold 2 came into the picture!). This work involved developing Python and shell scripts to automate data processing and analysis workflows.`,
}

export const skills = {
  backend: ['.NET', '.NET Framework', 'Spring Boot', 'C#', 'SQL', 'Java', 'Python'],
  architecture: ['Microservices', 'Event-Driven Architecture', 'BFF Pattern', 'Legacy Modernization', 'Domain-Driven Design'],
  cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Terraform', 'CloudFormation', 'Git', 'RTC'],
  data: ['SQL Server', 'MySQL', 'DynamoDB', 'Redis', 'Kafka', 'SQS', 'SNS', 'EventBridge'],
  observability: ['Datadog', 'Prometheus', 'Grafana', 'Splunk'],
  testing: ['Unit Testing', 'Integration Testing', 'Performance Testing']
}

export const certifications = [
  {
    id: 1,
    name: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2024',
    badge: saaBadge,
    alt: 'AWS Solutions Architect Associate badge',
    color: '#FF9900',
  },
  {
    id: 2,
    name: 'AWS Developer – Associate',
    issuer: 'Amazon Web Services',
    year: '2023',
    badge: dvaBadge,
    alt: 'AWS Developer Associate badge',
    color: '#FF9900',
  },
  {
    id: 3,
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2022',
    badge: clfBadge,
    alt: 'AWS Cloud Practitioner badge',
    color: '#FF9900',
  },
]

export const education = [
  {
    id: 1,
    degree: 'Technologist in Computer Systems',
    school: 'Fluminense Federal University (UFF)',
    period: '2019 – 2023',
    type: 'undergraduate',
  },
  {
    id: 2,
    degree: "Master's in Chemistry",
    school: 'State University of Campinas (UNICAMP)',
    period: '2019 – 2021',
    type: 'graduate',
  },
  {
    id: 3,
    degree: "Bachelor's in Chemistry",
    school: 'Fluminense Federal University (UFF)',
    period: '2012 – 2017',
    type: 'undergraduate',
    note: 'Exchange Program – Columbia University, USA (2014–2015)',
  },
]

export const engineeringFocus = [
  {
    id: 1,
    title: 'Distributed Applications',
    description: 'Design and maintenance of REST APIs, background services, and Backend-for-Frontend patterns in complex microservices ecosystems.',
    icon: 'api',
  },
  {
    id: 2,
    title: 'Event-Driven Systems',
    description: 'Kafka pipelines and asynchronous communication patterns for banking workloads.',
    icon: 'event',
  },
  {
    id: 3,
    title: 'Cloud & AWS Architecture',
    description: 'Serverless, container orchestration, and cloud-native patterns on AWS. Certified Solutions Architect Associate.',
    icon: 'cloud',
  },
  {
    id: 4,
    title: 'Legacy Modernization',
    description: 'Reverse engineering, documentation, and incremental refactoring of mission-critical legacy systems.',
    icon: 'legacy',
  },
  {
    id: 5,
    title: 'Observability & Quality',
    description: 'End-to-end testing strategies (unit, integration, performance) and observability stacks (Datadog, Prometheus, Grafana).',
    icon: 'observability',
  },
  {
    id: 6,
    title: 'Data Modeling & Storage',
    description: 'Modeling data and selecting the right storage strategy across SQL, NoSQL, caching, and performance-focused access patterns.',
    icon: 'database',
  },
]

export const projects = [
  {
    id: 1,
    name: 'City Guide AI Agent',
    description: 'A console-based AI agent that recommends a top 10 list of things to do in a city/date using live place and weather data.',
    stack: ['C#', '.NET', 'Semantic Kernel', 'OpenAI API'],
    architecture: 'Console Application',
    highlights: 'Demonstrates practical use of LLMs for data retrieval, reasoning, and response generation.',
    githubUrl: 'https://github.com/amiquilini/city-guide-ai-agent',
    demoUrl: null
  }
]

export const currentlyLearning = [
  {
    label: 'AWS Solutions Architect Professional',
    note: 'Preparing for SAP-C02 with focus on the well-architected framework pillars.',
  },
  {
    label: 'AI Agents',
    note: 'Exploring agent workflows, tool use, orchestration, memory, and observability.',
  },
  {
    label: 'Automated Testing for CI/CD',
    note: 'Studying test strategy, quality gates, coverage, and pipeline integration.',
  },
  {
    label: 'Software Architecture Fundamentals',
    note: 'Consolidating architecture principles, tradeoffs, scalability, and maintainability.',
  }
]

export const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
]
