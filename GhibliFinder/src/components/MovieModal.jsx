const MovieModal = ({ movie, onClose }) => {
  // const trailerId = 'oTUush1wXL0';
  // const URLYoutube = `https://www.youtube.com/embed/${trailerId};`;

  return (
    <div className="modal-overlay">
      <div className="modal-video">
        <div className="modal-image-container">
          <img className="modal-image" src={movie.image} alt={movie.title} />

          <div className="modal-image-overlay">
            <div className="modal-titles">
              <h1>{movie.original_title}</h1>
              <h2>{movie.original_title_romanised}</h2>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default MovieModal;
