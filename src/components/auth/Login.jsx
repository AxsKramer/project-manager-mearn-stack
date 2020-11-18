import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [user, setUser ] = useState({email: '', password: ''});

  const onChange = e => setUser({...user, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
  }

  const {email, password} = user;

  return ( 
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Log in" />
          </div>
        </form>
        <Link to={'/new-account'} className="enlace-cuenta"> Get an Account </Link>
        <Link to={'/projects'} className="enlace-cuenta"> Proyectos </Link>

      </div>
    </div>
  );
}
 
export default Login;