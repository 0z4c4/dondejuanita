import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { whatsappLink, asset } from '../data/content'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/salas', label: 'Salas' },
    { to: '/menu', label: 'Menú' },
    { to: '/juegos', label: 'Juegos' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={asset('img/logo.webp')} alt="Donde Juanita" className="navbar-logo-img" width={1000} height={380} />
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menú"
        >
          {menuAbierto ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${menuAbierto ? 'abierto' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? 'activo' : ''}
                onClick={() => setMenuAbierto(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta"
              onClick={() => setMenuAbierto(false)}
            >
              Reservar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
