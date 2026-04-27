const channels = [
  {
    icon: "bi bi-github",
    label: "GitHub",
    value: "github.com/wesleysilva6",
    description: "Veja repositorios, estudos e projetos publicados.",
    cta: "Abrir GitHub",
    href: "https://github.com/wesleysilva6",
  },
  {
    icon: "bi bi-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/wesleywagnersilva",
    description: "Perfil profissional para networking e oportunidades.",
    cta: "Abrir LinkedIn",
    href: "https://www.linkedin.com/in/wesleywagnersilva/",
  },
  {
    icon: "bi bi-envelope",
    label: "Email",
    value: "wesleydev@software.com",
    description: "Canal direto para propostas, freelas e parcerias.",
    cta: "Enviar email",
    href: "mailto:wesleydev@software.com",
  },
];

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="container">
        <div className="section-heading section-heading--center contact-heading">
          <span className="section-kicker">Contato</span>
          <h2>Vamos conectar e colaborar.</h2>
        </div>

        <div className="glass-card contact-strip">
          <span className="contact-strip-badge">Disponivel</span>
          <p>Projetos web, sistemas internos, freelas e oportunidades profissionais.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {channels.map((channel) => (
            <div className="col-md-6 col-xl-4" key={channel.label}>
              <a
                className="glass-card contact-method"
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-method-icon">
                  <i className={channel.icon}></i>
                </div>

                <div className="contact-method-body">
                  <span className="contact-method-label">{channel.label}</span>
                  <strong>{channel.value}</strong>
                  <p>{channel.description}</p>
                </div>

                <span className="contact-method-cta">
                  {channel.cta}
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
