import { useParams } from "react-router-dom";
// import products from "../data/products";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function Shop() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("No se pudieron cargar los productos");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  //   console.log(category);

  const filteredProducts = category
    ? products.filter(
        (product) => product.category?.toLowerCase() === category.toLowerCase(),
      )
    : products;

  if (loading) {
    return <p className="empty-message">Cargando productos...</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }

  return (
    <main className="shop">
      <div className="container">
        <div className="shop-header">
          <p className="shop-subtitle">HYGGE Market</p>
          <h1>{category ? category.toUpperCase() : "Todos los productos"}</h1>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <div className="product-image">
                <img
                  src={product.image || "/images/default.jpg"}
                  alt={product.name}
                />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.price}€</p>

                <button className="buy-btn">Ver detalles</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Shop;
