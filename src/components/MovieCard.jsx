import styles from "./MovieCard.module.css";

export default function MovieCard({ movie, onSelect, isFavorite, onToggleFavorite }) {
    return (
        <div className={styles.card}>
            {/* Bloque principal: al hacer click muestra los detalles */}
            <div onClick={() => onSelect(movie)} style={{ cursor: "pointer" }}>
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.genre} ({movie.year})</p>
            </div>

            {/* Controles: botones de favorito y ver */}
            <div style={{ padding: "0.5rem", display: "flex", justifyContent: "center", gap: "0.5rem" }}>
                {/* Botón para agregar o quitar de favoritos */}
                <button
                    onClick={() => onToggleFavorite(movie)}
                    style={{
                        border: "none",
                        padding: "0.4rem 0.6rem",
                        borderRadius: 6,
                        cursor: "pointer",
                        background: isFavorite ? "#ffcc00" : "#20232a",
                        color: isFavorite ? "#000" : "#fff",
                    }}
                >
                    {isFavorite ? "★ Favorito" : "☆ Favorito"}
                </button>

                {/* Botón para abrir modal de detalles */}
                <button
                    onClick={() => onSelect(movie)}
                    style={{
                        border: "1px solid #ccc",
                        padding: "0.3rem 0.6rem",
                        borderRadius: 6,
                        cursor: "pointer",
                        background: "#fff",
                    }}
                >
                Ver
                </button>
            </div>
        </div>
    );
}