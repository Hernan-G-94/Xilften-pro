import { useState, useMemo } from "react";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import "../App.css";
import useMovies from "../hooks/useMovies";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getFavorites, addFavorite, removeFavorite } from "../services/favorites";
import Modal from "../components/Modal";

export default function Movies() {

    // Película seleccionada en el modal
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Texto de búsqueda
    const [searchTerm, setSearchTerm] = useState("");

    // Consulta de películas (TMDB)
    const { data, isLoading, isError, error, isFetching } = useMovies(searchTerm);

    // React Query cache y manejo de favoritos
    const qc = useQueryClient();

    // Lista completa de favoritos cacheada
    const { data: favorites = [] } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites
    });

    // Mutaciones
    const addFavMutation = useMutation({
    mutationFn: addFavorite,
    onSuccess: (newList) => {
        qc.setQueryData(["favorites"], newList);
    }
    });

    const removeFavMutation = useMutation({
    mutationFn: removeFavorite,
    onSuccess: (newList) => {
        qc.setQueryData(["favorites"], newList);
    }
    });

    // Alternar estado de favorito
    const toggleFavorite = (movie) => {
    const exists = favorites.find((f) => f.id === movie.id);
    exists
        ? removeFavMutation.mutate(movie.id)
        : addFavMutation.mutate(movie);
    };

    // Lista simplificada
    const movies = useMemo(() => (data ? data.movies : []), [data]);

    return (
    <>
        {/* Barra de búsqueda */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Grid */}
        <Container>
        {isLoading ? (
            <p>Cargando películas... 🍿</p>
        ) : isError ? (
            <div>
            <p>Error al cargar: {error?.message || "Error desconocido"}</p>
            <p>Reintentá recargando la página o verificá la conexión.</p>
            </div>
        ) : movies.length === 0 ? (
            <div>
            <p>No hay resultados</p>
            <p>Probá otra búsqueda o dejá el campo vacío para ver populares.</p>
            </div>
        ) : (
            movies.map((movie) => (
            <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={setSelectedMovie}
                isFavorite={!!favorites.find((f) => f.id === movie.id)}
                onToggleFavorite={toggleFavorite}
            />
            ))
        )}
        </Container>

        {/* Indicador pequeño */}
        {isFetching && !isLoading && (
        <div style={{ textAlign: "center" }}>Actualizando resultados...</div>
        )}

        {/* Modal */}
        {selectedMovie && (
            <Modal onClose={() => setSelectedMovie(null)}>
                <h2>{selectedMovie.title}</h2>

                {selectedMovie.image && (
                    <img src={selectedMovie.image} alt={selectedMovie.title} />
                )}

                <p><b>Año:</b> {selectedMovie.year}</p>
                <p><b>Género:</b> {selectedMovie.genre}</p>
                <p>{selectedMovie.overview}</p>

                <button onClick={() => setSelectedMovie(null)}>Cerrar</button>
            </Modal>
        )}

        {/* Indicadores de mutación */}
        <div style={{
        position: "fixed",
        right: 12,
        bottom: 12,
        background: "#fff",
        padding: 8,
        borderRadius: 8,
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
        }}>
        {addFavMutation.isLoading && <div>Agregando a favoritos...</div>}
        {removeFavMutation.isLoading && <div>Eliminando de favoritos...</div>}
        </div>
    </>
    );
}