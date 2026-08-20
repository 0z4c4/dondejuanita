import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Salas from './pages/Salas'
import Precios from './pages/Precios'
import { asset, config } from './data/content'

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
          <Route path="/precios" element={<Precios />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-info">
            <img src={asset('logo.jpg')} alt="Donde Juanita" className="footer-logo" width={50} height={50} />
            <p>Donde Juanita</p>
            <p className="footer-address">Santa Cruz de la Sierra, Bolivia</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces</h4>
            <Link to="/">Inicio</Link>
            <Link to="/salas">Salas</Link>
            <Link to="/precios">Precios</Link>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <a
              href={`https://wa.me/${config.whatsapp_numero}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href={config.facebook_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Donde Juanita. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}
