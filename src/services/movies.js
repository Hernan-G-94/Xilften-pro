import axios from "axios"; // Servicio para consumir TMDB (lecturas)

const API_KEY = "acebee60bb3a60b04ec398f3743b308d";
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "es-ES";

// Cliente preconfigurado con API key y idioma
const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: LANGUAGE,
    },
});

let genreMapCache = null;

// Obtiene listado de géneros y lo cachea para no pedirlo siempre
async function fetchGenres() {
    if (genreMapCache) return genreMapCache;

    const res = await api.get("/genre/movie/list");
    const map = {};
    for (const g of res.data.genres) map[g.id] = g.name;

    genreMapCache = map;
    return map;
}

// Construye ruta de imagen de TMDB
function tmdbImagePath(path) {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : null;
}

export async function getPopularMovies(page = 1) {
    const [genresRes, moviesRes] = await Promise.all([
        fetchGenres(),
        api.get("/movie/popular", { params: { page } }),
    ]);

    // Normaliza estructura de TMDB al formato que usa tu app
    const movies = moviesRes.data.results.map((m) => ({
        id: m.id,
        title: m.title,
        year: m.release_date ? m.release_date.slice(0, 4) : "N/A",
        genre: m.genre_ids && m.genre_ids.length > 0 ? (genresRes[m.genre_ids[0]] || "—") : "—",
        image: tmdbImagePath(m.poster_path),
        overview: m.overview,
    }));

    return { movies, total_pages: moviesRes.data.total_pages };
}

// Búsqueda por texto
export async function searchMovies(query, page = 1) {
    if (!query) return getPopularMovies(page);

    const genres = await fetchGenres();

    const res = await api.get("/search/movie", { 
        params: { query, page, include_adult: false } 
    });

    const movies = res.data.results.map((m) => ({
        id: m.id,
        title: m.title,
        year: m.release_date ? m.release_date.slice(0, 4) : "N/A",
        genre: m.genre_ids && m.genre_ids.length > 0 ? (genres[m.genre_ids[0]] || "—") : "—",
        image: tmdbImagePath(m.poster_path),
        overview: m.overview,
    }));
    
    return { movies, total_pages: res.data.total_pages };
}