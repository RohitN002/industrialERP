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
  persist(
    (set) => ({
      accessToken: null,
      role: null,

      setRole: (role) => set({ role }),

      setToken: (token) => set({ accessToken: token }),

      logout: () =>
        set({
          accessToken: null,
          role: null,
        }),
    }),
    {
      name: "auth-storage", // 🔑 required: unique key in localStorage
      // optional: choose storage (default is localStorage)
      // storage: createJSONStorage(() => sessionStorage),

      // optional: persist only specific fields
      partialize: (state) => ({
        accessToken: state.accessToken,
        role: state.role,
      }),
    }
  )
);