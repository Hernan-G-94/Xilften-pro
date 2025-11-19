// Servicio que simula un backend usando localStorage.
// React Query lo trata como si fuera real.
const KEY = "xilften_favorites_v1";

// Lee favoritos desde localStorage
function readStore() {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

// Guarda lista en localStorage
function writeStore(list) {
    localStorage.setItem(KEY, JSON.stringify(list));
}

// Simula latencia para que las mutaciones tengan feedback visual
function delay(ms = 300) {
    return new Promise((res) => setTimeout(res, ms));
}

// obtiene la lista completa
export async function getFavorites() {
    await delay(200);
    return readStore();
}

// agrega una película si no existe aún
export async function addFavorite(movie) {
    await delay(250);
    const list = readStore();
    if (list.find((m) => m.id === movie.id)) return list;
    const next = [movie, ...list];
    writeStore(next);
    return next;
}

// Elimina una película por id
export async function removeFavorite(movieId) {
    await delay(200);
    const list = readStore();
    const next = list.filter((m) => m.id !== movieId);
    writeStore(next);
    return next;
}