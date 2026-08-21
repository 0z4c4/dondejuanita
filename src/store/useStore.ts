import { create } from 'zustand'
import { salas, menu, juegos, type Sala, type MenuItem } from '../data/content'

export type { Sala, MenuItem }

interface AppState {
  salas: Sala[]
  menu: MenuItem[]
  juegos: string[]
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
