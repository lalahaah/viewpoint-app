import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole = "CREATOR" | "SPONSOR";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  /** Creator: channel handle / Sponsor: company name */
  handle?: string;
}

interface AuthState {
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    { name: "viewpoint-auth" }
  )
);
