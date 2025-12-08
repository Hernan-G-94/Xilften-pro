import { useAuth } from "../context/AuthContext";

export default function Profile() {
    const { user, logout } = useAuth();

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h1>Mi Perfil</h1>

            <div
                style={{
                    marginTop: "2rem",
                    padding: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    width: "260px",
                    marginInline: "auto"
                }}
            >
                <p><b>Email:</b> {user.email}</p>

                <button 
                    style={{ marginTop: "1rem" }} 
                    onClick={logout}
                >
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
}