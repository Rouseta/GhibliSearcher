import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import { FaHeart } from 'react-icons/fa';
import MovieModal from './components/MovieModal';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem('fav')) || [],
  );
  const [showFavorites, setShowFavorites] = useState(false);
  const showFavText = showFavorites ? 'Ver todas' : 'Ver favoritas';
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.director.toLowerCase().includes(search.toLowerCase()),
  );
  const toggleFavorite = (movie) => {
    if (favorites.includes(movie.id)) {
      const newFavorites = favorites.filter((id) => id !== movie.id);
      setFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, movie.id];
      setFavorites(newFavorites);
    }
  };
  const displayFavMovies = showFavorites
    ? filteredMovies.filter((movie) => favorites.includes(movie.id))
    : filteredMovies;

  const displayedMovies = [...displayFavMovies];
  if (sortOrder === 'asc') {
    displayedMovies.sort(
      (a, b) => Number(a.release_date) - Number(b.release_date),
    );
  }

  if (sortOrder === 'desc') {
    displayedMovies.sort(
      (a, b) => Number(b.release_date) - Number(a.release_date),
    );
  }

  const noResults = (
    <p className="no-results">
      Lo sentimos mucho! No se han encontrado resultados para {search}
    </p>
  );

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://ghibliapi.vercel.app/films');

      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(favorites));
  }, [favorites]);
  console.log('seleccionada:', selectedMovie);
  return (
    <>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
      <div className="app">
        <div className="header">
          <h1>Busca tu pelicula Ghibli favorita 🎬</h1>
          <p>
            Encuentra toda la informacion, sinopsis, director y muchas cosas
            mas!
          </p>
        </div>

        <div className="search">
          <input
            className="search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {movies !== '' && (
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sin ordenar</option>
              <option value="asc">Más antiguas primero</option>
              <option value="desc">Más recientes primero</option>
            </select>
          )}
          <button
            className="fav-button"
            onClick={() => setShowFavorites(!showFavorites)}
          >
            <FaHeart color="red" /> {showFavText}
          </button>
        </div>

        {movies.length > 0 &&
          (filteredMovies.length > 0 ? (
            <div className="movie-grid">
              {displayedMovies.map((movie) => (
                <MovieCard
                  onOpenModal={setSelectedMovie}
                  favorites={favorites}
                  key={movie.id}
                  movie={movie}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <>{noResults}</>
          ))}
      </div>
    </>
  );
}

export default App;
