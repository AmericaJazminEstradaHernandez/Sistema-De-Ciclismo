import React, { useState } from 'react'; 
import "./login.css"; 
import logoImage from "./logooo.png"; 

export default function Login() { 
  const [error, setError] = useState(null); 

  const handleSubmit = async (event) => { 
    event.preventDefault(); 
    const usuario = event.target.usuario.value; 
    const contraseña = event.target.contraseña.value; 

    try { 
      const response = await fetch('http://localhost:8081/login', { 
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
      window.location.href = '/home'; 
    } catch (error) { 
      setError(error.message); 
    } 
  }; 

  const handleRegisterClick = () => { 
    try { 
      console.log('Redirigiendo a la página de registro...'); // Para verificar si esta función se está ejecutando
      window.location.href = '/register'; // Redirige al usuario a la página "Register.jsx" 
    } catch (error) { 
      console.error('Error al redirigir a la página de registro:', error); 
    } 
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
