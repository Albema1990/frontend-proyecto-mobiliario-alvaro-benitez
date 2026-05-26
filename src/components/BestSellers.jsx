import products from "../data/products";

function BestSellers() {

  return (

    <section className="best-sellers">

      <div className="container">

        <div className="section-title">

          <p>BEST SELLERS</p>

          <h2>Nuestros cafés más vendidos</h2>

        </div>

        <div className="products-grid">

          {products.map((product) => (

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

                <button className="buy-btn">
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