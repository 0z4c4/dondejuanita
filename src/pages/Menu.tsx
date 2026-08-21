import { useStore } from '../store/useStore'
import { useState } from 'react'
import Modal from '../components/Modal'

export default function Menu() {
  const menu = useStore((s) => s.menu)
  const [modalAbierto, setModalAbierto] = useState(false)
  const [itemSeleccionado, setItemSeleccionado] = useState<typeof menu[0] | null>(null)

  const categorias = [...new Set(menu.map((item) => item.categoria))]

  const abrirModal = (item: typeof menu[0]) => {
    setItemSeleccionado(item)
    setModalAbierto(true)
  }

  const precioLabel = itemSeleccionado
    ? itemSeleccionado.precioJarra
      ? `Vaso ${itemSeleccionado.precio} Bs · Jarra ${itemSeleccionado.precioJarra} Bs`
      : `${itemSeleccionado.precio} Bs`
    : ''

  return (
    <div className="page menu-page">
      <section
        className="page-header"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/menupage/1920/700)' }}
      >
        <div className="page-header-overlay"></div>
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
                      <div className="card-img">
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          width={600}
                          height={450}
                          loading="lazy"
                        />
                      </div>
                      <div className="menu-card-body">
                        <h4>{item.nombre}</h4>
                        {item.descripcion && <p>{item.descripcion}</p>}
                        <span className="menu-card-precio">
                          {item.precioJarra ? `${item.precio} / ${item.precioJarra} Bs` : `${item.precio} Bs`}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section menu-nota">
        <div className="container">
          <p>
            <strong>Nota:</strong> Los precios pueden variar. Consultá disponibilidad y precios
            actualizados en el local. En bebidas frías con doble precio: vaso / jarra.
            Formas de pago: efectivo, QR Tigo/Enlace, transferencia.
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
    precioLabel={precioLabel}
  />
    </div>
  )
}
