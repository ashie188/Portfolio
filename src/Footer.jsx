import "./Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#home">
          Ashutosh <span>Hamand</span>
        </a>

        <p className="footer-role">Full-Stack Developer · Java · DSA · Cloud</p>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a
            href="https://github.com/ashie188"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>
          <a
            href="https://linkedin.com/in/ashutoshhamand-763835279"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a href="mailto:ashutoshhamand@gmail.com" aria-label="Email">
            @
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ashutosh Hamand. All rights reserved.</p>
        <a className="back-to-top" href="#home" aria-label="Back to top">
          ↑
        </a>
      </div>
    </footer>
  );
}