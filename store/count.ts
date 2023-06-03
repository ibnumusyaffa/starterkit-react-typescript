import { create } from 'zustand'

type State = {
  count: number
  inc: () => void
}

export const useStore = create<State>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
