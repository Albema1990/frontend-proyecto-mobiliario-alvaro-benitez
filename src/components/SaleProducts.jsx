import products from "../data/products";
import { useNavigate } from "react-router-dom";

function SaleProducts() {

  const navigate = useNavigate();

  const saleProducts = products.filter(
    product => product.onSale
  );

  return (

    <section className="sale-products">

      <div className="container">

        <div className="section-title">

          <p>OFERTAS</p>

          <h2>Productos en oferta</h2>

        </div>

        <div className="sale-scroll">

          {saleProducts.map((product) => (

            <article
              key={product.id}
              className="product-card"
            >

              <div className="product-image">

                <span className="sale-badge">
                  SALE
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="product-info">

                <h3>{product.name}</h3>

                <div className="product-prices">

                  <p className="old-price">
                    {product.oldPrice}€
                  </p>

                  <p className="sale-price">
                    {product.price}€
                  </p>

                </div>

                <button className="buy-btn" onClick={() => navigate(`/product/${product.id}`)}>
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