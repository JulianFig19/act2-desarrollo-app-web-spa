import React from "react";


const Login = () => {
  return (
    <div className="w-100 d-flex text-center m-auto">
      <main className="form-signin w-50 m-auto mt-5"> 
        <form> 
          <h1 class="h3 mb-3 fw-normal">Iniciar Sesión</h1> 
          <div class="form-floating mb-1"> 
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/> <label for="floatingInput">Email address</label> 
          </div> 
          <div class="form-floating"> 
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/> <label for="floatingPassword">Password</label> 
          </div> 
          <div class="form-check text-start my-3"> 
            <input class="form-check-input" type="checkbox" value="remember-me" id="checkDefault"/> 
            <label class="form-check-label" for="checkDefault"> Remember me</label> 
          </div> 
          
          <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button> 
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2025</p> 
        </form> 
      </main>
    </div>
  );
};

export default Login;