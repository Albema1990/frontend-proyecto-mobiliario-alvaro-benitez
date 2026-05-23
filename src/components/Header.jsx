import Navbar from "./Navbar";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-content container">
        
        {/* logo */}
        <div className="logo">Hygge Home Coffee</div>


        {/* Acciones */}
        <div className="header-actions">

          <div className="search-box">
            <input type="text" placeholder="Buscar..." />
          </div>

          <button className="icon-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
          <button className="icon-btn">🛒</button>
          <button className="icon-btn">👤</button>
        </div>
      </div>

      <Navbar menuOpen={menuOpen} />

    </header>

  );
}

export default Header;
