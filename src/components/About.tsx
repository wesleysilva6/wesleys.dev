import Perfil from "../assets/perfil.png";

const facts = [
  { label: "Atuação", value: "Suporte + desenvolvimento" },
  { label: "Funcionário", value: "Magazine do Povo" },
  { label: "Residência", value: "Douradina, PR" },
];

function About() {
  return (
    <section id="about" className="section-shell section-alt">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Sobre Mim</span>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-4">
            <article className="glass-card about-card about-card--profile">
              <div className="profile-orb">
                <img src={Perfil} width={110} height={110} alt="Foto de perfil" />
              </div>
              <h3 className="profile-label">Wesley Wagner Nunes Silva</h3>
              <p className="section-note">
                Analista de Suporte Computacional | Software Developer
              </p>

              <ul className="info-list">
                {facts.map((fact) => (
                  <li key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="col-lg-8">
            <article className="glass-card about-card">
              <p className="about-lead">
                Sou um profissional apaixonado por tecnologia, com experiência em suporte técnico e desenvolvimento de sistemas.
              </p>

              <p className="section-note">
                Cursando ensino superior em Sistemas para Internet pela UniALFA, iniciei minha trajetória pessoal em São Paulo e posteriormente me estabeleci em Douradina, no Paraná, onde venho desenvolvendo minha carreira na área de tecnologia. Possuo experiência em desenvolvimento de sistemas e suporte computacional, atuando na resolução de problemas e na implantação de soluções em ambientes corporativos. Busco constante aprimoramento profissional, incluindo estudos de inglês na Wizard by Pearson, com o objetivo de ampliar minhas oportunidades e crescimento na área de tecnologia.
              </p>

            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
