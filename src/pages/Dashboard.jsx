import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { user, logout } = useAuth();

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h2>Panel del usuario</h2>
            <p>Bienvenido, {user.email}</p>

            <button onClick={logout} style={{ marginTop: "1rem" }}>
                Cerrar sesión
            </button>
        </div>
    );
}