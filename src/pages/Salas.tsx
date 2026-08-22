import { useStore } from '../store/useStore'
import { useState } from 'react'
import Modal from '../components/Modal'
import { whatsappLink, asset } from '../data/content'

export default function Salas() {
  const salas = useStore((s) => s.salas)
  const [modalAbierto, setModalAbierto] = useState(false)
  const [salaSeleccionada, setSalaSeleccionada] = useState<typeof salas[0] | null>(null)

  const abrirModal = (sala: typeof salas[0]) => {
    setSalaSeleccionada(sala)
    setModalAbierto(true)
  }

  return (
    <div className="page salas-page">
      <section
        className="page-header"
        style={{ backgroundImage: `url(${asset('img/hero-bg.webp')})` }}
      >
        <div className="page-header-overlay"></div>
        <p>Cada sala es un mundo aparte. Elegí tu favorita.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="salas-grid">
            {salas.map((s) => (
              <div
                key={s.id}
                className="sala-card"
                role="button"
                tabIndex={0}
                onClick={() => abrirModal(s)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    abrirModal(s)
                  }
                }}
              >
                <div className="card-img">
                  <img src={s.fotos[0]} alt={s.nombre} width={800} height={600} loading="lazy" />
                  <span className="card-badge">{s.tematica}</span>
                </div>
                <div className="sala-card-body">
                  <h2>{s.nombre}</h2>
                  <p className="sala-card-desc">{s.descripcion}</p>
                  <div className="sala-card-specs">
                    <div className="sala-spec">
                      <span className="sala-spec-label">Capacidad</span>
                      <span className="sala-spec-value">{s.capacidad} personas</span>
                    </div>
                    <div className="sala-spec">
                      <span className="sala-spec-label">Precio</span>
                      <span className="sala-spec-value">{s.precioHora} Bs/hora</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="page-header eventos-banner"
        style={{ backgroundImage: `url(${asset('img/hero-bg.webp')})` }}
      >
        <div className="page-header-overlay"></div>
        <p>Cumpleaños, reuniones y eventos especiales. Consultá paquetes personalizados.</p>
      </section>

      <Modal
        abierto={modalAbierto}
        onClose={() => setModalAbierto(false)}
        titulo={salaSeleccionada?.nombre ?? ''}
        descripcion={salaSeleccionada?.descripcion ?? ''}
        fotos={salaSeleccionada?.fotos}
        precio={salaSeleccionada?.precioHora}
        precioLabel={`${salaSeleccionada?.precioHora} Bs/hora · Hasta ${salaSeleccionada?.capacidad} personas`}
      >
        <a
          href={whatsappLink(
            `Hola! Quiero reservar la ${salaSeleccionada?.nombre} para X personas`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary modal-cta"
        >
          Reservar por WhatsApp
        </a>
      </Modal>
    </div>
  )
}
