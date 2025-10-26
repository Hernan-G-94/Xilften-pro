import styles from "./MovieCard.module.css";

export default function MovieCard({ movie, onSelect }) {
    return (
    <div className={styles.card} onClick={() => onSelect(movie)}>
        <img src={movie.image} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.genre} ({movie.year})</p>
    </div>
    );
}