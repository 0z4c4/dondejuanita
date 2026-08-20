import { useStore } from '../store/useStore'
import { useState } from 'react'
import Modal from '../components/Modal'

export default function Precios() {
  const menu = useStore((s) => s.menu)
  const [modalAbierto, setModalAbierto] = useState(false)
  const [itemSeleccionado, setItemSeleccionado] = useState<typeof menu[0] | null>(null)

  const categorias = [...new Set(menu.map((item) => item.categoria))]

  const abrirModal = (item: typeof menu[0]) => {
    setItemSeleccionado(item)
    setModalAbierto(true)
  }

  return (
    <div className="page precios-page">
      <section className="page-header">
        <h1>Nuestra Carta</h1>
        <p>Cada producto es una experiencia. Descubrilos.</p>
      </section>

      <section className="section">
        <div className="container">
          {categorias.map((cat) => (
            <div key={cat} className="menu-categoria">
              <h3 className="menu-categoria-title">{cat}</h3>
              <div className="menu-cards">
                {menu
                  .filter((item) => item.categoria === cat)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="menu-card"
                      role="button"
                      tabIndex={0}
                      onClick={() => abrirModal(item)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          abrirModal(item)
                        }
                      }}
                    >
                      <div className="menu-card-img">
                        {item.imagen ? (
                          <img src={item.imagen} alt={item.nombre} />
                        ) : (
                          <div className="menu-card-placeholder">
                            <span>📷</span>
                          </div>
                        )}
                      </div>
                      <div className="menu-card-body">
                        <h4>{item.nombre}</h4>
                        <p>{item.descripcion}</p>
                        <span className="menu-card-precio">{item.precio} Bs</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section precios-nota">
        <div className="container">
          <p>
            <strong>Nota:</strong> Los precios pueden variar. Consultá disponibilidad y precios
            actualizados en el local. Formas de pago: efectivo, QR Tigo/Enlace, transferencia.
          </p>
        </div>
      </section>

  <Modal
    abierto={modalAbierto}
    onClose={() => setModalAbierto(false)}
    titulo={itemSeleccionado?.nombre ?? ''}
    descripcion={itemSeleccionado?.descripcion ?? ''}
    imagen={itemSeleccionado?.imagen}
    precio={itemSeleccionado?.precio}
    precioLabel={`${itemSeleccionado?.precio} Bs`}
  />
    </div>
  )
}
