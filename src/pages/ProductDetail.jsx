import { Link, useParams } from "react-router-dom";
// import products from "../data/products";

import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { getProductById } from "../services/productService";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const product = products.find((product) => product.id === Number(id));

  useEffect (() => {
    const loadProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);

      const all = await getProducts();
      setAllProducts(all);
    } catch {
      setError("Producto no encontrado");
    } finally {
      setLoading(false);
    }
  };
    loadProduct();
  }, [id]);

  if (loading) {
    return <p className="empty-message">Cargando producto</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  const relatedProducts = Array.isArray(allProducts)? allProducts
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 6) : [];

  return (
    <main className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image || "/images/default.jpg"} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <span className="product-category">{product.category}</span>

            <h1>{product.name}</h1>

            <p className="product-price">{product.price}€</p>

            <p className="product-description">{product.description}</p>

            <div className="product-meta">
              <p>
                <strong>Origen:</strong> {product.origin}
              </p>
              <p>
                <strong>Tueste:</strong> {product.roast}
              </p>
              <p>
                <strong>Peso:</strong> {product.weight}
              </p>
            </div>

            <button className="buy-btn">Añadir al carrito</button>
          </div>
        </div>
      </div>

      <section className="related-products">
        <h2>Descubre más productos de especialidad →</h2>

        <div className="related-scroll">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card"
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.price}€</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
