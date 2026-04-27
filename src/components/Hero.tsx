import { useEffect, useRef } from "react";

type HeroProps = {
  theme: "light" | "dark";
};

type MatrixBackgroundProps = {
  theme: "light" | "dark";
};

function MatrixBackground({ theme }: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const symbols = "01<>[]{}/*+-";
    const fontSize = 18;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDark = theme === "dark";

    let frameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let drops: number[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columns = Math.max(1, Math.floor(width / fontSize));
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * (height / fontSize))
      );
    };

    const draw = () => {
      context.fillStyle = isDark ? "rgba(10, 10, 10, 0.16)" : "rgba(255, 255, 255, 0.2)";
      context.fillRect(0, 0, width, height);
      context.fillStyle = isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(0, 0, 0, 0.18)";
      context.font = `${fontSize}px ui-monospace, SFMono-Regular, Consolas, monospace`;

      drops.forEach((drop, index) => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const x = index * fontSize;
        const y = drop * fontSize;

        context.fillText(symbol, x, y);

        if (y > height && Math.random() > 0.985) {
          drops[index] = 0;
        } else {
          drops[index] = drop + 0.55;
        }
      });

      if (!reduceMotion) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const handleResize = () => {
      resize();

      if (reduceMotion) {
        draw();
      }
    };

    resize();
    draw();
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="hero-matrix" aria-hidden="true" />;
}

function Hero({ theme }: HeroProps) {
  return (
    <section id="hero" className="portfolio-hero">
      <MatrixBackground theme={theme} />
      <div className="hero-gradient" aria-hidden="true"></div>

      <div className="container hero-content">
        <div className="hero-copy">
          <h1>
            Wesley <span>Silva</span>
          </h1>

          <div className="hero-actions">
            <a href="#about" className="btn-shell">
              Veja mais
            </a>
            <a href="#contact" className="btn-ghost">
              Entrar em contato
            </a>
          </div>

          <div className="hero-tags">
            <span>
              <i className="bi bi-pc-display"></i>
              IT Support
            </span>
            <span>
              <i className="bi bi-code-square"></i>
              Software Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
