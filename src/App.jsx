import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Páginas

import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import PrivateRoute from "./routes/PrivateRoute";
import PublicOnlyRoute from "./routes/PublicOnlyRute";
import Profile from "./pages/Profile";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                {/* Públicas generales */}
                <Route path="/" element={<Login />} />
                <Route path="/movies" element={<Movies />} />

                {/* Exclusivas para NO autenticados */}
                <Route 
                    path="/login" 
                    element={
                        <PublicOnlyRoute>
                            <Login />
                        </PublicOnlyRoute>
                    } 
                />

                {/* Privadas */}
                <Route 
                    path="/dashboard" 
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/favorites"
                    element={
                        <PrivateRoute>
                            <Favorites />
                        </PrivateRoute>
                    }
                />

                <Route 
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                {/* Ruta inexistente */}
                <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "2rem" }}>404 — No existe 😅</h2>} />
            </Routes>
        </BrowserRouter>
    );
}