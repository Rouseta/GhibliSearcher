const MovieModal = ({ movie, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        borderRadius: 8,
        zIndex: 9999,
        background: '#B3EBF2',
        color: '#2E6C7B',

        padding: '30px',
      }}
    >
      <h1>{movie.title}</h1>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};
export default MovieModal;
