function Navbar({ menuOpen }) {

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>

      <a href="#">Inicio</a>
      <a href="#">Tienda</a>
      <a href="#">Nosotros</a>
      <a href="#">Contacto</a>
      <a href="#">Admin</a>

    </nav>
  );
}

export default Navbar;