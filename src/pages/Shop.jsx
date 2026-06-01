import { useParams } from "react-router-dom";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

function Shop() {
  const { category } = useParams();
  const navigate = useNavigate();

  //   console.log(category);

  const filteredProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase(),
      )
    : products;

  return (
    <main className="shop">
      <div className="container">
        <div className="shop-header">
          <p className="shop-subtitle">HYGGE Market</p>
          <h1>{category ? category.toUpperCase() : "Todos los productos"}</h1>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.price}€</p>

                <button
                  className="buy-btn"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Shop;
