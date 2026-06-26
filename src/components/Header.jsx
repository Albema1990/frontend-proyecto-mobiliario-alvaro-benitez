import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
// import products from "../data/products";
import { getProducts } from "../services/productService";
import { useCart } from "../hooks/useCart";

import {
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([]);

  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const value = search.trim().toLowerCase();

      navigate(`/shop/${value}`);

      setSearch("");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

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

            {search.length > 0 && (
              <div className="search-results">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="search-result"
                    onClick={() => {
                      navigate(`/product/${product._id}`);
                      setSearch("");
                    }}
                  >
                    <img
                      src={product.image || "images/default.jpg"}
                      alt={product.name}
                    />

                    <span>{product.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="icon-btn" onClick={() => navigate("/cart")}>
            <HiOutlineShoppingBag />

            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
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
