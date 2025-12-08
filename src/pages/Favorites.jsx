import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../services/favorites";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
    const { data: favorites = [] } = useQuery({
        queryKey: ["favorites"],
        queryFn: getFavorites,
    });

    return (
        <div style={{ marginTop: "1rem" }}>
            <h2 style={{ textAlign: "center" }}>Mis Favoritos ❤️</h2>

            <Container>
                {favorites.length === 0 ? (
                    <p style={{ textAlign: "center", marginTop: "1rem" }}>
                        No agregaste ninguna película todavía.
                    </p>
                ) : (
                    favorites.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            isFavorite={true}
                            onToggleFavorite={() => {}} // No se usa acá
                        />
                    ))
                )}
            </Container>
        </div>
    );
}