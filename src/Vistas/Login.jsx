import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useLogin from '../hooks/useLogin';
import { AuthContext } from '../utils/AuthContext';
import { useContext } from "react";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useLogin();
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  // const {user, loginUser} = useAuth()
  // const navigate = useNavigate()

  // const loginForm = useRef(null)

  // useEffect(() => {
  //     if(user){
  //       navigate('/')
  //     }
  // }, [])
  
  // Determinar la ruta de redirección. Si viene de una ruta protegida, se usa "from"
  const from = location.state?.from || '/';

  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loggedUser = await login(username, password);
            setUser(loggedUser);
            navigate(from, { replace: true });
        } catch (err) {
            // El error ya se gestiona en el hook (y se muestra en la vista)
            console.error("Error de login:", err);
        }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const user = loginForm.current.username.value;
  //   const password = loginForm.current.password.value;

  //   try {
  //     const loggedUser = await loginUser(user, password);
  //     setUser
  //   } catch (error) {
  //     console.error("Error en el login:", error)
      
  //   }
  // }

  return (
    <div className="w-100 d-flex text-center m-auto">
      <main className="form-signin w-50 m-auto mt-5"> 
        <form onSubmit={handleSubmit}> 
          <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1> 
          <div className="form-floating mb-1"> 
            <input type="text" 
              name="username" 
              value={username}
              onChange={e => setUsername(e.target.value)} 
              disabled={loading}
              className="form-control" 
              id="floatingInput" 
              placeholder="name@example.com"
              required
            /> 
              <label htmlFor="floatingInput">Usuario</label> 
          </div> 
          <div className="form-floating"> 
            <input type="password" 
              name="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={loading}
              className="form-control" 
              id="floatingPassword" 
              placeholder="Password"
              required
            /> 
              <label htmlFor="floatingPassword">Contraseña</label> 
          </div> 
          {error && <p className="login_error"> {error}</p>}
          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button> 
          <p className="mt-5 mb-3 text-body-secondary">© 2025</p> 
        </form> 
      </main>
    </div>
  );
};

export default Login;