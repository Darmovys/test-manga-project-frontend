import { create } from 'zustand';

export const useStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}));
