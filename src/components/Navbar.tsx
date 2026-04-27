type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top portfolio-navbar ${
        isDark ? "navbar-dark" : "navbar-light"
      }`}
    >
      <div className="container">
        <a className="navbar-brand portfolio-brand" href="#hero">
          Wesley<span>.dev</span>
        </a>

        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Alternar navegacao"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            <i className={`bi ${isDark ? "bi-sun" : "bi-moon-stars"}`}></i>
            <span className="theme-toggle-label">
              {isDark ? "Claro" : "Escuro"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
