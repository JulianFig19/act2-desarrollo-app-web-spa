import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './Vistas/landing'
import Footer from './Componentes/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div>
      <main>
        <Landing />
      </main>
        <Footer />
    </div>

  );
};

export default App;
