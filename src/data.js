export const personal = {
  name: "Venkata Ramana Badeti",
  nickname: "Ramana",
  roles: ["Cloud Engineer", "DevOps Engineer", "AWS & Terraform Specialist", "Kubernetes Operator", "AI Integrator"],
  email: "vbadeti4@gmail.com",
  phone: "(414) 534-9599",
  location: "Milwaukee, WI",
  linkedin: "https://www.linkedin.com/in/venkata-ramana-18b9b7344",
  github: "https://github.com/Ramanabadeti",
  summary:
    "Cloud Engineer with 2+ years of professional experience (Accenture, UW Milwaukee) provisioning and automating infrastructure on AWS and Azure. MS in Information Technology from the University of Wisconsin Milwaukee. AWS Certified Solutions Architect, HashiCorp Terraform Associate, and CKA-certified, with a builder's track record across Infrastructure as Code, Kubernetes, CI/CD, and AI-integrated tooling using the Claude API.",
};

export const skills = {
  cloud: [
    { name: "AWS", level: 88 },
    { name: "Azure", level: 80 },
    { name: "Terraform (IaC)", level: 88 },
    { name: "Kubernetes", level: 82 },
    { name: "Docker", level: 88 },
    { name: "CI/CD (GitHub Actions)", level: 85 },
  ],
  backend: [
    { name: "Node.js / Express", level: 85 },
    { name: "Python", level: 75 },
    { name: "RESTful APIs", level: 90 },
    { name: "JWT Authentication", level: 87 },
    { name: "SQLite", level: 80 },
  ],
  frontend: [
    { name: "React.js", level: 92 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "HTML5 / CSS3", level: 92 },
    { name: "Recharts / Three.js", level: 75 },
  ],
  tools: [
    { name: "Git / GitHub", level: 92 },
    { name: "Anthropic Claude API", level: 82 },
    { name: "SQL", level: 80 },
    { name: "Linux Command Line", level: 80 },
    { name: "Technical Documentation & Enablement", level: 85 },
  ],
};

export const experience = [
  {
    role: "Cloud Engineer",
    company: "Accenture",
    type: "Hyderabad, India",
    period: "May 2021 – Jul 2023",
    color: "#06b6d4",
    bullets: [
      "Worked across AWS and Azure on infrastructure provisioning, automation, and support for enterprise client workloads.",
      "Used Terraform to manage infrastructure as code, reducing manual configuration steps and improving environment consistency.",
      "Supported Kubernetes-based deployments, gaining hands-on exposure to containerized application operations at scale.",
      "Built foundational experience translating client infrastructure needs into concrete technical implementation.",
    ],
  },
  {
    role: "IT Support Engineer",
    company: "University of Wisconsin–Milwaukee",
    type: "Milwaukee, WI",
    period: "Oct 2023 – Nov 2024",
    color: "#8b5cf6",
    bullets: [
      "Provided direct technical support to students, faculty, and staff in a university environment, resolving hardware, software, and network issues across a diverse, non-technical user base.",
      "Worked within institutional processes typical of a public-sector organization.",
      "Noticed the ticketing queue became hard to manage past ~100 open tickets; on my own initiative, started batching and prioritizing by urgency and type, easing the backlog during high-volume periods.",
    ],
  },
  {
    role: "Volunteer AI Awareness Presenter",
    company: "UWM-Affiliated Outreach",
    type: "Milwaukee, WI",
    period: "2023 – 2024",
    color: "#f59e0b",
    bullets: [
      "Volunteered with an informal, UWM-affiliated AI awareness campaign at 1–2 local high schools, presenting on what AI is, how it's evolving, and how to use it practically in everyday life.",
      "Presented and helped organize logistics (scheduling, materials) across a few sessions — hands-on experience explaining a fast-moving technical topic to a non-technical high school audience.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science — Information Technology",
    school: "University of Wisconsin Milwaukee",
    location: "Milwaukee, WI",
    period: "2023 – 2024",
    gpa: "3.55 / 4.0",
    color: "#06b6d4",
  },
  {
    degree: "Bachelor of Technology — Computer Science Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    period: "2018 – 2022",
    gpa: "6.55 / 10",
    color: "#8b5cf6",
  },
];

export const projects = [
  {
    title: "PunchWay — Time-Tracking & Payroll System",
    description:
      "Built for a local small-business owner (gas station) as a free favor to replace paper timesheets — currently in active use. Role-based clock-in/out for employees, an admin dashboard with date-range filtering and pay-rate calculation, and a backend that reads/writes directly to the owner's existing Excel payroll workbook.",
    tech: ["React", "Node.js/Express", "Excel (xlsx)", "jsPDF", "html2canvas"],
    github: "https://github.com/Ramanabadeti/uspetropayrole",
    demo: "https://uspetropayrole.vercel.app",
    featured: true,
    badge: "Client Project",
    badgeColor: "#10b981",
  },
  {
    title: "DiteTracker — Diet & Fitness Tracking App",
    description:
      "Full-stack health-tracking app from scratch: relational schema for profiles, calorie logs, and weight history, JWT auth, and a REST API with protected middleware. Aggregates nutrition/activity into daily summaries and running totals, surfaced via interactive charts. Dockerized and deployed on Railway with a health-check endpoint. In active daily use by family and friends.",
    tech: ["React", "TypeScript", "Node.js/Express", "SQLite", "JWT", "Docker", "Recharts"],
    github: "https://github.com/Ramanabadeti/dite-tracker",
    demo: null,
    featured: true,
    badge: "Full-Stack",
    badgeColor: "#06b6d4",
  },
  {
    title: "Job Alert Bot — Automated Job-Matching Pipeline",
    description:
      "Automated job-search tool running on a GitHub Actions schedule. Queries the Adzuna jobs API, de-duplicates results, and scores each job 0–100 with a custom ATS-style algorithm. Delivers a ranked HTML email every weekday morning — fully automated after setup.",
    tech: ["Node.js", "GitHub Actions", "Adzuna API", "Nodemailer"],
    github: "https://github.com/Ramanabadeti/job-alert-bot",
    demo: null,
    featured: true,
    badge: "Automation",
    badgeColor: "#f59e0b",
  },
  {
    title: "AI Code Reviewer",
    description:
      "Code review tool powered by the Claude API with streamed (SSE) responses for real-time, incremental feedback — bugs, quality score, improvements, and a refactored version streamed word-by-word.",
    tech: ["React", "Node.js", "Claude API", "SSE Streaming", "SQLite"],
    github: "https://github.com/Ramanabadeti/ai-code-reviewer",
    demo: null,
    featured: false,
    badge: "AI",
    badgeColor: "#f59e0b",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Paste your resume and job description — Claude AI scores the match 0–100, identifies skill gaps, and generates a concrete improvement plan. Demo mode works without API key.",
    tech: ["React", "Node.js", "Claude API", "SQLite", "Vite"],
    github: "https://github.com/Ramanabadeti/ai-resume-analyzer",
    demo: "https://ai-resume-analyzer-k8s0fjbt9-ramana-badetis-projects.vercel.app",
    featured: false,
    badge: "AI",
    badgeColor: "#f59e0b",
  },
  {
    title: "FinTrack — Finance Dashboard",
    description:
      "Personal finance tracker with interactive pie, bar, and line charts. Budget tracking, month/year filtering, JWT authentication, and a pre-seeded demo with 6 months of data.",
    tech: ["React", "Recharts", "Node.js", "JWT", "SQLite", "Vite"],
    github: "https://github.com/Ramanabadeti/fintrack-dashboard",
    demo: "https://fintrack-dashboard-bci9j1sg2-ramana-badetis-projects.vercel.app",
    featured: false,
    badge: "Full-Stack",
    badgeColor: "#10b981",
  },
  {
    title: "CollabBoard — Real-Time Kanban",
    description:
      "Drag-and-drop Kanban board where every connected user sees changes instantly via Socket.io rooms per board. No polling, no page refresh required.",
    tech: ["React", "Socket.io", "Node.js", "JWT", "SQLite"],
    github: "https://github.com/Ramanabadeti/collab-kanban",
    demo: null,
    featured: false,
    badge: "Real-Time",
    badgeColor: "#06b6d4",
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    status: "Completed",
    icon: "☁️",
    color: "#f59e0b",
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    status: "Completed",
    icon: "🛠️",
    color: "#06b6d4",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    status: "Completed",
    icon: "⚓",
    color: "#10b981",
  },
  {
    name: "AI Fluency",
    issuer: "Anthropic / CodePath",
    status: "Completed",
    icon: "🤖",
    color: "#8b5cf6",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic / CodePath",
    status: "Completed",
    icon: "✦",
    color: "#8b5cf6",
  },
];
