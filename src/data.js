export const profile = {
  firstName: 'Maksymilian',
  fullName: 'Maksymilian Łuczak',
  email: 'maksluczak99@gmail.com',
  phone: '+48 739 041 228',
  status: 'Fourth-year Computer Science student',
  links: {
    github: 'https://github.com/maksluczak',
    linkedin: 'https://www.linkedin.com/in/maksymilian-łuczak-69a10b331/',
    facebook: 'https://www.facebook.com/profile.php?id=100015286782095',
  },
}

export const home = {
  headline: 'AGH University of Krakow Student / Software Engineer',
  languages: 'Java · C# · Python · TypeScript · Scala',
  intro:
    'Fourth-year Computer Science student at AGH University, focused on backend development, distributed systems and cloud. ' +
    'I build event-driven services with .NET, Java and Spring Boot, and I gained hands-on experience during internships at HERE Technologies and InAnalytics. ' +
    'Looking for an internship or a junior role in backend, AI, cloud or DevOps.',
}

export const about = {
  pitch:
    'I’m a fourth-year Computer Science student with internship experience, working with data and a solid backend foundation. ' +
    'I like building systems that are tested, containerized and easy to deploy, and I’m eager to grow in backend, AI, cloud and DevOps.',
  bio:
    'I’m a curious and motivated person who loves diving into new ideas - whether in tech or beyond. ' +
    'I enjoy working with people, learning from others and improving a little every day. ' +
    'In my free time, I explore new interests, read, and tinker with side projects.',
}

export const experience = [
  {
    role: 'Software Engineering Intern',
    company: 'HERE Technologies',
    place: 'Kraków',
    period: 'Jul 2026 – Sep 2026',
    points: [
      'Maintained Scala and Java data projects transforming data from the MOM format into the HMC format used by HERE WeGo.',
      'Developed rendering plugins in TypeScript.',
      'Wrote SQL queries against AWS Athena.',
      'Worked with GitHub Copilot, agent skills and MCP servers.',
    ],
    tech: ['Scala', 'Java', 'TypeScript', 'SQL', 'AWS Athena', 'GitHub Copilot', 'MCP'],
  },
  {
    role: 'Software Development Intern',
    company: 'Innovative Data Analytics (InAnalytics)',
    place: 'Kraków',
    period: 'Apr 2026 – Jun 2026',
    points: [
      'Built a React application for managing PostgreSQL relational databases.',
      'Integrated the user interface with PostgreSQL.',
    ],
    tech: ['React', 'JavaScript', 'PostgreSQL', 'HTML/CSS'],
  },
]

export const projects = [
  {
    name: 'AI Document Processing Platform',
    description:
      'Event-driven microservices platform that classifies documents with a self-trained model and extracts structured data using Azure AI Document Intelligence. ' +
      'Covered by unit and integration tests with CI in GitHub Actions; runs on Docker Compose and on a local Kubernetes cluster.',
    tech: ['C#', '.NET 10', 'ASP.NET Core', 'RabbitMQ', 'MassTransit', 'MinIO', 'PostgreSQL', 'Python', 'FastAPI', 'Docker', 'Kubernetes', 'GitHub Actions', 'xUnit'],
    link: 'https://github.com/maksluczak/document-ai-platform',
  },
  {
    name: 'Employee Management System',
    description:
      'Backend REST API for managing employee data, with role-based access control (RBAC) and AWS S3 object storage integration.',
    tech: ['Java', 'Spring Boot', 'AWS S3', 'AWS SDK', 'PostgreSQL', 'Docker', 'REST API'],
    link: 'https://github.com/maksluczak/employee-management',
  },
  {
    name: 'AllerNote',
    description:
      'Full-stack web application for tracking and analyzing allergy symptoms, with JWT authentication and a flexible database schema.',
    tech: ['Next.js', 'Express.js', 'MongoDB', 'JWT', 'Vercel', 'Render'],
    link: 'https://github.com/maksluczak/aller-note-2.0',
    demo: 'https://aller-note-2-0.vercel.app',
  }
]

export const skills = [
  { category: 'Languages', items: ['Java', 'C#', 'Python', 'TypeScript', 'JavaScript', 'Scala', 'SQL'] },
  { category: 'Backend & Frontend', items: ['Spring Boot', '.NET / ASP.NET Core', 'FastAPI', 'Node.js / Express', 'REST API', 'React', 'Next.js'] },
  { category: 'Data & Messaging', items: ['PostgreSQL', 'MongoDB', 'RabbitMQ / MassTransit', 'MinIO', 'AWS Athena', 'Pandas', 'Scikit-Learn'] },
  { category: 'Cloud, DevOps & AI', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS S3', 'Azure AI', 'Git', 'Linux', 'MCP'] },
]

export const education = [
  { title: 'BSc Computer Science in Engineering', place: 'AGH University of Krakow', period: '2023 – 2027' },
  { title: 'B2 First (FCE)', place: 'First Certificate in English', period: '2022' },
]

export const certificates = [
  {
    title: 'Google Cybersecurity Professional Certificate',
    place: 'Coursera',
    status: 'In progress',
    link: 'https://www.coursera.org/professional-certificates/google-cybersecurity',
  },
]
