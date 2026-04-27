const skillGroups = [
  {
    icon: "bi bi-window-stack",
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Bootstrap", "TypeScript", "React"]
  },
  {
    icon: "bi bi-database",
    title: "Backend e dados",
    items: ["PHP", "MySQL", "Laravel", "PostgreSQL", "Docker"],
  },
  {
    icon: "bi bi-hdd-network",
    title: "Suporte",
    items: ["Chamados", "Implantação", "Manutenção"],
  },
  {
    icon: "bi bi-gear-wide-connected",
    title: "Processos",
    items: ["Documentação", "Organização", "Git"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Habilidades</span>
        </div>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-md-6 col-xl-3" key={group.title}>
              <article className="glass-card skill-group-card">
                <div className="skill-group-top">
                  <i className={group.icon}></i>
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-cluster">
                  {group.items.map((item) => (
                    <span className="skill-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
