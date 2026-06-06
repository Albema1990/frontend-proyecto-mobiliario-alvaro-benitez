import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 3);

  return (
    <main className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
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
