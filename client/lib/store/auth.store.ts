import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  accessToken: string | null;
  role: string[] | null;
  setRole: (role: string[] | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  
    (set) => ({
      accessToken: null,
      role: null,
      setRole: (role: string[] | null) => set({ role }),
      setToken: (token) => set({ accessToken: token }),
      logout: () => set({ accessToken: null, role: null, }),
    }),
   
  
);