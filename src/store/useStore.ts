import { create } from 'zustand'
import { salas, menu, juegos, type Sala, type MenuItem, type Juego } from '../data/content'

export type { Sala, MenuItem, Juego }

interface AppState {
  salas: Sala[]
  menu: MenuItem[]
  juegos: Juego[]
  salaSeleccionada: string | null
  setSalaSeleccionada: (id: string | null) => void
}

export const useStore = create<AppState>((set) => ({
  salas,
  menu,
  juegos,
  salaSeleccionada: null,
  setSalaSeleccionada: (id) => set({ salaSeleccionada: id })
}))
