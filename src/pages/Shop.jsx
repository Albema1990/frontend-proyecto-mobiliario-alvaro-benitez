import { useParams } from "react-router-dom";
import products from "../data/products";

function Shop() {

  const { category } = useParams();

//   console.log(category);

  const filteredProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <main className="shop">
      <div className="container">
        <h1>Tienda</h1>
        <h1>{category ? category.toUpperCase() : "Todos los productos"}</h1>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.price}€</p>

                <button className="buy-btn">Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Shop;
