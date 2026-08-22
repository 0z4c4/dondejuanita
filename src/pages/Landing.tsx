import { Link } from 'react-router-dom'
import { whatsappLink, asset, config } from '../data/content'

export default function Landing() {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${asset('img/hero-bg.webp')})` }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-vineta"></div>
        <div className="hero-content">
          <div className="hero-main">
            <h1 className="hero-titulo">Donde Juanita</h1>
            <div className="hero-text">
              <p className="hero-tagline">Como estar en casa</p>
              <p className="hero-ubication">Santa Cruz de la Sierra, Bolivia</p>
            </div>
            <div className="hero-actions">
              <div className="hero-buttons">
                <Link to="/salas" className="btn btn-primary" viewTransition>
                  Explorar Salas
                </Link>
                <Link to="/menu" className="btn btn-secondary" viewTransition>
                  Ver Menú
                </Link>
              </div>
              <div className="hero-imagen">
                <img
                  src={asset('img/hero-right.webp')}
                  alt=""
                  className="hero-img"
                  width={300}
                  height={523}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="section about">
        <div className="container about-grid">
          <div className="about-media">
            <picture>
              <source media="(min-width: 769px)" srcSet={asset('img/empanada-landing-left.webp')} />
              <img
                src={asset('img/empanada-landing.webp')}
                alt="Empanadas recién horneadas en Donde Juanita"
                loading="lazy"
                width={1536}
                height={1024}
              />
            </picture>
          </div>
          <div className="about-texto">
            <h2>Nuestra Historia</h2>
            <p>
              En el corazón de Santa Cruz de la Sierra, <strong>Donde Juanita</strong> nació del
              amor por el café de calidad y los espacios donde la gente pueda desconectarse del
              ruido y reconectarse con lo que importa.
            </p>
            <p>
              Somos una cafetería temática donde experimentás un viaje de sabor de otro nivel:
              salas que te transportan a otro mundo y horneados con el gusto de siempre.
            </p>
            <p>
              Creemos que un buen café no se mide solo por su sabor, sino por el momento
              que te hace vivir.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section highlights">
        <div className="container">
          <div className="highlights-grid">
            <div
              className="highlight"
              style={{ backgroundImage: `url(${asset('img/highlight-horneados.webp')})` }}
            >
              <div className="highlight-overlay"></div>
              <div className="highlight-body">
                <h3>Horneados Tradicionales</h3>
                <p>Horneamos todos los días con recetas de casa. El sabor tradicional en cada bocado.</p>
              </div>
            </div>
            <div
              className="highlight"
              style={{ backgroundImage: `url(${asset('img/salas/sala2d-2.webp')})` }}
            >
              <div className="highlight-overlay"></div>
              <div className="highlight-body">
                <h3>Salas Únicas</h3>
                <p>Cada sala tiene su propia personalidad y ambientación temática.</p>
              </div>
            </div>
            <div
              className="highlight"
              style={{ backgroundImage: `url(${asset('img/highlight-patio.webp')})` }}
            >
              <div className="highlight-overlay"></div>
              <div className="highlight-body">
                <h3>Espacio para todos</h3>
                <p>Trabajo, lectura, reuniones o simplemente disfrutar. Vos decidís.</p>
              </div>
            </div>
            <div
              className="highlight"
              style={{ backgroundImage: `url(${asset('img/highlight-patio.webp')})` }}
            >
              <div className="highlight-overlay"></div>
              <div className="highlight-body">
                <h3>Producto Local</h3>
                <p>Ingredientes frescos de productores cruceños.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horario y ubicación */}
      <section className="section horario-section">
        <div className="container info-grid">
          <div className="info-card">
            <h2>Horarios</h2>
            <p>Lunes a Viernes: {config.horario_lun_vie}</p>
            <p>Sábados y Domingos: {config.horario_sab_dom}</p>
            <div className="info-ciudad">Santa Cruz de la Sierra, Bolivia</div>
          </div>
          <div className="info-card">
            <iframe
              className="info-mapa"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d474.8866760927565!2d-63.174266116567615!3d-17.78730659628543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e9007c5c568b%3A0x45e455c1f889f154!2sDonde%20Juanita!5e0!3m2!1ses!2sus!4v1787357819989!5m2!1ses!2sus"
              title="Mapa de Donde Juanita"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2>¿Listo para vivir la experiencia?</h2>
          <p>Reservá tu sala favorita o visitános sin compromiso</p>
          <div className="cta-buttons">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Reservar por WhatsApp
            </a>
            <Link to="/menu" className="btn btn-secondary" viewTransition>
              Ver Menú
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
