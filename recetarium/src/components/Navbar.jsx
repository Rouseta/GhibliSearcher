import { Link } from 'react-router-dom';
import { getCurrentSeason } from '@postlight/seasons';

export function Navbar() {
  const seasonalRoutes = {
    summer: [
      { path: '/recetas-verano', title: 'Recetas de verano' },
      { path: '/recetas-otono', title: 'Recetas de otono' },
      { path: '/recetas-invierno', title: 'Recetas de invierno' },
      { path: '/recetas-primavera', title: 'Recetas de primavera' },
    ],
    winter: [
      { path: '/recetas-invierno', title: 'Recetas de invierno' },
      { path: '/recetas-primavera', title: 'Recetas de primavera' },
      { path: '/recetas-verano', title: 'Recetas de verano' },
      { path: '/recetas-otono', title: 'Recetas de otono' },
    ],
    spring: [
      { path: '/recetas-primavera', title: 'Recetas de primavera' },
      { path: '/recetas-verano', title: 'Recetas de verano' },
      { path: '/recetas-otono', title: 'Recetas de otono' },
      { path: '/recetas-invierno', title: 'Recetas de invierno' },
    ],
    autumn: [
      { path: '/recetas-otono', title: 'Recetas de otono' },
      { path: '/recetas-invierno', title: 'Recetas de invierno' },
      { path: '/recetas-primavera', title: 'Recetas de primavera' },
      { path: '/recetas-verano', title: 'Recetas de verano' },
    ],
    default: [
      { path: '/recetas-primavera', title: 'Recetas de primavera' },
      { path: '/recetas-verano', title: 'Recetas de verano' },
      { path: '/recetas-otono', title: 'Recetas de otono' },
      { path: '/recetas-invierno', title: 'Recetas de invierno' },
    ],
  };
  const currentSeason = getCurrentSeason(new Date());

  const currentRoutesAndTitles = seasonalRoutes[currentSeason];

  return (
    <nav className="bg-pink-500 text-white ">
      <ul className="flex flex-row justify-around">
        {currentRoutesAndTitles?.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
