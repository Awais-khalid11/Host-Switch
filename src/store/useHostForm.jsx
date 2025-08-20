import { create } from "zustand";

const useHostForm = create((set, get) => ({
  // 🔹 State
  portfolioData: {},
  expectationData: {},

  // 🔹 Actions
  updatePortfolio: (data) => set({ portfolioData: data }),
  updateExpectation: (data) => set({ expectationData: data }),

  // 🔹 Final merged payload
  getFinalPayload: () => ({
    ...get().portfolioData,
    ...get().expectationData,
  }),
}));

export default useHostForm;
