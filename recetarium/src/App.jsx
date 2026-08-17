import { useState } from 'react';
import Title from './components/Title';
import { Navbar } from './components/Navbar';
import Home from './screens/home';
import AppRoutes from './routes/AppRoutes';

import './App.css';

function App() {
  return (
    <>
      <Title />
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
