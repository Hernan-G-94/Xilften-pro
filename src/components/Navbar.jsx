import styles from "./Navbar.module.css";
import FavoritesBadge from "./FavoritesBadge";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <>
        <nav className={styles.navbar}>
            <h1>🎥 XILFTEN</h1>
        </nav>

        {/* Renderizamos el badge desde el navbar para mantener jerarquía; el componente mismo decide si aparece */}
        <FavoritesBadge />
        </>
    );
}