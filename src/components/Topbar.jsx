import { Link } from "react-router-dom";

function Topbar() {

  return (
    <div className="topbar">

      <div className="topbar-content container">

        <Link to="/help">Ayuda</Link>

        <Link to="/register">Únete a nosotros</Link>

        <Link to="/login">Iniciar sesión</Link>

      </div>

    </div>
  );
}

export default Topbar;