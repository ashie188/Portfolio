import "./Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ashie188",
    external: true,
    content: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.72 2.09 3.7 1.47.1-.72.4-1.2.72-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.62 10.62 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.21-5.1 5.49.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ashutoshhamand-763835279",
    external: true,
    content: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M5.2 3.3a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.1 7h3.8v12H1.1V7Zm6.1 0h3.6v1.64h.05A3.95 3.95 0 0 1 14.4 6.6c3.85 0 4.56 2.53 4.56 5.82V19h-3.8v-5.84c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.08V19H7.2V7Z"
          transform="translate(2 0)"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ashutoshhamand145@gmail.com",
    external: false,
    content: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <a className="brand footer-brand" href="#home">
            Ashutosh <span>Hamand</span>
          </a>

          <p className="footer-role">
            Full-Stack Developer <span aria-hidden="true">·</span> Java{" "}
            <span aria-hidden="true">·</span> DSA{" "}
            <span aria-hidden="true">·</span> Cloud
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="footer-socials" aria-label="Social links">
          {socialLinks.map(({ label, href, external, content }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {content}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Ashutosh Hamand. All rights reserved.</p>

        <a className="back-to-top" href="#home" aria-label="Back to top">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="m6 11 6-6 6 6" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
