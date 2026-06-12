import initialProducts from "../../data/Products";

import { useState, useEffect } from "react";
import ProductForm from "../../components/ProductForm";

function AdminProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleCreateProduct = (productData) => {
    console.log("PRODUCTO RECIBIDO", productData);
    const newProduct = {
      ...productData,
      id: Date.now(),
    };

    setProducts([...products, newProduct]);

    setShowForm(false);
  };

  return (
    <section className="admin-section">
      <div className="admin-section-header">
        <div>
          <h2>Administración de productos</h2>
          <p>Listado interno de productos</p>
        </div>

        <button
          className="admin-create-button"
          type="button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cerrar formulario" : "Crear producto"}
        </button>
      </div>

      {showForm && <ProductForm onCreateProduct={handleCreateProduct} />}

      <div className="admin-list">
        {products.map((product) => (
          <article key={product.id}>
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
