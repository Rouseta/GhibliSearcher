import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const MovieCard = ({ movie, favorites, toggleFavorite }) => {
  const [IsExpanded, setIsExpanded] = useState(true);

  const buttonText = IsExpanded ? 'Leer mas' : 'Leer menos';
  const classNameDescription = IsExpanded
    ? 'movie-description-closed'
    : 'movie-description-opened';
  const isFavorite = favorites.includes(movie.id);
  const cuoreFav = isFavorite ? <FaHeart color="red" /> : <FaRegHeart />;

  return (
    <div className="movie-card" key={movie.id}>
      <h1>{movie.title}</h1>

      <img className="movie-image" src={movie.movie_banner} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.director}</h3> <p>({movie.release_date})</p>{' '}
        <p>Duracion:{movie.running_time}'</p>
      </div>
      <p className={classNameDescription}>{movie.description}</p>
      <div className="fav-container">
        <button
          onClick={() => setIsExpanded(!IsExpanded)}
          className="card-button"
        >
          {buttonText}
        </button>
        <div
          onClick={() => {
            toggleFavorite(movie);
          }}
        >
          {cuoreFav}
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
