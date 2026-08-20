import { useEffect, useCallback, useRef, useState } from 'react'

interface ModalProps {
  abierto: boolean
  onClose: () => void
  titulo: string
  descripcion: string
  fotos?: string[]
  imagen?: string
  precio?: number
  precioLabel?: string
  children?: React.ReactNode
}

export default function Modal({
  abierto,
  onClose,
  titulo,
  descripcion,
  fotos,
  imagen,
  precio,
  precioLabel,
  children
}: ModalProps) {
  const [fotoActual, setFotoActual] = useState(0)
  const todasLasFotos = fotos || (imagen ? [imagen] : [])
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setFotoActual(0)
  }, [abierto])

  useEffect(() => {
    if (abierto) dialogRef.current?.focus()
  }, [abierto])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && todasLasFotos.length > 1) {
      setFotoActual((prev) => (prev === 0 ? todasLasFotos.length - 1 : prev - 1))
    }
    if (e.key === 'ArrowRight' && todasLasFotos.length > 1) {
      setFotoActual((prev) => (prev === todasLasFotos.length - 1 ? 0 : prev + 1))
    }
  }, [onClose, todasLasFotos.length])

  useEffect(() => {
    if (abierto) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [abierto, handleKeyDown])

  if (!abierto) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        {todasLasFotos.length > 0 && (
          <div className="modal-gallery">
            <div className="modal-gallery-img">
              <img src={todasLasFotos[fotoActual]} alt={`${titulo} - Foto ${fotoActual + 1}`} />
            </div>
            {todasLasFotos.length > 1 && (
              <>
                <button
                  className="modal-gallery-nav modal-gallery-prev"
                  onClick={() => setFotoActual((prev) => (prev === 0 ? todasLasFotos.length - 1 : prev - 1))}
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  className="modal-gallery-nav modal-gallery-next"
                  onClick={() => setFotoActual((prev) => (prev === todasLasFotos.length - 1 ? 0 : prev + 1))}
                  aria-label="Foto siguiente"
                >
                  ›
                </button>
                <div className="modal-gallery-dots">
                  {todasLasFotos.map((_, i) => (
                    <button
                      key={i}
                      className={`modal-gallery-dot ${i === fotoActual ? 'activo' : ''}`}
                      onClick={() => setFotoActual(i)}
                      aria-label={`Foto ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="modal-body">
          <h2>{titulo}</h2>
          {precio !== undefined && (
            <span className="modal-precio">{precioLabel || `${precio} Bs/hora`}</span>
          )}
          <p>{descripcion}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
