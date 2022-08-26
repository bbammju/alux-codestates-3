import create from 'zustand'

export const useStore = create((set) => ({
  cur_product: 'test',
  setting: (e) => set((state) => ({cur_product: state.cur_product = e}))
}))