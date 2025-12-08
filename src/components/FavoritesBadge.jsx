import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../services/favorites";
import { useLocation } from "react-router-dom";
import styles from "./FavoritesBadge.module.css";

export default function FavoritesBadge() {
    const location = useLocation();

    // Solo hacemos la query si estamos en /movies (evita consultas innecesarias)
    const enabled = location.pathname === "/movies";

    const { data: favorites = [], isFetching } = useQuery({
        queryKey: ["favorites"],
        queryFn: getFavorites,
        enabled, // si false, la query no se ejecuta
        staleTime: 1000 * 30,
    });

    // Contador derivado
    const count = useMemo(() => (favorites ? favorites.length : 0), [favorites]);

    // Si no estamos en /movies, no renderizamos nada
    if (!enabled) return null;

    return (
        <div className={styles.badge} title="Favoritos">
        <span className={styles.star}>★</span>
        <span className={styles.count}>{isFetching ? "…" : count}</span>
        </div>
    );
}