function Navbar({ menuOpen }) {

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>

      <a href="#">Inicio</a>
      <a href="#">Café</a>
      <a href="#">Tienda</a>
      <a href="#">Contacto</a>

    </nav>
  );
}

export default Navbar;