import "./login.css";
import logoImage from "./logooo.png";

export default function Login() {
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
          <div className="loginBox">
            <input placeholder="Usuario" className="loginInput" />
            <input placeholder="Contraseña" className="loginInput" />
            <button className="loginButton">Entrar</button>
            <span className="loginForgot">¿Olvidaste tu contraseña?</span>
            <button className="loginRegisterButton">
              Crear Una Nueva Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
