import products from "../../data/Products";

import { Link } from "react-router-dom";

function AdminProductsPage() {
  return (
    <section className="admin-section">
      <div className="admin-section-header">
        <div>
          <h2>Administración de productos</h2>
          <p>Listado interno de productos</p>
        </div>
      </div>

      <Link to="#" className="btn">
        Nuevo producto
      </Link>

      <div className="admin-list">
        {products.map((product) => (
            <article>
                <img src={product.image} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p> 
                </div>
            </article>
            ))}
      </div>
    </section>
  );
}

export default AdminProductsPage;
