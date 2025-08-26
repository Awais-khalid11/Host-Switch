// src/store/useRoleStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRoleStore = create(
  persist(
    (set) => ({
      roleId: null,
      user: null,
      setRoleId: (role) => set({ roleId: role }),
      removeRoleId: () => set({ roleId: null }),

      setUser: (user) => set({ user: user }),
    }),
    {
      name: "role-storage",
    }
  )
);

export default useRoleStore;
