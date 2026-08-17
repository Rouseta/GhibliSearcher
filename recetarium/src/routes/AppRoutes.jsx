import { Routes, Route } from 'react-router-dom';
import SummerReceipts from '../screens/SummerReceipts';
import Home from '../screens/home';
import AutumnReceipts from '../screens/AutumnReceipts';
import WinterReceipts from '../screens/WinterReceipts';
import SpringReceipts from '../screens/SpringReceipts';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/recetas-verano" element={<SummerReceipts />} />
      <Route path="/recetas-otono" element={<AutumnReceipts />} />
      <Route path="/recetas-invierno" element={<WinterReceipts />} />
      <Route path="/recetas-primavera" element={<SpringReceipts />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
