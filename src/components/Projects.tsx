import Arena from "../assets/arena.png";
import Motors from "../assets/motors.png";
import Estoque from "../assets/estoque.png";

const projects = [
  {
    label: "NovaWave - Arena",
    title: "Gerenciamento de Arenas",
    description:
      "Focado para o gerenciamento interno de arenas. Dashboard com visao geral, controle de alunos, modalidades, turmas, mensalidades, gastos, presencas e envio de mensagens com conexao pelo WhatsApp.",
    tech: ["Docker", "Node.js", "PHP", "PostgreSQL", "React", "TypeScript"],
    image: Arena,
    imageAlt: "Preview do projeto NovaWave Arena",
    href: "https://github.com/wesleysilva6/NovaWave-Arena",
  },
  {
    label: "NovaWave - Motors",
    title: "Gerenciamento de Anuncios de Veiculos",
    description:
      "Focado para o gerenciamento de anuncios de veiculos. Dashboard com visao geral, cadastro de veiculos, controle de vendas, clientes e historico de vendas com graficos interativos.",
    tech: ["Docker", "PHP", "PostgreSQL", "React", "TypeScript"],
    image: Motors,
    imageAlt: "Preview do projeto NovaWave Motors",
    href: "https://github.com/wesleysilva6/NovaWave-Motors",
  },
  {
    label: "NovaWave - Estoque",
    title: "Gerenciamento de Estoque e Painel de Vendas",
    description:
      "Focado para o gerenciamento de estoque com painel de vendas, controle de produtos, vendas, funcionarios, simulacao e historico de vendas com graficos interativos.",
    tech: ["Laravel", "PHP", "React", "TypeScript", "Docker"],
    image: Estoque,
    imageAlt: "Preview do projeto NovaWave Estoque",
    href: "https://github.com/wesleysilva6/Refactor.NovaWave-Estoque",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-shell section-alt">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Projetos</span>
        </div>

        <div className="row g-4">
          {projects.map((project) => {
            const isExternal = project.href.startsWith("http");

            return (
              <div className="col-lg-4" key={project.title}>
                <article className="glass-card project-card">
                  <div className="project-media">
                    {project.image ? (
                      <img src={project.image} alt={project.imageAlt} />
                    ) : (
                      <div className="project-media-placeholder">
                        <i className="bi bi-image"></i>
                        <strong>Imagem do projeto</strong>
                        <span>Troque o campo `image` pelo caminho da sua imagem.</span>
                      </div>
                    )}
                  </div>

                  <div className="project-card-body">
                    <span className="project-number">{project.label}</span>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-footer">
                      <div className="project-tech-grid">
                        {project.tech.map((item) => (
                          <span className="project-chip" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.href}
                        className="project-link"
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        Acessar projeto
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
