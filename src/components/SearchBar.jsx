import styles from "./SearchBar.module.css";

export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className={styles.searchBar}>
            {/* Input controlado que actualiza el texto de búsqueda */}
            <input
                type="text"
                placeholder="Buscar película o género..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}