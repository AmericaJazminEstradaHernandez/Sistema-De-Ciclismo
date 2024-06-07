import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SPEED Wheels</h3>
          <span className="loginDesc">
            Registrate y Participa.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Nombre de Usuario" className="loginInput" />
            <input placeholder="Correo Electronico" className="loginInput" />
            <input placeholder="Contraseña" className="loginInput" />
            <input placeholder="Contraseña de Nuevo" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
