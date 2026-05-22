import Navbar from "./Navbar";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content container">
        
        {/* logo */}
        <div className="logo">Hygge Home Coffee</div>

        {/* Navegación */}
        <Navbar />

        {/* Acciones */}
        <div className="header-actions">
          <div className="search-box">
            <input type="text" placeholder="Buscar..." />
          </div>

          <button className="icon-btn">🛒</button>
          <button className="icon-btn">👤</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
