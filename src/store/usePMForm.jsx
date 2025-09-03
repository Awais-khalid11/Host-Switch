import { create } from "zustand";

const usePMForm = create((set, get) => ({
  companyInfoData: {},
  portfolioData: {},
  expectationData: {},

  updateCompanyInfo: (data) => {
    const processedData =
      data instanceof FormData ? Object.fromEntries(data.entries()) : data;
    set({ companyInfoData: processedData });
  },

  updatePortfolio: (data) => {
    const processedData =
      data instanceof FormData ? Object.fromEntries(data.entries()) : data;
    set({ portfolioData: processedData });
  },

  updateExpectation: (data) => {
    const processedData =
      data instanceof FormData ? Object.fromEntries(data.entries()) : data;
    set({ expectationData: processedData });
  },

  updateFiles: (data) => set({ files: data }),

  getFinalPayload: () => {
    const state = get();
    return {
      ...state.companyInfoData,
      ...state.portfolioData,
      ...state.expectationData,
    };
  },

  clearForm: () =>
    set({
      companyInfoData: {},
      portfolioData: {},
      expectationData: {},
    }),
}));

export default usePMForm;
