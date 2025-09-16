// src/store/useRoleStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRoleStore = create(
  persist(
    (set) => ({
      roleId: null,
      user: null,
      property: null,
      setRoleId: (role) => set({ roleId: role }),
      removeRoleId: () => set({ roleId: null }),
      setProperty: (property) => set({ property: property }),
      setUser: (user) => set({ user: user }),
    }),
    {
      name: "role-storage",
    }
  )
);

export default useRoleStore;
