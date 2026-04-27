const timeline = [
    {
    period: "08/04/2026 - presente",
    title: "Analista de Suporte Computacional - Magazine do Povo",
    text: "Atuação no setor da Infraestrutura, com foco em suporte técnico, implantação de sistemas e melhoria de processos. Responsável por resolver chamados, implantar soluções técnicas e contribuir para a organização interna da empresa.",
  },
  {
    period: "17/02/2025 - 11/02/2026",
    title: "Desenvolvedor - GazinTech",
    text: "Atuação no setor de Desenvolvimento como jovem aprendiz. Estudo continuo de novas tecnologias, apresentação de projetos com base nos estudos realizados. Além da contribuição para criação do sistema do Consultório Odontológico Gazin.",
  },
];

function Journey() {
  return (
    <section id="experience" className="section-shell">
      <div className="container">

        <div id="timeline" className="timeline-shell">
          <div className="timeline-header">
            <span className="section-kicker">Experiência Profissional</span>
            <h3>Acompanhe minha trajetória profissional.</h3>
            <p className="section-note">
              Confira a linha do tempo abaixo.
            </p>
          </div>

          <div className="timeline-track">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.period}>
                <span className="timeline-year">{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
