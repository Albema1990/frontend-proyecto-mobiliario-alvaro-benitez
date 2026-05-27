import { useState } from "react";
import Navbar from "./Navbar";

import {
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 


  return (
    <header className="site-header">
      <div className="header-content container">
        <div className="logo">HYGGE</div>

        <Navbar menuOpen={menuOpen} />

        <div className="header-actions">
          <div className="search-box">
            <input
              className="search-input"
              type="text"
              name="search"
              id="search"
              placeholder="Buscar..."
            />

          </div>

          <button className="icon-btn">
            <HiOutlineShoppingBag />
          </button>

          <button
            className="icon-btn mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
