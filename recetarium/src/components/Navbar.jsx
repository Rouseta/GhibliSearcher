import { Link } from 'react-router-dom';
import { GiHotMeal } from 'react-icons/gi';

export function Navbar() {
  return (
    <nav className="bg-pink-500 text-white ">
      <ul className="flex flex-row justify-around">
        <li>
          <Link to="/recetas-verano">Recetas de verano</Link>
        </li>
        <li>
          <Link to="/recetas-invierno">Recetas de invierno</Link>
        </li>
        <li>
          <Link to="/recetas-primavera">Recetas primaverales</Link>
        </li>
        <li>
          <Link to="/recetas-otono">Recetas de otonito</Link>
        </li>
      </ul>
    </nav>
  );
}
