import { Routes, Route } from 'react-router-dom';
import SummerReceipts from '../screens/SummerReceipts';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/recetas-verano" element={<SummerReceipts />} />
    </Routes>
  );
}
