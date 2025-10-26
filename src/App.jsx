import { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import { movies } from "./data/movies";
import "./App.css";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Container>
        {filteredMovies.length > 0 ? ( filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSelect={setSelectedMovie} />
          ))
        ) : (
          <p>No se encontraron películas 😢</p>
        )}
      </Container>

      {selectedMovie && (
        <div className="modal" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.image} alt={selectedMovie.title} />
            <p><b>Año:</b> {selectedMovie.year}</p>
            <p><b>Género:</b> {selectedMovie.genre}</p>
            <button onClick={() => setSelectedMovie(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
