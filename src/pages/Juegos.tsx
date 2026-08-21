import { useStore } from '../store/useStore'

export default function Juegos() {
  const juegos = useStore((s) => s.juegos)

  return (
    <div className="page juegos-page">
      <section
        className="page-header"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/juegospage/1920/700)' }}
      >
        <div className="page-header-overlay"></div>
        <p>Disfrutá de nuestros juegos a cambio de tu Carnet de identidad.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="juegos-grid">
            {juegos.map((juego) => (
              <div key={juego.id} className="juego-card">
                <img
                  src={juego.imagen}
                  alt={juego.nombre}
                  width={500}
                  height={500}
                  loading="lazy"
                />
                <div className="juego-overlay" aria-hidden="true"></div>
                <span className="juego-nombre">{juego.nombre}</span>
              </div>
            ))}
          </div>
          <p className="juegos-nota">Consultá la disponibilidad de los juegos en el local.</p>
        </div>
      </section>
    </div>
  )
}
