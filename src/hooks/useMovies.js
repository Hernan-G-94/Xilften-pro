// Custom hook que encapsula la lógica de lectura (useQuery).
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, searchMovies } from "../services/movies";

export default function useMovies(searchTerm) {
    // Clave dinámica: si hay búsqueda, se cachea por texto
    const queryKey = ["movies", searchTerm || "popular"];

    // Función que decide si buscar populares o resultados según el término
    const queryFn = async ({ queryKey }) => {
        const key = queryKey[1];
        if (!key || key === "popular") {
            return getPopularMovies(1);
        }
        return searchMovies(key, 1);
    };

    // React Query maneja cache, estados y revalidación
    const query = useQuery({
        queryKey, 
        queryFn,
            keepPreviousData: true, // evita parpadeos
            staleTime: 1000 * 60 * 2, // 2 minutos
    });

    return query;
}