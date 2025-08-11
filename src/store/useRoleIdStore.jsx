// src/store/useRoleStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useRoleStore = create(
  persist(
    (set) => ({
      roleId: null,
      setRoleId: (role) => set({ roleId: role }), 
      removeRoleId: () => set({ roleId: null })
    }),
    {
      name: 'role-storage', 
    }
  )
)

export default useRoleStore
