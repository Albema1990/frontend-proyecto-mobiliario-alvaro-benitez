import { Link } from "react-router-dom";

function Navbar({ menuOpen }) {

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>

      <Link to="/">Inicio</Link>
      <Link to="/shop">Tienda</Link>
      <Link to="/about">Nosotros</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/admin">Admin</Link>

    </nav>
  );
}

export default Navbar;