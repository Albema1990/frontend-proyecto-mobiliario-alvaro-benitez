// import products from "../data/products";
import { useNavigate } from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import { getProducts } from "../services/productService";

function SaleProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const saleProducts = products.filter((product) => product.onSale);

  if (loading) {
    return <p>Cargando ofertas...</p>;
  }

  return (
    <section className="sale-products">
      <div className="container">
        <div className="section-title">
          <p>OFERTAS</p>

          <h2>Productos en oferta</h2>
        </div>

        <div className="sale-controls">
          <button onClick={scrollLeft} className="scroll-btn">
            ←
          </button>

          <button onClick={scrollRight} className="scroll-btn">
            →
          </button>
        </div>

        <div className="sale-scroll" ref={scrollRef}>
          {saleProducts.map((product) => (
            <article key={product._id} className="product-card">
              <div className="product-image">
                <span className="sale-badge">SALE</span>

                <img
                  src={product.image || "images/default.jpg"}
                  alt={product.name}
                />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <div className="product-prices">
                  <p className="old-price">{product.oldPrice}€</p>

                  <p className="sale-price">{product.price}€</p>
                </div>

                <button
                  className="buy-btn"
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SaleProducts;
