import { Link } from 'react-router-dom'
import { whatsappLink, asset, config } from '../data/content'

export default function Landing() {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: 'url(https://picsum.photos/seed/cafehero/1920/1080)' }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-main">
            <h1 className="hero-titulo">Donde Juanita</h1>
            <div className="hero-text">
              <p className="hero-tagline">Como estar en casa</p>
              <p className="hero-ubication">Santa Cruz de la Sierra, Bolivia</p>
            </div>
            <div className="hero-actions">
              <div className="hero-buttons">
                <Link to="/salas" className="btn btn-primary">
                  Explorar Salas
                </Link>
                <Link to="/menu" className="btn btn-secondary">
                  Ver Menú
                </Link>
              </div>
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
      </section>

      {/* Sobre nosotros */}
      <section className="section about">
        <div className="container">
          <h2>Nuestra Historia</h2>
          <p>
            En el corazón de Santa Cruz de la Sierra, <strong>Donde Juanita</strong> nació del
            amor por el café de calidad y los espacios donde la gente pueda desconectarse del
            ruido y reconectarse con lo que importa. Cada sala temática es una invitación a
            vivir una experiencia diferente.
          </p>
          <p>
            Creemos que un buen café no se mide solo por su sabor, sino por el momento que
            te hace vivir.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section highlights">
        <div className="container">
          <div className="highlights-grid">
            <div
              className="highlight"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/cafeespecialidad/800/600)' }}
            >
              <div className="highlight-overlay"></div>
              <div className="highlight-body">
                <h3>Café de Especialidad</h3>
                <p>Tostamos nuestros granos localmente. Cada taza es una experiencia.</p>
              </div>
            </div>
            <div
              className="highlight"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/salasunicas/800/600)' }}
            >
              <div className="highlight-overlay"></div>
              <div className="highlight-body">
                <h3>Salas Únicas</h3>
                <p>Cada sala tiene su propia personalidad y ambientación temática.</p>
              </div>
            </div>
            <div
              className="highlight"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/espaciotodos/800/600)' }}
            >
              <div className="highlight-overlay"></div>
              <div className="highlight-body">
                <h3>Espacio para todos</h3>
                <p>Trabajo, lectura, reuniones o simplemente disfrutar. Vos decidís.</p>
              </div>
            </div>
            <div
              className="highlight"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/productolocal/800/600)' }}
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

      {/* Horario */}
      <section className="section horario-section">
        <div className="container">
          <h2>Horarios</h2>
          <p>Lunes a Viernes: {config.horario_lun_vie}</p>
          <p>Sábados y Domingos: {config.horario_sab_dom}</p>
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
            <Link to="/menu" className="btn btn-secondary">
              Ver Menú
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
