import { GiMeal } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Link
      to="/"
      className="text-4xl font-bold text-pink-500 flex flex-row justify-center flex gap-4 pt-8 pb-8  border-pink-100 border-y-2 border-pink-500 py-2"
    >
      <h1>Recetarium</h1>
      <GiMeal className="bg-pink-500 rounded-full p-2 text-white text-4xl" />
    </Link>
  );
};

export default Home;
