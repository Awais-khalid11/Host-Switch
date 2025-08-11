import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 60 * 1000,
      gcTime: 60 * 60 * 1000,
    },
    mutations: {
      retry: false,
      gcTime: 60 * 60 * 1000,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);