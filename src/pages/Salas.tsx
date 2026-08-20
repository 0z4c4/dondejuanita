import { useStore } from '../store/useStore'
import { useState } from 'react'
import Modal from '../components/Modal'
import { config, whatsappLink } from '../data/content'

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
      <section className="page-header">
        <h1>Salas Temáticas</h1>
        <p>Cada sala es un mundo aparte. Elegí tu favorita.</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="salas-lista">
            {salas.map((s) => (
              <div
                key={s.id}
                className="sala-item"
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
                <div className="sala-item-img">
                  <img src={s.fotos[0]} alt={s.nombre} />
                </div>
                <div className="sala-item-content">
                  <div className="sala-item-header">
                    <h2>{s.nombre}</h2>
                    <span className="sala-tematica">{s.tematica}</span>
                  </div>
                  <p>{s.descripcion}</p>
                  <div className="sala-item-details">
                    <div className="sala-detail">
                      <span className="sala-detail-label">Capacidad</span>
                      <span className="sala-detail-value">{s.capacidad} personas</span>
                    </div>
                    <div className="sala-detail">
                      <span className="sala-detail-label">Precio</span>
                      <span className="sala-detail-value">{s.precioHora} Bs/hora</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section salas-info">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <h3>🕐 Horario</h3>
              <p>Lunes a Viernes: {config.horario_lun_vie}</p>
              <p>Sábados y Domingos: {config.horario_sab_dom}</p>
            </div>
            <div className="info-card">
              <h3>📱 Reservas</h3>
              <p>Podés reservar por WhatsApp o directamente en el local.</p>
              <p>Se recomienda reservar con 2h de anticipación.</p>
            </div>
            <div className="info-card">
              <h3>🎉 Eventos</h3>
              <p>Alquiler de salas para cumpleaños, reuniones y eventos especiales.</p>
              <p>Consultá paquetes personalizados.</p>
            </div>
          </div>
        </div>
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
