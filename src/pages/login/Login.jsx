import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory para gestionar la redirección
import "./login.css";
import logoImage from "./logooo.png";

export default function Login() {
  const [error, setError] = useState(null);
  const history = useHistory(); // Inicializa useHistory

  const handleSubmit = async (event) => {
    event.preventDefault();
    const usuario = event.target.usuario.value;
    const contraseña = event.target.contraseña.value;

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, contraseña })
      });

      if (!response.ok) {
        throw new Error('Usuario o contraseña incorrectos');
      }

      // Si la respuesta es exitosa, redirige al usuario a la página "Home"
      history.push('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  // Función para manejar la redirección al hacer clic en "Crear una nueva cuenta"
  const handleRegisterClick = () => {
    history.push('/register'); // Redirige al usuario a la página "Register.jsx"
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SPEED wheels</h3>
          <span className="loginDesc">
            Conéctate y participa en carreras de ruta.
          </span>
          <img src={logoImage} alt="Imagen de carreras de ruta" className="rutaImage" />
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Usuario" className="loginInput" name="usuario" />
            <input placeholder="Contraseña" type="password" className="loginInput" name="contraseña" />
            <button type="submit" className="loginButton">Entrar</button>
            {error && <div className="errorMessage">{error}</div>}
            <span className="loginForgot">¿Olvidaste tu contraseña?</span>
            {/* Agrega el manejador de clic para redirigir al usuario a "Register.jsx" */}
            <button className="loginRegisterButton" onClick={handleRegisterClick}>
              Crear Una Nueva Cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
