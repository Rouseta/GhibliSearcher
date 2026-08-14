import { useState } from 'react';
import { GiMeal } from 'react-icons/gi';
import { Navbar } from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <>
      <div className="text-4xl font-bold text-pink-500 flex flex-row justify-center flex gap-4 pt-8 pb-8  border-pink-100 border-y-2 border-pink-500 py-2">
        <h1>Recetarium</h1>
        <GiMeal className="bg-pink-500 rounded-full p-2 text-white text-4xl" />
      </div>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
