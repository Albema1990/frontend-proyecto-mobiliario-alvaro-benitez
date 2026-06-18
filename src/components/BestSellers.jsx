// import products from "../data/products";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function BestSellers() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <section className="best-sellers">
      <div className="container">
        <div className="section-title">
          <p>BEST SELLERS</p>

          <h2>Nuestros productos más vendidos</h2>
        </div>

        <div className="products-grid">
          {products
            .filter((product) => product.bestSeller)
            .map((product) => (
              <article key={product._id} className="product-card">
                <div className="product-image">
                  <img src={product.image || "images/default.jpg"} alt={product.name} />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>

                  <p>{product.price}€</p>

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

export default BestSellers;
