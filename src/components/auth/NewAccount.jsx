import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {

  const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      confirm: ''
  });

  const { name, email, password, confirm } = user;

  const handleChange = e => setUser({...user, [e.target.name] : e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    if( name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '' ) {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }
    if(password.length < 6) {
        mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
        return;
    }
    if(password !== confirm) {
        mostrarAlerta('Los passwords no son iguales', 'alerta-error');
        return;
    }
  }

  return ( 
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Get an account</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              id="name"
              name="name"
              placeholder="Your Nombre"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">Confirm Password</label>
            <input 
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Confirm your Password"
              value={confirm}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Register" />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">Return to Login</Link>
      </div>
    </div>
  );
}
 
export default NewAccount;