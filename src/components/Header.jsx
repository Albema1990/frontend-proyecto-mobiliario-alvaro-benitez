import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import {
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const value = search.trim().toLowerCase();

      navigate(`/shop/${value}`);

        setSearch("");
    }
  };

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
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
