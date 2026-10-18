import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";

const projects = [
  {
    name: "Sportilo",
    category: "Founder Project",
    description:
      "A live sports and gaming community platform that I took from idea to product. I built its full-stack functionality and independently handled technical development, product improvements, social media, and marketing.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    image: "/images/sportilo.webp",
    live: "https://sportilo.in",
    github: "https://github.com/ashie188/Sportilo",
  },
  {
    name: "KnowWhere",
    category: "AI Application",
    description:
      "An AI-powered video knowledge tool designed to generate summaries, identify useful timestamps, and answer contextual questions about video content.",
    stack: ["MERN", "Gemini API", "YouTube API"],
    image: "/images/project-knowwhere.webp",
    live: "",
    github: "https://github.com/ashie188/knowWhere",
  },
  {
    name: "Scan-AI",
    category: "AI Application",
    description:
      "An AI-based document and invoice analysis tool designed to extract information, validate details, and support question answering.",
    stack: ["MERN", "Gemini API", "PDF Processing"],
    image: "/images/project-scan-ai.webp",
    live: "",
    github: "https://github.com/ashie188/scan-ai",
  },
  {
    name: "E-commerce Website",
    category: "Full-Stack Application",
    description:
      "An e-commerce application featuring product listings, product details, cart functionality, API integration, and PostgreSQL-backed data operations.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL"],
    image: "/images/project-ecommerce.webp",
    live: "",
    github: "https://github.com/ashie188/ecommerce-site",
  },
  {
    name: "easy-Rec",
    category: "Browser Recording Tool",
    description:
      "A screen-recording application in progress that aims to capture screen and microphone audio, trim unwanted video sections, and generate a shareable video link.",
    stack: ["JavaScript", "MediaRecorder API", "FFmpeg"],
    image: "/images/project-easy-rec.webp",
    live: "",
    github: "https://github.com/ashie188/easy-rec",
  },
  {
    name: "Scoreazy",
    category: "Landing Page",
    description:
      "A responsive landing page for a career and education guidance service offering mentorship, resume support, job preparation, and educational consultancy.",
    stack: ["HTML5", "CSS3"],
    image: "/images/project-scoreazy.webp",
    live: "",
    github: "https://github.com/ashie188/Scoreazy",
  },
  {
    name: "She Can Foundation",
    category: "NGO Web Application",
    description:
      "A website concept for an NGO featuring a landing page, volunteer and internship application forms, and an admin dashboard for reviewing submissions.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/project-she-can-foundation.webp",
    live: "",
    github: "https://github.com/ashie188/She_Can_Foundation",
  },
  {
    name: "VectorShift Workflow Builder",
    category: "Technical Assignment",
    description:
      "A visual workflow-builder assignment featuring draggable nodes such as Input, Output, LLM, Text, Math, and Condition, arranged on a canvas and connected to represent a workflow.",
    stack: ["React", "JavaScript", "Node-Based UI"],
    image: "/images/project-vectorshift.webp",
    live: "",
    github: "https://github.com/ashie188/NodeRendering",
  },
  {
    name: "Equalizer",
    category: "Audio Experiment",
    description:
      "An experimental browser-based audio visualizer that captures microphone input and explores real-time frequency analysis. Audio capture was achieved, while speech-to-text transcription remained unfinished.",
    stack: ["JavaScript", "Web Audio API", "Microphone API"],
    image: "/images/project-equalizer.webp",
    live: "",
    github: "https://github.com/ashie188/Equalizer",
  },
  {
    name: "Keeper",
    category: "Notes Application",
    description:
      "A notes application concept for creating and organizing notes with titles and content. The project is included as a development project, but its current implementation still needs troubleshooting.",
    stack: ["React", "JavaScript", "CSS"],
    image: "/images/project-keeper.webp",
    live: "",
    github: "https://github.com/ashie188/Keeper-app",
  },
  {
    name: "To-Do List",
    category: "Productivity Application",
    description:
      "A to-do list application concept for entering tasks and organizing everyday activities. The code has been written, but the project still requires debugging before it can be considered fully functional.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    image: "/images/project-todo-list.webp",
    live: "",
    github: "https://github.com/ashie188/To-Do-List-Project",
  },
];

/* ---------- Inline UI icons ---------- */
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const categoryIcons = {
  frontend: (
    <svg {...iconProps}>
      <path d="m8 8-5 4 5 4" />
      <path d="m16 8 5 4-5 4" />
      <path d="m14 5-4 14" />
    </svg>
  ),
  backend: (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01" />
      <path d="M7 16.5h.01" />
    </svg>
  ),
  tools: (
    <svg {...iconProps}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  briefcase: (
    <svg {...iconProps}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  education: (
    <svg {...iconProps}>
      <path d="M22 9 12 4 2 9l10 5 10-5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9v5" />
    </svg>
  ),
  award: (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
    </svg>
  ),
  list: (
    <svg {...iconProps}>
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3.5 6h.01" />
      <path d="M3.5 12h.01" />
      <path d="M3.5 18h.01" />
    </svg>
  ),
  cloud: (
    <svg {...iconProps}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  bulb: (
    <svg {...iconProps}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.74c.6.45 1 .95 1 1.76V17h6v-.5c0-.81.4-1.31 1-1.76A7 7 0 0 0 12 2z" />
    </svg>
  ),
  link: (
    <svg {...iconProps}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  refresh: (
    <svg {...iconProps}>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  ),
};

const chevronDown = (
  <svg
    className="chevron"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/* ---------- Skills data ---------- */
// Tech logos are loaded from the Devicon CDN. For production, consider
// downloading these into /public/icons so the site has no CDN dependency.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skillGroups = [
  {
    title: "Frontend",
    icon: categoryIcons.frontend,
    skills: [
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      {
        name: "JavaScript",
        icon: `${DEVICON}/javascript/javascript-original.svg`,
      },
      { name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DEVICON}/css3/css3-original.svg` },
      {
        name: "Tailwind CSS",
        icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
      },
    ],
  },
  {
    title: "Backend",
    icon: categoryIcons.backend,
    skills: [
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DEVICON}/express/express-original.svg` },
      {
        name: "PostgreSQL",
        icon: `${DEVICON}/postgresql/postgresql-original.svg`,
      },
      { name: "REST API", customIcon: categoryIcons.link },
    ],
  },
  {
    title: "Tools & Others",
    icon: categoryIcons.tools,
    skills: [
      { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
      { name: "GitHub", icon: `${DEVICON}/github/github-original.svg` },
      { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
      {
        name: "AWS",
        icon: `${DEVICON}/amazonwebservices/amazonwebservices-original.svg`,
      },
      { name: "VS Code", icon: `${DEVICON}/vscode/vscode-original.svg` },
      { name: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
    ],
  },
];

const dsaTopics = [
  "Arrays",
  "Two Pointers",
  "Sliding Window",
  "Linked List",
  "Stack",
  "Binary Search",
  "Trees",
  "Graph",
  "Dynamic Programming",
  "Backtracking",
  "Greedy",
  "Bit Manipulation",
];

const devOpsTools = [
  { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
  { name: "Linux", icon: `${DEVICON}/linux/linux-original.svg` },
  { name: "CI/CD", customIcon: categoryIcons.refresh },
];

const certifications = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    logo: "https://cdn.simpleicons.org/amazonaws/FF9900",
  },
  {
    name: "DevOps Essentials",
    issuer: "Simplilearn",
    year: "2024",
    mark: "S",
    markBackground: "linear-gradient(135deg,#00A9E0,#0067B9)",
  },
  {
    name: "Java Programming",
    issuer: "HackerRank",
    year: "2023",
    logo: "https://cdn.simpleicons.org/hackerrank/00EA64",
  },
  {
    name: "Python",
    issuer: "HackerRank",
    year: "2023",
    logo: "https://cdn.simpleicons.org/python/3776AB",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ashie188",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ashutoshhamand-763835279",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.5 3.1a2.4 2.4 0 0 1 3.4 0l3 3a2.4 2.4 0 0 1 0 3.4l-1.7 1.7a2.4 2.4 0 0 1-3.4 0l-.5-.5-7.1 7.1a2.9 2.9 0 0 1-4.1 0l-.9-.9a2.9 2.9 0 0 1 0-4.1L10.3 5.7l-.5-.5a2.4 2.4 0 0 1 0-3.4l1.7-1.7.5-.5.5.5ZM7.6 18.3a1.3 1.3 0 0 0 1.8 0l7.1-7.1-.5-.5a2.4 2.4 0 0 1-.6-2.6L9.5 13a2.9 2.9 0 0 0 0 4.1l-.9.9a1.3 1.3 0 0 0 0 .3ZM21 14.5v5a1.5 1.5 0 0 1-1.5 1.5H9.3l2-2H19v-4l2-2v1.5Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ashutoshhamand@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
      </svg>
    ),
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function SectionHeader({ number, eyebrow, title, description, aside }) {
  return (
    <div className="section-header">
      <div className="section-heading section-heading--numbered">
        <span className="section-number" aria-hidden="true">
          {number}
        </span>
        <div className="section-heading-text">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {description && <p className="section-description">{description}</p>}
        </div>
      </div>
      {aside}
    </div>
  );
}

const isMobileViewport = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 720px)").matches;

// Card that behaves as an accordion below 720px and as a static card above it.
function AccordionCard({ icon, title, className = "", children }) {
  const [open, setOpen] = useState(() => !isMobileViewport());

  return (
    <article className={`accordion-card ${className}${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="card-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="card-toggle-icon">{icon}</span>
        <h3>{title}</h3>
        {chevronDown}
      </button>
      <div className="accordion-content">
        <div className="accordion-inner">{children}</div>
      </div>
    </article>
  );
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social profiles">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          title={link.label}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

function ProjectActions({ project }) {
  return (
    <div className="project-actions">
      {project.live ? (
        <a
          className="button button-primary"
          href={project.live}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo ↗
        </a>
      ) : (
        <span className="button button-disabled">Demo link pending</span>
      )}

      {project.github ? (
        <a
          className="button button-outline"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View Code ↗
        </a>
      ) : (
        <span className="button button-outline button-disabled">
          Code link pending
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
        />
      </div>

      <div className="project-card-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <div className="tag-list">
          {project.stack.map((technology) => (
            <span className="tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <ProjectActions project={project} />
      </div>
    </article>
  );
}

const heroStats = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 9 12 4 2 9l10 5 10-5Z" />
        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
        <path d="M22 9v5" />
      </svg>
    ),
    title: "B.Tech IT",
    sub: "Graduate · 2026",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2-.7-3 0Z" />
        <path d="M12 15l-3-3a22 22 0 0 1 9-9 22 22 0 0 1-6 12Z" />
        <path d="M9 12H5.5a16 16 0 0 1 2-7.5C9.5 7 12 9.5 12 9.5" />
        <path d="M15 12v3.5a16 16 0 0 0 7.5-2c-2.5-2-5-4.5-5-4.5" />
      </svg>
    ),
    title: "10+",
    sub: "Projects Completed",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m8 8-5 4 5 4" />
        <path d="m16 8 5 4-5 4" />
        <path d="m14 5-4 14" />
      </svg>
    ),
    title: "150+",
    sub: "LeetCode Problems",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Nanded, India",
    sub: "Open to Opportunities",
  },
];

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">FULL-STACK DEVELOPER & PRODUCT BUILDER</p>

        <h1>
          Hi, I'm
          <br />
          Ashutosh <span className="gradient-text">Hamand</span>
        </h1>

        <p className="hero-lead">
          I build full-stack web applications, solve problems, and turn ideas
          into products people can use.
        </p>

        <p className="hero-description">
          B.Tech Information Technology graduate from SGGS College, Nanded
          (2026), and founder of Sportilo. I lead its technical development and
          manage its social media and marketing.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View My Work →
          </a>
          <a className="button button-outline" href="#contact">
            Contact Me
          </a>
        </div>

        <SocialLinks />
      </div>

      <div className="hero-visual">
        <div className="portrait-glow" aria-hidden="true" />
        <div className="portrait-ring">
          <img
            src="/images/profile.webp"
            alt="Portrait of Ashutosh Hamand"
            fetchPriority="high"
          />
        </div>
        <p className="hero-note">Building Sportilo and more...</p>
      </div>

      <div
        className="hero-stats"
        aria-label="Professional background and availability"
      >
        {heroStats.map((stat) => (
          <div className="stat" key={stat.sub}>
            <span className="stat-icon">{stat.icon}</span>
            <span className="stat-text">
              <strong>{stat.title}</strong>
              <small>{stat.sub}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const sportilo = projects[0];

  return (
    <section className="section-shell section-block" id="projects">
      <div className="section-title-row">
        <SectionHeading
          eyebrow="02 / FEATURED PROJECT"
          title="Featured Project"
          description="The product I founded and built from the ground up, combining full-stack engineering with product development and marketing."
        />

        <a className="text-link desktop-only" href="#all-projects">
          View All Projects →
        </a>
      </div>

      <article className="sportilo-feature">
        <div className="sportilo-copy">
          <span className="project-badge">Founder-Built Product</span>

          <h3>Sportilo</h3>

          <p>
            A live sports and gaming community platform where people can
            discover nearby players, create and join matches, and build local
            communities around sports and gaming.
          </p>

          <p>
            From the original idea to the working product, I have led Sportilo's
            technical development myself, building its full-stack experience
            while also managing its social media presence, promotional content,
            and marketing.
          </p>

          <div className="tag-list">
            {sportilo.stack.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <ProjectActions project={sportilo} />
        </div>

        <div className="sportilo-visual">
          <img
            src="/images/Portfolio-sportilo-image.webp"
            alt="Sportilo's sports and gaming community platform"
            loading="lazy"
          />

          <div className="sportilo-chips" aria-hidden="true">
            <span>Product Development</span>
            <span>Full-Stack Engineering</span>
            <span>Social Media & Marketing</span>
          </div>

          <div className="sportilo-emoji" aria-hidden="true">
            ⚽ 🎮 👥
          </div>
        </div>
      </article>
    </section>
  );
}

const aboutHighlights = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 9 12 4 2 9l10 5 10-5Z" />
        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
        <path d="M22 9v5" />
      </svg>
    ),
    title: "Focused Learner",
    text: "Always learning new technologies and improving.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m8 8-5 4 5 4" />
        <path d="m16 8 5 4-5 4" />
        <path d="m14 5-4 14" />
      </svg>
    ),
    title: "Problem Solver",
    text: "Enjoy solving DSA and building scalable solutions.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2-.7-3 0Z" />
        <path d="M12 15l-3-3a22 22 0 0 1 9-9 22 22 0 0 1-6 12Z" />
      </svg>
    ),
    title: "Product Builder",
    text: "Building useful products like Sportilo and more.",
  },
];

function About() {
  return (
    <section className="section-shell section-block" id="about">
      <SectionHeading
        eyebrow="03 / ABOUT"
        title="A Developer Who Builds Beyond Code"
        description="My journey combines software engineering, product ownership, and hands-on marketing."
      />

      <div className="about-layout">
        <div className="about-copy">
          <p>
            I'm Ashutosh Hamand, a B.Tech Information Technology graduate from
            SGGS College, Nanded, in 2026. I enjoy building practical web
            applications that solve real problems, from designing user
            experiences to implementing backend functionality and database
            integrations.
          </p>

          <p>
            My main project is Sportilo, a sports and gaming community platform
            that I founded and developed. I've taken responsibility for its
            technical development as well as its social media presence,
            promotional content, and marketing.
          </p>

          <p>
            Alongside product development, I work with Java and data structures
            and algorithms to strengthen my problem-solving skills. I'm
            interested in opportunities where I can contribute to real products
            and grow as a software engineer.
          </p>
        </div>

        <div className="about-highlights">
          <article className="highlight-card">
            <span className="highlight-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8M12 17v4M7 9h4M7 12h7" />
              </svg>
            </span>

            <div>
              <h3>Full-Stack Development</h3>
              <p>
                Building web experiences across frontend, backend, APIs, and
                databases.
              </p>
            </div>
          </article>

          <article className="highlight-card">
            <span className="highlight-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3 20 7v5c0 5-3.4 7.8-8 9-4.6-1.2-8-4-8-9V7l8-4Z" />
                <path d="m8.5 12 2.2 2.2 4.8-5" />
              </svg>
            </span>

            <div>
              <h3>Product Ownership</h3>
              <p>
                Taking Sportilo from an idea to a live product and continuing to
                improve it.
              </p>
            </div>
          </article>

          <article className="highlight-card">
            <span className="highlight-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="m7 14 4-4 3 3 6-7" />
                <path d="M15 6h5v5" />
              </svg>
            </span>

            <div>
              <h3>Marketing & Outreach</h3>
              <p>
                Managing social media, creating promotional content, and
                communicating product value.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function AllProjects() {
  return (
    <section className="section-shell section-block" id="all-projects">
      <div className="section-title-row">
        <SectionHeading
          eyebrow="04 / ALL PROJECTS"
          title="All Projects"
          description="A collection of my other projects built using MERN stack, AI and other technologies."
        />
        <a
          className="text-link desktop-only"
          href="https://github.com/ashie188"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All →
        </a>
      </div>

      <div className="all-projects-grid">
        {projects.slice(1).map((project) => (
          <ProjectCardCompact key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCardCompact({ project }) {
  return (
    <article className="project-card project-card-compact">
      <div className="project-image">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
          decoding="async"
          width="960"
          height="540"
        />
      </div>

      <div className="project-card-content">
        <p className="project-category">{project.category}</p>

        <h3>{project.name}</h3>

        <p className="project-description">{project.description}</p>

        <div className="tag-list" aria-label={`${project.name} technologies`}>
          {project.stack.slice(0, 3).map((technology) => (
            <span className="tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {project.github && (
          <div className="project-actions compact-project-actions">
            <a
              className="button button-outline"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 15 20 4" />
                <path d="M12 4h8v8" />
                <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
              </svg>
              View Code
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section className="section-shell section-block" id="skills">
      <SectionHeader
        number="05"
        eyebrow="Skills & Technologies"
        title="Skills & Technologies"
        description="Tools and technologies I use to build scalable web applications, solve problems, and deploy them to production."
        aside={
          <div className="learning-chip">
            {categoryIcons.bulb}
            <span>Constantly learning and exploring new technologies.</span>
          </div>
        }
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <AccordionCard
            key={group.title}
            className="skill-card"
            icon={group.icon}
            title={group.title}
          >
            <div className="skill-card-body">
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    {skill.customIcon ? (
                      <span className="skill-custom-icon">
                        {skill.customIcon}
                      </span>
                    ) : (
                      <img
                        src={skill.icon}
                        alt=""
                        loading="lazy"
                        width="30"
                        height="30"
                      />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </AccordionCard>
        ))}
      </div>
    </section>
  );
}

const experienceBullets = [
  "Worked on full-stack web development using React, Node.js and PostgreSQL.",
  "Built and maintained features for client projects.",
  "Collaborated with the team on real-world development practices.",
  "Gained experience in deployment, version control and project structure.",
];

const sportiloFounderBullets = [
  "Founded Sportilo and took the product from the initial idea through development and launch.",
  "Independently handled full-stack development, implementing frontend experiences, backend functionality, APIs, and database integration.",
  "Worked on product features for discovering players, creating and joining matches, and connecting sports and gaming communities.",
  "Managed social media and marketing activities, including promotional content and communicating the product's value to potential users.",
  "Continue improving the platform based on product needs and user feedback.",
];

const educationBullets = [
  "Currently in final year.",
  "Focused on full-stack development, DSA and building real-world projects.",
  "Actively participating in technical learning and practical development.",
];

function ExperienceEducation() {
  return (
    <section className="section-shell section-block" id="experience">
      <SectionHeader
        number="06"
        eyebrow="Experience & Education"
        title="Experience & Education"
        description="My professional journey and academic background."
      />

      <div className="journey-grid">
        <AccordionCard
          className="journey-card"
          icon={categoryIcons.briefcase}
          title="Work Experience"
        >
          <div className="journey-body">
            <div className="journey-entry">
              <span
                className="entry-logo entry-logo--sportilo"
                aria-hidden="true"
              >
                S
              </span>

              <div className="entry-main">
                <div className="entry-top">
                  <h4>Sportilo</h4>
                  <span className="date-chip">Founder Project</span>
                </div>

                <p className="entry-role">Founder & Technical Lead</p>
              </div>
            </div>

            <ul style={{ marginBottom: "1rem" }}>
              {sportiloFounderBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="journey-entry">
              <span
                className="entry-logo entry-logo--saiket"
                aria-hidden="true"
              >
                S
              </span>
              <div className="entry-main">
                <div className="entry-top">
                  <h4>SaiKet Systems</h4>
                  <span className="date-chip">Nov 2025 – Dec 2025</span>
                </div>
                <p className="entry-role">Full Stack Developer Intern</p>
              </div>
            </div>
            <ul>
              {experienceBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </AccordionCard>

        <AccordionCard
          className="journey-card"
          icon={categoryIcons.education}
          title="Education"
        >
          <div className="journey-body">
            <div className="journey-entry">
              <span className="entry-logo" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V10l7-5 7 5v11" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </span>
              <div className="entry-main">
                <div className="entry-top">
                  <h4>SGGS College, Nanded</h4>
                  <span className="date-chip">2022 – 2026</span>
                </div>
                <p className="entry-role">B.Tech in Information Technology</p>
              </div>
            </div>
            <ul>
              {educationBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </AccordionCard>
      </div>

      <div className="certification-block">
        <h3>
          {categoryIcons.award}
          Certifications
        </h3>
        <div className="certification-grid">
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.name}>
              <span className="cert-logo" aria-hidden="true">
                {certification.logo ? (
                  <img
                    src={certification.logo}
                    alt=""
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                ) : (
                  <span
                    className="cert-mark"
                    style={{ background: certification.markBackground }}
                  >
                    {certification.mark}
                  </span>
                )}
              </span>
              <div className="cert-info">
                <p>{certification.name}</p>
                <span className="cert-meta">
                  {certification.issuer} · {certification.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DsaDevOps() {
  return (
    <section className="section-shell section-block" id="dsa">
      <SectionHeader
        number="07"
        eyebrow="DSA & DevOps"
        title="DSA & DevOps"
        description="Consistent practice, problem solving and building real-world projects."
      />

      <div className="dsa-layout">
        <article className="dsa-card leetcode-card">
          <div className="dsa-card-header">
            <span className="dsa-logo" aria-hidden="true">
              <img
                src="https://cdn.simpleicons.org/leetcode/FFA116"
                alt=""
                loading="lazy"
                width="22"
                height="22"
              />
            </span>
            <h3>LeetCode Progress</h3>
          </div>

          <div className="leetcode-stats">
            <div className="leetcode-stat">
              <strong>150+</strong>
              <span>Problems Solved</span>
            </div>
            <div className="leetcode-stat">
              <strong>15</strong>
              <span>Patterns Covered</span>
            </div>
            <div className="leetcode-stat leetcode-stat--text">
              <strong>Consistent</strong>
              <span>Practice</span>
            </div>
          </div>

          <a
            className="button button-primary dsa-button"
            href="https://leetcode.com/" // TODO: replace with your LeetCode profile URL
            target="_blank"
            rel="noreferrer"
          >
            View LeetCode Profile ↗
          </a>
        </article>

        <AccordionCard
          className="dsa-card topics-card"
          icon={categoryIcons.list}
          title="Key Topics Practiced"
        >
          <div className="dsa-card-body">
            <div className="tag-list">
              {dsaTopics.map((topic) => (
                <span className="tag" key={topic}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </AccordionCard>

        <AccordionCard
          className="dsa-card devops-card"
          icon={categoryIcons.cloud}
          title="DevOps & Cloud"
        >
          <div className="dsa-card-body">
            <div className="devops-icons">
              {devOpsTools.map((tool) =>
                tool.customIcon ? (
                  <span
                    className="devops-icon-custom"
                    key={tool.name}
                    title={tool.name}
                  >
                    {tool.customIcon}
                  </span>
                ) : (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    title={tool.name}
                    key={tool.name}
                    loading="lazy"
                    width="28"
                    height="28"
                  />
                ),
              )}
            </div>
            <p>
              Building and deploying real-world projects using modern DevOps
              tools.
            </p>
          </div>
        </AccordionCard>
      </div>
    </section>
  );
}

const contactChannels = [
  {
    label: "Email",
    value: "ashutoshhamand@gmail.com",
    href: "mailto:ashutoshhamand@gmail.com",
    note: "Drop me an email anytime.",
    icon: socialLinks[3].icon,
  },
  {
    label: "GitHub",
    value: "github.com/ashie188",
    href: "https://github.com/ashie188",
    note: "Check out my projects.",
    icon: socialLinks[0].icon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ashutoshhamand-763835279",
    href: "https://linkedin.com/in/ashutoshhamand-763835279",
    note: "Let's connect professionally.",
    icon: socialLinks[1].icon,
  },
];

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:ashutoshhamand@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="section-shell section-block contact-section"
      id="contact"
    >
      <SectionHeader
        number="08"
        eyebrow="Contact Me"
        title="Let's Connect"
        description="Feel free to reach out for opportunities, collaborations or just to have a chat about technology."
      />

      <div className="contact-layout">
        <div className="contact-cards">
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              className="contact-link"
              href={channel.href}
              target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
            >
              <span className="contact-icon">{channel.icon}</span>
              <span className="contact-text">
                <strong>{channel.label}</strong>
                <small className="contact-value">{channel.value}</small>
                <small className="contact-note">{channel.note}</small>
              </span>
              <span className="contact-arrow" aria-hidden="true">
                ›
              </span>
            </a>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your opportunity or idea..."
              required
            />
          </label>

          <button className="button button-primary form-submit" type="submit">
            Send Message ↗
          </button>

          <p className="form-note">
            Submitting opens your email application with the message prefilled.
          </p>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-main">
        <div className="home-container">
          <Hero />
          <FeaturedProjects />
          <About />
          <AllProjects />
          <Skills />
          <ExperienceEducation />
          <DsaDevOps />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
