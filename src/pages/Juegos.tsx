import { useStore } from '../store/useStore'

export default function Juegos() {
  const juegos = useStore((s) => s.juegos)

  return (
    <div className="page juegos-page">
      <section className="page-header">
        <h1>Juegos</h1>
        <p>Disfrutá de nuestros juegos a cambio de tu Carnet de identidad.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="juegos-grid">
            {juegos.map((juego) => (
              <div key={juego} className="juego-card">
                <span className="juego-avatar" aria-hidden="true">
                  {juego.charAt(0)}
                </span>
                <h3>{juego}</h3>
              </div>
            ))}
          </div>
          <p className="juegos-nota">Consultá la disponibilidad de los juegos en el local.</p>
        </div>
      </section>
    </div>
  )
}
