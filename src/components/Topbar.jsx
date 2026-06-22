import { Link } from "react-router-dom";

function Topbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <div className="topbar">
      <div className="topbar-content container">
        <Link to="/help">Ayuda</Link>

        {!user ? (
          <>
            <Link to="/register">Únete a nosotros</Link>
            <Link to="/login">Iniciar sesión</Link>
          </>
        ) : (
          <>
            <span className="hola-usuario">Hola {user.name}</span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Topbar;
