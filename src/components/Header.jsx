import { useState } from "react";
import Navbar from "./Navbar";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">

      <div className="header-content container">

        <div className="logo">
          HYGGE
        </div>

        <div className="header-actions">

          <button
            className="icon-btn mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <button className="icon-btn">
            🛒
          </button>

        </div>

      </div>

      <Navbar menuOpen={menuOpen} />

    </header>
  );
}

export default Header;