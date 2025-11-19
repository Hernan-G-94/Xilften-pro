import React from "react";
import ReactDOM from "react-dom/client";
// React Query para manejo global de datos remotos
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./App.css";

// Instancia global del cliente de consultas
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* Proveedor global de React Query */}
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
