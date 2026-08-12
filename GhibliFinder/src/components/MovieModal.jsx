const MovieModal = ({ movie, onClose }) => {
  const trailerId = 'oTUush1wXL0';
  const URLYoutube = `https://www.youtube.com/embed/${trailerId};`;
  return (
    <div className="modal-overlay">
      {/* <div className="modal-content"> */}
      <iframe
        className="modal-video"
        src={URLYoutube}
        title={`Tráiler de ${movie.title}`}
        allow="fullscreen"
        onClick={onClose}
      />
      <button className="modal-close" onClick={onClose}>
        X
      </button>
      {/* </div> */}
    </div>
  );
};

export default MovieModal;
