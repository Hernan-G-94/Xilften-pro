import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email);
        navigate("/movies");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <h1 style={{ marginBottom: "1rem" }}>🎬 Bienvenido</h1>
            <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
                Inicia sesión para explorar películas, ver detalles y guardar tus favoritas.
            </p>
            <h2>Iniciar Sesión</h2>

            <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
                <input 
                    type="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: "8px", width: "240px" }}
                />

                <button 
                    type="submit"
                    style={{
                        marginLeft: "10px",
                        padding: "8px 16px"
                    }}
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}