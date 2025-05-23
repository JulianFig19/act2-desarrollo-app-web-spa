import Landing from './Vistas/Landing'
import Footer from './Componentes/Footer/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Componentes/Header/Header'
import Listado from './Vistas/Listado-videojuegos'
import Perfil from './Vistas/Perfil'
import Login from './Vistas/Login'
import Notfound from './Vistas/404error'
import Busqueda from './Vistas/Busqueda'
import Detallegame from './Vistas/Detallegame'
import ProtectedRoutes from './utils/ProtectedRoutes'
import { AuthProvider } from './utils/AuthContext'

function AppContent(){
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/listavideojuegos' element={<Listado />} />
        <Route element={
          <ProtectedRoutes>
          
          </ProtectedRoutes>}>
        </Route>
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/Detallegame' element={<Detallegame />} />
        <Route path="/Detallegame/:id" element={<Detallegame />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Busqueda' element={<Busqueda />} />
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
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </main>
    </div>

  );
};

export default App;
