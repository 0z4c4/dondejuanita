import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Salas from './pages/Salas'
import Menu from './pages/Menu'
import Juegos from './pages/Juegos'
import { config } from './data/content'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/salas" element={<Salas />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/precios" element={<Navigate to="/menu" replace />} />
          <Route path="/juegos" element={<Juegos />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <span className="footer-logo" role="img" aria-label="Donde Juanita"></span>
            <p className="footer-address">Santa Cruz de la Sierra, Bolivia</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces</h4>
            <Link to="/" viewTransition>Inicio</Link>
            <Link to="/salas" viewTransition>Salas</Link>
            <Link to="/menu" viewTransition>Menú</Link>
            <Link to="/juegos" viewTransition>Juegos</Link>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <div className="footer-social">
              <a
                href={`https://wa.me/${config.whatsapp_numero}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-icon"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href={config.facebook_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-icon"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Donde Juanita. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}
