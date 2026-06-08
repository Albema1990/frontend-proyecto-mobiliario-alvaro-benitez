import products from "../data/products";
import { useNavigate } from "react-router-dom";

function BestSellers() {

  const navigate = useNavigate();

  return (

    <section className="best-sellers">

      <div className="container">

        <div className="section-title">

          <p>BEST SELLERS</p>

          <h2>Nuestros productos más vendidos</h2>

        </div>

        <div className="products-grid">

          {products
            .filter(product => product.bestSeller)
            .map((product) => (

            <article
              key={product.id}
              className="product-card"
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="product-info">

                <h3>{product.name}</h3>

                <p>{product.price}€</p>

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

export default BestSellers;