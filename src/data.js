export const personal = {
  name: "Venkata Ramana Badeti",
  nickname: "Ramana",
  roles: ["Full-Stack Developer", "Frontend Engineer", "Backend Developer", "React Specialist", "AI Integrator"],
  email: "vbadeti4@gmail.com",
  phone: "(414) 534-9599",
  location: "Milwaukee, WI",
  linkedin: "https://www.linkedin.com/in/ramana-badeti-5b617b197/",
  github: "https://github.com/Ramanabadeti",
  summary:
    "Full-Stack Developer with 3+ years of professional experience building responsive, production-grade web applications. MS in Information Technology from the University of Wisconsin Milwaukee. Specialized in React.js ecosystems, Node.js APIs, real-time systems with Socket.io, and AI-powered tools using Claude API.",
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "HTML5 / CSS3", level: 95 },
    { name: "Bootstrap", level: 85 },
    { name: "React Hooks", level: 90 },
    { name: "Context API", level: 85 },
    { name: "React Router", level: 90 },
    { name: "Responsive Design", level: 93 },
    { name: "Vite", level: 82 },
  ],
  backend: [
    { name: "Node.js", level: 82 },
    { name: "Express.js", level: 80 },
    { name: "Python", level: 70 },
    { name: "RESTful APIs", level: 90 },
    { name: "JWT Authentication", level: 87 },
    { name: "Socket.io (WebSockets)", level: 75 },
    { name: "Server-Sent Events", level: 74 },
  ],
  database: [
    { name: "SQLite", level: 80 },
    { name: "Firebase Firestore", level: 70 },
    { name: "Local Storage", level: 90 },
  ],
  tools: [
    { name: "Git / GitHub", level: 92 },
    { name: "Agile / Scrum", level: 85 },
    { name: "Anthropic Claude API", level: 78 },
    { name: "Linux Command Line", level: 74 },
    { name: "UI/UX Design", level: 76 },
    { name: "AWS (In Progress)", level: 45 },
  ],
};

export const experience = [
  {
    role: "Frontend Developer",
    company: "Skill Vertex",
    type: "Remote",
    period: "May 2020 – June 2023",
    color: "#8b5cf6",
    bullets: [
      "Designed and deployed 5+ responsive web applications using React.js, JavaScript (ES6+), HTML5, CSS3, and Bootstrap, ensuring seamless cross-device compatibility.",
      "Built modular, reusable React components with React Hooks and Context API for global state management, reducing development time across client projects.",
      "Implemented JWT-based authentication and authorization flows with protected routes using React Router, significantly enhancing application security.",
      "Integrated RESTful APIs to connect frontend interfaces with backend services, handling async operations with Local Storage state management.",
      "Collaborated with designers and backend developers in agile/scrum sprints — planning, code reviews, and daily standups.",
      "Managed version control using Git and GitHub, enforcing clean branching strategies and documented codebases.",
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
    title: "AI Code Reviewer",
    description:
      "Claude AI reviews code in real time — bugs, quality score, improvements, and a refactored version streamed word-by-word via Server-Sent Events. 8 languages supported.",
    tech: ["React", "Node.js", "Claude API", "SSE Streaming", "SQLite"],
    github: "https://github.com/Ramanabadeti/ai-code-reviewer",
    demo: null,
    featured: true,
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
    featured: true,
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
    featured: true,
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
  {
    title: "PunchWay — Payroll System",
    description:
      "Full-stack workforce attendance system replacing spreadsheets. Admin dashboard with hourly pay calculations, audit trail, Excel import, and PDF payroll export.",
    tech: ["React 19", "Node.js", "Express 5", "SQLite", "jsPDF"],
    github: "https://github.com/Ramanabadeti/uspetropayrole",
    demo: "https://uspetropayrole.vercel.app",
    featured: false,
    badge: "Full-Stack",
    badgeColor: "#10b981",
  },
  {
    title: "Jobby App — Job Platform",
    description:
      "Full-featured job search platform with secure JWT authentication, React Router protected routes, persistent login state, and responsive multi-page layout.",
    tech: ["React.js", "JWT", "Bootstrap", "REST APIs", "React Router"],
    github: null,
    demo: "https://megajobby.ccbp.tech",
    featured: false,
    badge: "Web App",
    badgeColor: "#8b5cf6",
  },
  {
    title: "Wikipedia Search App",
    description:
      "Responsive Wikipedia search application delivering real-time results via async JavaScript fetch API calls across all device sizes.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Bootstrap"],
    github: null,
    demo: "https://megasearcheng.ccbp.tech",
    featured: false,
    badge: "Web App",
    badgeColor: "#8b5cf6",
  },
];

export const certifications = [
  {
    name: "React Developer Certification",
    issuer: "Udemy",
    status: "Completed",
    icon: "⚛️",
    color: "#8b5cf6",
  },
  {
    name: "Static, Dynamic & Responsive Web Dev + Python Fundamentals",
    issuer: "NxtWave Disruptive Technologies",
    status: "Completed",
    icon: "🌐",
    color: "#06b6d4",
  },
  {
    name: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    status: "In Progress",
    icon: "☁️",
    color: "#f59e0b",
  },
];
