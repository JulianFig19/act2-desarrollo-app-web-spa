import Landing from './Vistas/Landing'
import Footer from './Componentes/Footer/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Componentes/Header/Header'
import Listado from './Vistas/Listado-videojuegos'
import Perfil from './Vistas/Perfil'
import Login from './Vistas/Login'
import Notfound from './Vistas/404error'

function AppContent(){
return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/listavideojuegos' element={<Listado />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/Login' element={<Login />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer />
  </>
);
};


const App = () => {
  return (
    <div>
      <main>
        <AppContent />
      </main>
    </div>

  );
};

export default App;
