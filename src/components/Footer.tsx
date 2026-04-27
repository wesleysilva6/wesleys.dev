const footerLinks = [
  { icon: "bi bi-github", href: "https://github.com/wesleysilva6", label: "GitHub" },
  {
    icon: "bi bi-linkedin",
    href: "https://www.linkedin.com/in/wesleywagnersilva/",
    label: "LinkedIn",
  },
  { icon: "bi bi-envelope", href: "mailto:contato@seudominio.com", label: "Email" },
];

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
        <p className="mb-0">
          {new Date().getFullYear()} Wesley Silva. Base estrutural pronta para
          personalizacao.
        </p>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-link"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
